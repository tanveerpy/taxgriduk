import { TaxYearData, Region } from '../types';

/**
 * Calculate personal allowance with high-income tapering
 * Personal allowance reduces by £1 for every £2 earned above £100,000
 */
export function calculatePersonalAllowance(
    totalIncome: number,
    taxData: TaxYearData
): number {
    const { personalAllowance } = taxData;
    const taperThreshold = 100000;

    if (totalIncome <= taperThreshold) {
        return personalAllowance;
    }

    const excessIncome = totalIncome - taperThreshold;
    const reduction = Math.floor(excessIncome / 2);
    const reducedAllowance = Math.max(0, personalAllowance - reduction);

    return reducedAllowance;
}

/**
 * Calculate income tax on salary for England/Wales or Scotland
 */
export function calculateIncomeTax(
    salary: number,
    personalAllowance: number,
    region: Region,
    taxData: TaxYearData
): number {
    const taxableSalary = Math.max(0, salary - personalAllowance);
    const bands = taxData.incomeTaxBands[region];

    let tax = 0;
    let remainingIncome = taxableSalary;

    for (const band of bands) {
        if (remainingIncome <= 0) break;
        if (band.rate === 0) continue; // Skip personal allowance band

        const bandStart = Math.max(0, band.threshold - personalAllowance);
        const bandLimit = band.limit === Infinity ? Infinity : band.limit - personalAllowance;
        const bandSize = bandLimit - bandStart;

        const incomeInBand = Math.min(remainingIncome, bandSize);
        tax += incomeInBand * band.rate;
        remainingIncome -= incomeInBand;
    }

    return Math.round(tax * 100) / 100;
}

/**
 * Get tax band breakdown for visualization
 */
export function getTaxBandUsage(
    salary: number,
    dividends: number,
    personalAllowance: number,
    region: Region,
    taxData: TaxYearData
): {
    personalAllowanceUsed: number;
    basicRateBandUsed: number;
    higherRateBandUsed: number;
    additionalRateBandUsed: number;
} {
    const totalIncome = salary + dividends;
    const taxableIncome = Math.max(0, totalIncome - personalAllowance);

    const personalAllowanceUsed = Math.min(totalIncome, personalAllowance);
    const bands = taxData.incomeTaxBands[region];

    // Find basic rate threshold (excluding PA)
    const higherBand = bands.find(b => b.name.includes('Higher')) || bands[2];
    const additionalBand = bands.find(b => b.name.includes('Additional') || b.name.includes('Top')) || bands[bands.length - 1];

    const basicRateLimit = (higherBand.threshold - personalAllowance);
    const higherRateLimit = (additionalBand.threshold - personalAllowance);

    const basicRateBandUsed = Math.min(taxableIncome, basicRateLimit);
    const higherRateBandUsed = Math.min(Math.max(0, taxableIncome - basicRateLimit), higherRateLimit - basicRateLimit);
    const additionalRateBandUsed = Math.max(0, taxableIncome - higherRateLimit);

    return {
        personalAllowanceUsed,
        basicRateBandUsed,
        higherRateBandUsed,
        additionalRateBandUsed,
    };
}
