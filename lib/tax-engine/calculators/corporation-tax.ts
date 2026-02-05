import { TaxYearData } from '../types';

/**
 * Calculate corporation tax with marginal relief
 */
export function calculateCorporationTax(
    taxableProfit: number,
    taxData: TaxYearData
): number {
    const { smallProfitRate, mainRate, lowerLimit, upperLimit } = taxData.corporationTax;

    if (taxableProfit <= 0) {
        return 0;
    }

    // Small profits rate (19%)
    if (taxableProfit <= lowerLimit) {
        return Math.round(taxableProfit * smallProfitRate * 100) / 100;
    }

    // Main rate (25%)
    if (taxableProfit >= upperLimit) {
        return Math.round(taxableProfit * mainRate * 100) / 100;
    }

    // Marginal relief between £50k and £250k
    // Effective rate = 19% + ((profit - 50k) * 6% / 200k)
    const marginalRange = upperLimit - lowerLimit; // £200,000
    const excessProfit = taxableProfit - lowerLimit;
    const marginalIncrement = 0.06; // 6% increase over the range

    const effectiveRate = smallProfitRate + (excessProfit * marginalIncrement / marginalRange);
    const corporationTax = taxableProfit * effectiveRate;

    return Math.round(corporationTax * 100) / 100;
}

/**
 * Calculate taxable profit for corporation tax
 */
export function calculateTaxableProfit(
    revenue: number,
    expenses: number,
    salary: number,
    employerNIC: number,
    pensionContribution: number
): number {
    const totalDeductions = expenses + salary + employerNIC + pensionContribution;
    return Math.max(0, revenue - totalDeductions);
}

/**
 * Calculate distributable profit after corporation tax
 */
export function calculateDistributableProfit(
    taxableProfit: number,
    corporationTax: number
): number {
    return Math.max(0, taxableProfit - corporationTax);
}

/**
 * Validate that dividends don't exceed distributable profits
 */
export function validateDividends(
    requestedDividends: number,
    distributableProfit: number
): { isValid: boolean; maxDividends: number; warning?: string } {
    if (requestedDividends <= distributableProfit) {
        return { isValid: true, maxDividends: distributableProfit };
    }

    return {
        isValid: false,
        maxDividends: distributableProfit,
        warning: `Requested dividends (£${requestedDividends.toLocaleString()}) exceed distributable profits (£${distributableProfit.toLocaleString()}). This would be illegal. Maximum dividends available: £${Math.floor(distributableProfit).toLocaleString()}`,
    };
}
