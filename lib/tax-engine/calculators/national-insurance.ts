import { TaxYearData, DirectorStatus } from '../types';

/**
 * Calculate Employee National Insurance (Class 1 Primary)
 * Directors use annual earnings period method
 */
export function calculateEmployeeNIC(
    salary: number,
    directorStatus: DirectorStatus,
    taxData: TaxYearData
): number {
    const { primaryThreshold, upperEarningsLimit, employeeRate, employeeUpperRate } = taxData.nicThresholds;

    if (salary <= primaryThreshold) {
        return 0;
    }

    // Director annual method
    if (directorStatus === 'director') {
        const nicableEarnings = Math.max(0, salary - primaryThreshold);
        const earningsUpToUEL = Math.min(nicableEarnings, upperEarningsLimit - primaryThreshold);
        const earningsAboveUEL = Math.max(0, salary - upperEarningsLimit);

        const nicAtStandardRate = earningsUpToUEL * employeeRate;
        const nicAtUpperRate = earningsAboveUEL * employeeUpperRate;

        return Math.round((nicAtStandardRate + nicAtUpperRate) * 100) / 100;
    }

    // Employee standard method (simplified - assumes monthly payment)
    // For accurate calculation, would need to compute per pay period
    const nicableEarnings = Math.max(0, salary - primaryThreshold);
    const earningsUpToUEL = Math.min(nicableEarnings, upperEarningsLimit - primaryThreshold);
    const earningsAboveUEL = Math.max(0, salary - upperEarningsLimit);

    const nicAtStandardRate = earningsUpToUEL * employeeRate;
    const nicAtUpperRate = earningsAboveUEL * employeeUpperRate;

    return Math.round((nicAtStandardRate + nicAtUpperRate) * 100) / 100;
}

/**
 * Calculate Employer National Insurance (Class 1 Secondary)
 * Includes optional employment allowance
 */
export function calculateEmployerNIC(
    salary: number,
    employmentAllowance: boolean,
    taxData: TaxYearData
): number {
    const { secondaryThreshold, employerRate, employmentAllowance: allowanceAmount } = taxData.nicThresholds;

    if (salary <= secondaryThreshold) {
        return 0;
    }

    const nicableEarnings = salary - secondaryThreshold;
    let employerNIC = nicableEarnings * employerRate;

    // Apply employment allowance if eligible
    if (employmentAllowance) {
        employerNIC = Math.max(0, employerNIC - allowanceAmount);
    }

    return Math.round(employerNIC * 100) / 100;
}

/**
 * Check if salary is above Lower Earnings Limit for state pension qualifying year
 */
export function isAboveLowerEarningsLimit(
    salary: number,
    taxData: TaxYearData
): boolean {
    return salary >= taxData.nicThresholds.lowerEarningsLimit;
}
