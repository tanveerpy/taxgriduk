import { StudentLoanPlan, TaxYearData } from '../types';

/**
 * Calculate student loan repayment
 */
export function calculateStudentLoanRepayment(
    totalIncome: number,
    studentLoanPlan: StudentLoanPlan,
    taxData: TaxYearData
): number {
    if (studentLoanPlan === 'none') {
        return 0;
    }

    const { studentLoanThresholds } = taxData;

    let threshold: number;
    let rate: number;

    switch (studentLoanPlan) {
        case 'plan1':
            threshold = studentLoanThresholds.plan1;
            rate = studentLoanThresholds.plan1Rate;
            break;
        case 'plan2':
            threshold = studentLoanThresholds.plan2;
            rate = studentLoanThresholds.plan2Rate;
            break;
        case 'plan4':
            threshold = studentLoanThresholds.plan4;
            rate = studentLoanThresholds.plan4Rate;
            break;
        case 'plan5':
            threshold = studentLoanThresholds.plan5;
            rate = studentLoanThresholds.plan5Rate;
            break;
        case 'postgraduate':
            threshold = studentLoanThresholds.postgraduate;
            rate = studentLoanThresholds.postgraduateRate;
            break;
        default:
            return 0;
    }

    if (totalIncome <= threshold) {
        return 0;
    }

    const repayableIncome = totalIncome - threshold;
    const repayment = repayableIncome * rate;

    return Math.round(repayment * 100) / 100;
}

/**
 * Get student loan plan details for display
 */
export function getStudentLoanPlanDetails(plan: StudentLoanPlan): {
    name: string;
    description: string;
} {
    const plans = {
        none: { name: 'None', description: 'No student loan' },
        plan1: { name: 'Plan 1', description: 'Pre-2012 English & Welsh students, Scottish students' },
        plan2: { name: 'Plan 2', description: '2012+ English & Welsh students' },
        plan4: { name: 'Plan 4', description: 'Scottish students (2007+)' },
        plan5: { name: 'Plan 5', description: '2023+ English & Welsh students' },
        postgraduate: { name: 'Postgraduate', description: 'Postgraduate loan' },
    };

    return plans[plan];
}
