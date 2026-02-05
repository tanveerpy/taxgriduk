'use client';

import { CalculationBreakdown } from '@/lib/tax-engine/types';
import { formatCurrency, formatPercent } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveExplanations from './InteractiveExplanations';
import TrustSignals from '@/components/ui/TrustSignals';

interface ResultsPanelProps {
    results: CalculationBreakdown | null;
    snapshot?: CalculationBreakdown | null;
}

export default function ResultsPanel({ results, snapshot }: ResultsPanelProps) {
    const handlePrint = () => {
        window.print();
    };

    if (!results) {
        return (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem]">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg mb-6">
                    <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Ready to Calculate</h4>
                <p className="text-sm text-slate-400 max-w-[240px] leading-relaxed">
                    Set your income variables to see your customized tax projection here.
                </p>
            </div>
        );
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={JSON.stringify(results.inputs)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
            >
                {/* Primary Projection Card */}
                <div className="bg-indigo-600 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-indigo-200">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-100/60">Annual Net Projection</span>
                            <div className="px-3 py-1 bg-indigo-500/30 rounded-full text-[10px] font-bold">LIVE CALCULATION</div>
                        </div>

                        <div>
                            <div className="text-6xl font-bold tracking-tight mb-2">
                                {formatCurrency(results.takeHomePay)}
                            </div>
                            <p className="text-indigo-100 font-medium opacity-80">Total annual take-home after all taxes</p>
                        </div>

                        {snapshot && results.takeHomePay !== snapshot.takeHomePay && (
                            <div className="pt-6 border-t border-indigo-500/50 flex items-center gap-4">
                                <span className="text-xs font-bold text-indigo-100/60 uppercase tracking-wider">Comparison Delta:</span>
                                <span className={`text-sm font-bold px-3 py-1 rounded-lg ${results.takeHomePay > snapshot.takeHomePay ? 'bg-emerald-400 text-emerald-950' : 'bg-rose-400 text-rose-950'}`}>
                                    {results.takeHomePay > snapshot.takeHomePay ? '↑' : '↓'} {formatCurrency(Math.abs(results.takeHomePay - snapshot.takeHomePay))}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-indigo-500/50">
                        <div>
                            <span className="text-[10px] font-bold text-indigo-100/60 uppercase block mb-1">Efficiency</span>
                            <div className="text-2xl font-bold">{formatPercent(100 - results.effectiveTaxRate)}</div>
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-indigo-100/60 uppercase block mb-1">Effective Tax</span>
                            <div className="text-2xl font-bold opacity-60">{formatPercent(results.effectiveTaxRate)}</div>
                        </div>
                    </div>
                </div>

                {/* Analytical Breakdown Grid */}
                <div className="bg-white rounded-[2rem] border border-slate-100 p-8 space-y-8 premium-shadow">
                    <div>
                        <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6 underline decoration-indigo-200 decoration-2 underline-offset-8">Income Sources</h5>
                        <div className="space-y-4">
                            <MetricRow label="Annual Basic Salary" value={results.inputs.salary} />
                            <MetricRow label="Gross Dividends Draw" value={results.inputs.dividends} />
                            <div className="h-px bg-slate-100 mt-6" />
                            <MetricRow label="Aggregate Gross Income" value={results.totalIncome} isHighlight />
                        </div>
                    </div>

                    <div className="pt-4">
                        <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6 underline decoration-rose-200 decoration-2 underline-offset-8">Tax Liabilities</h5>
                        <div className="space-y-4">
                            <MetricRow label="Income Tax (PAYE)" value={results.incomeTaxOnSalary} isNegative />
                            <MetricRow label="Employee NI Contribution" value={results.employeeNIC} isNegative />
                            <MetricRow label="Employer NI (Company Cost)" value={results.employerNIC} isNegative />
                            <MetricRow label="Dividend Tax Liability" value={results.totalDividendTax} isNegative />
                            {results.studentLoanRepayment > 0 && (
                                <MetricRow label="Student Loan Repayment" value={results.studentLoanRepayment} isNegative />
                            )}
                            <div className="h-px bg-slate-100 mt-6" />
                            <MetricRow label="Total Tax & NI Deductions" value={results.totalTaxAndNIC} isNegative isHighlight />
                        </div>
                    </div>
                </div>

                {/* Tactical Insight Card */}
                <div className="bg-white rounded-[2rem] border border-indigo-100 p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-100">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h5 className="text-lg font-bold text-slate-900">Marginal Efficiency</h5>
                                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Next £1.00 Draw</p>
                            </div>
                        </div>

                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-4xl font-bold text-slate-900">{formatPercent(results.marginalRateNext1)}</span>
                            <span className="text-slate-400 font-medium">Marginal Rate</span>
                        </div>

                        <p className="text-sm text-slate-500 leading-relaxed">
                            For every additional £1.00 of dividends, your net income will change by <span className="font-bold text-slate-800">{formatPercent(results.marginalRateNext1)}</span> due to progressive thresholds.
                        </p>
                    </div>
                </div>

                {/* Educational Content Hub */}
                <InteractiveExplanations results={results} />

                {/* Final Actions */}
                <div className="pt-6 flex flex-col gap-3">
                    <button
                        onClick={handlePrint}
                        className="w-full h-14 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-xl shadow-slate-200 flex items-center justify-center gap-3 hover:bg-slate-800 transition-all active:scale-[0.98]"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 00-2 2h2m24 0v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4m14-8V4a2 2 0 00-2-2H9a2 2 0 00-2 2v4" />
                        </svg>
                        <span>Print Tactical Summary</span>
                    </button>
                    <p className="text-[10px] text-center font-bold text-slate-300 uppercase tracking-widest">
                        SECURE GENERATION // ENCRYPTED SESSION
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

function MetricRow({ label, value, isNegative, isHighlight }: { label: string, value: number, isNegative?: boolean, isHighlight?: boolean }) {
    return (
        <div className={`flex justify-between items-center group transition-all`}>
            <span className={`text-[13px] font-medium tracking-tight ${isHighlight ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>
                {label}
            </span>
            <span className={`text-[15px] font-bold tracking-tight ${isNegative ? 'text-rose-500' : isHighlight ? 'text-indigo-600 text-lg' : 'text-slate-900'}`}>
                {isNegative ? '-' : '+'} {formatCurrency(Math.abs(value))}
            </span>
        </div>
    );
}
