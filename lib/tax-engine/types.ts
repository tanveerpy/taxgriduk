// Tax Engine Type Definitions
export type TaxYear = '2025-26' | '2026-27';
export type Region = 'england-wales' | 'scotland';
export type DirectorStatus = 'director' | 'employee';
export type StudentLoanPlan = 'none' | 'plan1' | 'plan2' | 'plan4' | 'plan5' | 'postgraduate';

export interface CalculatorInputs {
  taxYear: TaxYear;
  region: Region;
  directorStatus: DirectorStatus;
  salary: number;
  dividends: number;
  otherIncome: number;
  pensionContribution: number;
  studentLoanPlan: StudentLoanPlan;
  employmentAllowance: boolean;
  revenue?: number; // Optional for corporation tax calculation
  expenses?: number; // Optional for corporation tax calculation
}

export interface TaxBand {
  threshold: number;
  limit: number;
  rate: number;
  name: string;
}

export interface NICThresholds {
  lowerEarningsLimit: number;
  primaryThreshold: number;
  secondaryThreshold: number;
  upperEarningsLimit: number;
  employeeRate: number;
  employeeUpperRate: number;
  employerRate: number;
  employmentAllowance: number;
}

export interface DividendRates {
  allowance: number;
  basicRate: number;
  higherRate: number;
  additionalRate: number;
}

export interface CorporationTaxRates {
  smallProfitRate: number;
  mainRate: number;
  lowerLimit: number;
  upperLimit: number;
}

export interface StudentLoanThresholds {
  plan1: number;
  plan2: number;
  plan4: number;
  plan5: number;
  postgraduate: number;
  plan1Rate: number;
  plan2Rate: number;
  plan4Rate: number;
  plan5Rate: number;
  postgraduateRate: number;
}

export interface TaxYearData {
  personalAllowance: number;
  incomeTaxBands: {
    'england-wales': TaxBand[];
    scotland: TaxBand[];
  };
  nicThresholds: NICThresholds;
  dividendRates: DividendRates;
  corporationTax: CorporationTaxRates;
  studentLoanThresholds: StudentLoanThresholds;
}

export interface CalculationBreakdown {
  // Input summary
  inputs: CalculatorInputs;
  
  // Personal allowance
  personalAllowance: number;
  personalAllowanceReduced: number;
  
  // Salary calculations
  taxableSalary: number;
  incomeTaxOnSalary: number;
  employeeNIC: number;
  employerNIC: number;
  netSalary: number;
  
  // Corporation tax
  taxableProfit: number;
  corporationTax: number;
  distributableProfit: number;
  
  // Dividend calculations
  taxableDividends: number;
  dividendAllowanceUsed: number;
  dividendTaxBasicRate: number;
  dividendTaxHigherRate: number;
  dividendTaxAdditionalRate: number;
  totalDividendTax: number;
  netDividends: number;
  
  // Student loans
  studentLoanRepayment: number;
  
  // Totals
  totalIncome: number;
  totalTaxAndNIC: number;
  takeHomePay: number;
  effectiveTaxRate: number;
  marginalRateNext1: number;
  
  // Band usage breakdown
  bandUsage: {
    personalAllowanceUsed: number;
    basicRateBandUsed: number;
    higherRateBandUsed: number;
    additionalRateBandUsed: number;
  };
}

export interface ScenarioComparison {
  scenarios: CalculationBreakdown[];
  bestScenario: number; // Index of best scenario by take-home pay
}
