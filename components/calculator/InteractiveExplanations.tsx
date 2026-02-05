'use client';

import { CalculationBreakdown } from '@/lib/tax-engine/types';
import { formatCurrency } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveExplanationsProps {
    results: CalculationBreakdown;
}

export default function InteractiveExplanations({ results }: InteractiveExplanationsProps) {
    const explanations = [];

    // Personal Allowance Tapering
    if (results.totalIncome > 100000) {
        const lostPA = Math.min(12570, (results.totalIncome - 100000) / 2);
        explanations.push({
            id: 'PA_TAPER',
            title: 'Personal Allowance Reduction',
            desc: `Your Personal Allowance is reduced by £1 for every £2 earned over £100,000. Current reduction: ${formatCurrency(lostPA)}.`,
            impact: 'Tax Trap Warning',
            type: 'warning'
        });
    }

    // Dividends Allowance
    explanations.push({
        id: 'DIV_ALLOW',
        title: 'Dividend Allowance',
        desc: `The first £500 of dividends are tax-free. Everything above this threshold is taxed at your current highest rate band.`,
        impact: 'Standard Allowance',
        type: 'info'
    });

    // Student Loan
    if (results.studentLoanRepayment > 0) {
        explanations.push({
            id: 'LOAN_SYNC',
            title: 'Student Loan Repayment',
            desc: `Repayments are calculated based on your specific plan thresholds. Note that this is a debt repayment, not a tax.`,
            impact: 'Cash Flow Adjustment',
            type: 'info'
        });
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                <h4 className="text-sm font-black text-slate-800 uppercase tracking-[0.15em]">Critical Tax Intelligence</h4>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <AnimatePresence mode="popLayout">
                    {explanations.map((exp) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-6 rounded-3xl border transition-all ${exp.type === 'warning'
                                    ? 'bg-rose-50 border-rose-100 hover:border-rose-200 shadow-sm shadow-rose-100/50'
                                    : 'bg-white border-slate-100 hover:border-indigo-100 shadow-sm'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className={`text-[13px] font-bold uppercase tracking-wider ${exp.type === 'warning' ? 'text-rose-600' : 'text-indigo-600'
                                    }`}>
                                    {exp.title}
                                </span>
                                <div className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${exp.type === 'warning' ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-500'
                                    }`}>
                                    {exp.impact}
                                </div>
                            </div>
                            <p className="text-sm font-medium text-slate-600 leading-relaxed italic">
                                "{exp.desc}"
                            </p>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {explanations.length === 1 && (
                    <div className="p-8 rounded-[2rem] border border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-3 text-slate-300">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Efficiency Status: Optimal</span>
                        <p className="text-[10px] text-slate-300 mt-1 uppercase font-medium">No complex tapering or high-rate traps detected.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
