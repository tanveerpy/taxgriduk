import { TaxYearData, Region } from '../types';

/**
 * Calculate dividend tax
 */
export function calculateDividendTax(
    dividends: number,
    salary: number,
    personalAllowance: number,
    region: Region,
    taxData: TaxYearData
): {
    taxableDividends: number;
    dividendAllowanceUsed: number;
    basicRateTax: number;
    higherRateTax: number;
    additionalRateTax: number;
    totalTax: number;
} {
    const { allowance, basicRate, higherRate, additionalRate } = taxData.dividendRates;

    if (dividends <= 0) {
        return {
            taxableDividends: 0,
            dividendAllowanceUsed: 0,
            basicRateTax: 0,
            higherRateTax: 0,
            additionalRateTax: 0,
            totalTax: 0,
        };
    }

    // Determine tax band limits based on region
    let basicRateLimit: number;
    let higherRateLimit: number;

    if (region === 'england-wales') {
        basicRateLimit = 50270;
        higherRateLimit = 125140;
    } else {
        // Scotland - use main higher rate threshold
        basicRateLimit = 44273; // Intermediate rate ends here
        higherRateLimit = 125140;
    }

    // Calculate how much of basic rate band is used by salary
    const taxableIncome = Math.max(0, salary - personalAllowance);
    const basicRateBandRemaining = Math.max(0, basicRateLimit - personalAllowance - taxableIncome);
    const higherRateBandRemaining = Math.max(0, higherRateLimit - personalAllowance - taxableIncome - basicRateBandRemaining);

    // Apply dividend allowance first
    const dividendsAfterAllowance = Math.max(0, dividends - allowance);
    const dividendAllowanceUsed = Math.min(dividends, allowance);

    let remainingDividends = dividendsAfterAllowance;
    let basicRateTax = 0;
    let higherRateTax = 0;
    let additionalRateTax = 0;

    // Basic rate band
    if (remainingDividends > 0 && basicRateBandRemaining > 0) {
        const basicRateDividends = Math.min(remainingDividends, basicRateBandRemaining);
        basicRateTax = basicRateDividends * basicRate;
        remainingDividends -= basicRateDividends;
    }

    // Higher rate band
    if (remainingDividends > 0 && higherRateBandRemaining > 0) {
        const higherRateDividends = Math.min(remainingDividends, higherRateBandRemaining);
        higherRateTax = higherRateDividends * higherRate;
        remainingDividends -= higherRateDividends;
    }

    // Additional rate band
    if (remainingDividends > 0) {
        additionalRateTax = remainingDividends * additionalRate;
    }

    const totalTax = basicRateTax + higherRateTax + additionalRateTax;

    return {
        taxableDividends: dividendsAfterAllowance,
        dividendAllowanceUsed,
        basicRateTax: Math.round(basicRateTax * 100) / 100,
        higherRateTax: Math.round(higherRateTax * 100) / 100,
        additionalRateTax: Math.round(additionalRateTax * 100) / 100,
        totalTax: Math.round(totalTax * 100) / 100,
    };
}
