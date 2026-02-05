import { CalculatorInputs, CalculationBreakdown, TaxYear, Region, DirectorStatus, StudentLoanPlan } from './types';
import { getTaxData } from './data/tax-data';
import { calculatePersonalAllowance, calculateIncomeTax, getTaxBandUsage } from './calculators/income-tax';
import { calculateEmployeeNIC, calculateEmployerNIC } from './calculators/national-insurance';
import { calculateCorporationTax, calculateTaxableProfit, calculateDistributableProfit } from './calculators/corporation-tax';
import { calculateDividendTax } from './calculators/dividend-tax';
import { calculateStudentLoanRepayment } from './calculators/student-loans';

/**
 * Main calculator function that orchestrates all tax calculations
 */
export function calculateTaxBreakdown(
    inputs: CalculatorInputs,
    options: { skipMarginalRate?: boolean } = {}
): CalculationBreakdown {
    const taxData = getTaxData(inputs.taxYear);

    // 1. Calculate personal allowance (with high-income tapering)
    const totalIncomeForAllowance = inputs.salary + inputs.dividends + inputs.otherIncome;
    const personalAllowance = calculatePersonalAllowance(totalIncomeForAllowance, taxData);
    const personalAllowanceReduced = taxData.personalAllowance - personalAllowance;

    // 2. Calculate income tax on salary
    const taxableSalary = Math.max(0, inputs.salary - personalAllowance);
    const incomeTaxOnSalary = calculateIncomeTax(
        inputs.salary,
        personalAllowance,
        inputs.region,
        taxData
    );

    // 3. Calculate National Insurance
    const employeeNIC = calculateEmployeeNIC(inputs.salary, inputs.directorStatus, taxData);
    const employerNIC = calculateEmployerNIC(inputs.salary, inputs.employmentAllowance, taxData);

    // 4. Calculate corporation tax (if revenue/expenses provided)
    let taxableProfit = 0;
    let corporationTax = 0;
    let distributableProfit = 0;

    if (inputs.revenue !== undefined && inputs.expenses !== undefined) {
        taxableProfit = calculateTaxableProfit(
            inputs.revenue,
            inputs.expenses,
            inputs.salary,
            employerNIC,
            inputs.pensionContribution
        );
        corporationTax = calculateCorporationTax(taxableProfit, taxData);
        distributableProfit = calculateDistributableProfit(taxableProfit, corporationTax);
    }

    // 5. Calculate dividend tax
    const dividendCalc = calculateDividendTax(
        inputs.dividends,
        inputs.salary,
        personalAllowance,
        inputs.region,
        taxData
    );

    // 6. Calculate student loan repayment
    const totalIncome = inputs.salary + inputs.dividends + inputs.otherIncome;
    const studentLoanRepayment = calculateStudentLoanRepayment(
        totalIncome,
        inputs.studentLoanPlan,
        taxData
    );

    // 7. Calculate net amounts
    const netSalary = inputs.salary - incomeTaxOnSalary - employeeNIC;
    const netDividends = inputs.dividends - dividendCalc.totalTax;

    // 8. Calculate totals
    const totalTaxAndNIC = incomeTaxOnSalary + employeeNIC + employerNIC + dividendCalc.totalTax + corporationTax;
    const takeHomePay = netSalary + netDividends - studentLoanRepayment;
    const effectiveTaxRate = totalIncome > 0 ? (totalTaxAndNIC / totalIncome) * 100 : 0;

    // 9. Calculate marginal rate (tax on next £1)
    // We skip this if we are already calculating a marginal rate to avoid infinite recursion
    const marginalRateNext1 = options.skipMarginalRate
        ? 0
        : calculateMarginalRate(inputs);

    // 10. Get band usage for visualization
    const bandUsage = getTaxBandUsage(
        inputs.salary,
        inputs.dividends,
        personalAllowance,
        inputs.region,
        taxData
    );

    return {
        inputs,
        personalAllowance,
        personalAllowanceReduced,
        taxableSalary,
        incomeTaxOnSalary,
        employeeNIC,
        employerNIC,
        netSalary,
        taxableProfit,
        corporationTax,
        distributableProfit,
        taxableDividends: dividendCalc.taxableDividends,
        dividendAllowanceUsed: dividendCalc.dividendAllowanceUsed,
        dividendTaxBasicRate: dividendCalc.basicRateTax,
        dividendTaxHigherRate: dividendCalc.higherRateTax,
        dividendTaxAdditionalRate: dividendCalc.additionalRateTax,
        totalDividendTax: dividendCalc.totalTax,
        netDividends,
        studentLoanRepayment,
        totalIncome,
        totalTaxAndNIC,
        takeHomePay,
        effectiveTaxRate: Math.round(effectiveTaxRate * 100) / 100,
        marginalRateNext1,
        bandUsage,
    };
}

