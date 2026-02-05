import { TaxYearData } from '../types';

// HMRC Tax Data for 2025/26 and 2026/27
// Sources: 
// - https://www.gov.uk/income-tax-rates
// - https://www.gov.uk/tax-on-dividends
// - https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2025-to-2026

export const TAX_DATA: Record<string, TaxYearData> = {
    '2025-26': {
        personalAllowance: 12570,

        incomeTaxBands: {
            'england-wales': [
                { threshold: 0, limit: 12570, rate: 0, name: 'Personal Allowance' },
                { threshold: 12571, limit: 50270, rate: 0.20, name: 'Basic Rate' },
                { threshold: 50271, limit: 125140, rate: 0.40, name: 'Higher Rate' },
                { threshold: 125141, limit: Infinity, rate: 0.45, name: 'Additional Rate' },
            ],

            scotland: [
                { threshold: 0, limit: 12570, rate: 0, name: 'Personal Allowance' },
                { threshold: 12571, limit: 15395, rate: 0.19, name: 'Starter Rate' },
                { threshold: 15396, limit: 27492, rate: 0.20, name: 'Basic Rate' },
                { threshold: 27493, limit: 44273, rate: 0.21, name: 'Intermediate Rate' },
                { threshold: 44274, limit: 75000, rate: 0.42, name: 'Higher Rate' },
                { threshold: 75001, limit: 125140, rate: 0.45, name: 'Advanced Rate' },
                { threshold: 125141, limit: Infinity, rate: 0.48, name: 'Top Rate' },
            ],
        },

        nicThresholds: {
            lowerEarningsLimit: 6500,        // £125/week
            primaryThreshold: 12570,         // £242/week
            secondaryThreshold: 5000,        // Employer threshold (reduced from £9,100)
            upperEarningsLimit: 50270,       // £967/week
            employeeRate: 0.08,              // 8% between PT and UEL
            employeeUpperRate: 0.02,         // 2% above UEL
            employerRate: 0.15,              // 15% above secondary threshold (increased from 13.8%)
            employmentAllowance: 10500,      // £10,500 per year
        },

        dividendRates: {
            allowance: 500,                  // Dividend allowance (reduced from £1,000)
            basicRate: 0.0875,               // 8.75%
            higherRate: 0.3375,              // 33.75%
            additionalRate: 0.3935,          // 39.35%
        },

        corporationTax: {
            smallProfitRate: 0.19,           // 19% for profits up to £50k
            mainRate: 0.25,                  // 25% for profits above £250k
            lowerLimit: 50000,
            upperLimit: 250000,
            // Marginal relief applies between £50k-£250k
            // Effective rate = 19% + ((profit - 50k) * 6% / 200k)
        },

        studentLoanThresholds: {
            plan1: 24990,                    // Plan 1 threshold (2025/26)
            plan2: 27295,                    // Plan 2 threshold
            plan4: 31395,                    // Plan 4 threshold (Scotland)
            plan5: 25000,                    // Plan 5 threshold (2023+ starters)
            postgraduate: 21000,             // Postgraduate loan threshold
            plan1Rate: 0.09,
            plan2Rate: 0.09,
            plan4Rate: 0.09,
            plan5Rate: 0.09,
            postgraduateRate: 0.06,
        },
    },

    '2026-27': {
        personalAllowance: 12570,          // Assumed unchanged

        incomeTaxBands: {
            'england-wales': [
                { threshold: 0, limit: 12570, rate: 0, name: 'Personal Allowance' },
                { threshold: 12571, limit: 50270, rate: 0.20, name: 'Basic Rate' },
                { threshold: 50271, limit: 125140, rate: 0.40, name: 'Higher Rate' },
                { threshold: 125141, limit: Infinity, rate: 0.45, name: 'Additional Rate' },
            ],

            scotland: [
                { threshold: 0, limit: 12570, rate: 0, name: 'Personal Allowance' },
                { threshold: 12571, limit: 15395, rate: 0.19, name: 'Starter Rate' },
                { threshold: 15396, limit: 27492, rate: 0.20, name: 'Basic Rate' },
                { threshold: 27493, limit: 44273, rate: 0.21, name: 'Intermediate Rate' },
                { threshold: 44274, limit: 75000, rate: 0.42, name: 'Higher Rate' },
                { threshold: 75001, limit: 125140, rate: 0.45, name: 'Advanced Rate' },
                { threshold: 125141, limit: Infinity, rate: 0.48, name: 'Top Rate' },
            ],
        },

        nicThresholds: {
            lowerEarningsLimit: 6500,
            primaryThreshold: 12570,
            secondaryThreshold: 5000,
            upperEarningsLimit: 50270,
            employeeRate: 0.08,
            employeeUpperRate: 0.02,
            employerRate: 0.15,
            employmentAllowance: 10500,
        },

        dividendRates: {
            allowance: 500,
            basicRate: 0.1075,               // INCREASED to 10.75% (from 8.75%)
            higherRate: 0.3575,              // INCREASED to 35.75% (from 33.75%)
            additionalRate: 0.3935,          // Unchanged at 39.35%
        },

        corporationTax: {
            smallProfitRate: 0.19,
            mainRate: 0.25,
            lowerLimit: 50000,
            upperLimit: 250000,
        },

        studentLoanThresholds: {
            plan1: 24990,                    // Assumed unchanged
            plan2: 27295,
            plan4: 31395,
            plan5: 25000,
            postgraduate: 21000,
            plan1Rate: 0.09,
            plan2Rate: 0.09,
            plan4Rate: 0.09,
            plan5Rate: 0.09,
            postgraduateRate: 0.06,
        },
    },
};

export function getTaxData(taxYear: string): TaxYearData {
    return TAX_DATA[taxYear] || TAX_DATA['2025-26'];
}