/**
 * Calculate marginal tax rate on next £1 by incrementing income
 * Using a £10 increment for better stability
 */
function calculateMarginalRate(inputs: CalculatorInputs): number {
    // 1. Calculate tax on current income
    // Important: skipMarginalRate: true to avoid infinite loop
    const current = calculateTaxBreakdown(inputs, { skipMarginalRate: true });

    // 2. Calculate tax on dividends + £10
    const increment = 10;
    const incrementedInputs = {
        ...inputs,
        dividends: inputs.dividends + increment,
    };
    const incremented = calculateTaxBreakdown(incrementedInputs, { skipMarginalRate: true });

    // 3. Marginal rate = change in total tax / change in income
    const taxDifference = incremented.totalTaxAndNIC - current.totalTaxAndNIC;
    const marginalRate = (taxDifference / increment) * 100;

    return Math.round(marginalRate * 100) / 100;
}

/**
 * Compare multiple scenarios
 */
export function compareScenarios(scenarios: CalculatorInputs[]): {
    results: CalculationBreakdown[];
    bestScenario: number;
} {
    const results = scenarios.map(scenario => calculateTaxBreakdown(scenario));

    // Find scenario with highest take-home pay
    const bestScenario = results.reduce((bestIdx, current, currentIdx, arr) => {
        return current.takeHomePay > arr[bestIdx].takeHomePay ? currentIdx : bestIdx;
    }, 0);

    return {
        results,
        bestScenario,
    };
}

/**
 * Generate shareable URL with encoded inputs
 */
export function encodeInputsToURL(inputs: CalculatorInputs): string {
    const params = new URLSearchParams({
        year: inputs.taxYear,
        region: inputs.region,
        status: inputs.directorStatus,
        salary: inputs.salary.toString(),
        dividends: inputs.dividends.toString(),
        other: inputs.otherIncome.toString(),
        pension: inputs.pensionContribution.toString(),
        loan: inputs.studentLoanPlan,
        allowance: inputs.employmentAllowance.toString(),
    });

    if (inputs.revenue !== undefined) {
        params.append('revenue', inputs.revenue.toString());
    }
    if (inputs.expenses !== undefined) {
        params.append('expenses', inputs.expenses.toString());
    }

    return `?${params.toString()}`;
}

/**
 * Decode URL parameters to inputs
 */
export function decodeURLToInputs(url: string): Partial<CalculatorInputs> {
    const params = new URLSearchParams(url);

    return {
        taxYear: (params.get('year') as TaxYear) || '2025-26',
        region: (params.get('region') as Region) || 'england-wales',
        directorStatus: (params.get('status') as DirectorStatus) || 'director',
        salary: Number(params.get('salary')) || 0,
        dividends: Number(params.get('dividends')) || 0,
        otherIncome: Number(params.get('other')) || 0,
        pensionContribution: Number(params.get('pension')) || 0,
        studentLoanPlan: (params.get('loan') as StudentLoanPlan) || 'none',
        employmentAllowance: params.get('allowance') === 'true',
        revenue: params.get('revenue') ? Number(params.get('revenue')) : undefined,
        expenses: params.get('expenses') ? Number(params.get('expenses')) : undefined,
    };
}
