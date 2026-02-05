'use client';

import { useState, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CalculatorInputs, CalculationBreakdown } from '@/lib/tax-engine/types';
import { calculateTaxBreakdown } from '@/lib/tax-engine/calculator';
import ResultsPanel from './ResultsPanel';

const calculatorSchema = z.object({
    taxYear: z.enum(['2025-26', '2026-27']),
    region: z.enum(['england-wales', 'scotland']),
    directorStatus: z.enum(['director', 'employee']),
    salary: z.number().min(0).max(1000000),
    dividends: z.number().min(0).max(10000000),
    otherIncome: z.number().min(0),
    pensionContribution: z.number().min(0),
    studentLoanPlan: z.enum(['none', 'plan1', 'plan2', 'plan4', 'plan5', 'postgraduate']),
    employmentAllowance: z.boolean(),
});

type CalculatorFormData = z.infer<typeof calculatorSchema>;

export default function CalculatorInterface() {
    const [results, setResults] = useState<CalculationBreakdown | null>(null);
    const [snapshot, setSnapshot] = useState<CalculationBreakdown | null>(null);

    const { register, handleSubmit, watch, setValue, control, formState: { errors } } = useForm<CalculatorFormData>({
        resolver: zodResolver(calculatorSchema),
        defaultValues: {
            taxYear: '2025-26',
            region: 'england-wales',
            directorStatus: 'director',
            salary: 12570,
            dividends: 30000,
            otherIncome: 0,
            pensionContribution: 0,
            studentLoanPlan: 'none',
            employmentAllowance: false,
        },
    });

    const salaryValue = useWatch({ control, name: 'salary' });
    const dividendsValue = useWatch({ control, name: 'dividends' });

    // Handle URL state hydration on mount
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const hasParams = params.keys().next().value;

        if (hasParams) {
            const state: any = {};
            // Map common types properly
            params.forEach((value, key) => {
                if (['salary', 'dividends', 'otherIncome', 'pensionContribution'].includes(key)) {
                    state[key] = Number(value);
                } else if (key === 'employmentAllowance') {
                    state[key] = value === 'true';
                } else {
                    state[key] = value;
                }
            });

            try {
                Object.keys(state).forEach((key) => {
                    setValue(key as any, state[key]);
                });
                onCalculate(state);
            } catch (e) {
                console.error("Failed to hydrate state from URL", e);
            }
        } else {
            // Run initial calculation for default values
            onCalculate({
                taxYear: '2025-26',
                region: 'england-wales',
                directorStatus: 'director',
                salary: 12570,
                dividends: 30000,
                otherIncome: 0,
                pensionContribution: 0,
                studentLoanPlan: 'none',
                employmentAllowance: false,
            });
        }
    }, [setValue]);

    // Live update results when core values change
    useEffect(() => {
        const subscription = watch((value) => {
            try {
                const validatedData = calculatorSchema.parse(value);
                const calculation = calculateTaxBreakdown(validatedData as CalculatorInputs);
                setResults(calculation);

                // Update URL with clean parameters
                const params = new URLSearchParams();
                Object.entries(validatedData).forEach(([key, val]) => {
                    if (val !== undefined && val !== null && val !== '') {
                        params.set(key, String(val));
                    }
                });
                const newUrl = `${window.location.pathname}?${params.toString()}`;
                window.history.replaceState(null, '', newUrl);
            } catch (e) {
                // Wait for valid data
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const onCalculate = (data: CalculatorFormData) => {
        const calculation = calculateTaxBreakdown(data as CalculatorInputs);
        setResults(calculation);
    };

    const takeSnapshot = () => results && setSnapshot(results);
    const clearSnapshot = () => setSnapshot(null);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 p-4 md:p-10">
            {/* Input Side */}
            <div className="lg:col-span-7 space-y-12">
                <div className="border-b border-slate-100 pb-8">
                    <h3 className="text-3xl font-bold text-slate-900 mb-3 font-outfit">Financial Parameters</h3>
                    <p className="text-slate-500 text-base leading-relaxed">
                        Complete your profile details to generate a high-precision tax efficiency report.
                    </p>
                </div>

                <form className="space-y-12">
                    {/* Basic Context Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Target Tax Year</label>
                            <select {...register('taxYear')} className="input-field cursor-pointer">
                                <option value="2025-26">Current (2025/26)</option>
                                <option value="2026-27">Successive (2026/27)</option>
                            </select>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Business Residence</label>
                            <select {...register('region')} className="input-field cursor-pointer">
                                <option value="england-wales">England & Wales</option>
                                <option value="scotland">Scotland (Adjusted)</option>
                            </select>
                        </div>
                    </div>

                    {/* Core Income Sliders - More Human Friendly */}
                    <div className="space-y-10 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-inner">
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <label className="text-sm font-bold text-slate-600">Annual Gross Salary (£)</label>
                                <div className="text-2xl font-black text-indigo-600 font-outfit">£{salaryValue?.toLocaleString()}</div>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="150000"
                                step="100"
                                {...register('salary', { valueAsNumber: true })}
                                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 transition-all hover:accent-indigo-500"
                            />
                            <div className="flex justify-between text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">
                                <span>£0</span>
                                <span className="text-indigo-500">Optimum: £12,570</span>
                                <span>£150k</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <label className="text-sm font-bold text-slate-600">Total Dividend Draw (£)</label>
                                <div className="text-2xl font-black text-indigo-600 font-outfit">£{dividendsValue?.toLocaleString()}</div>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="300000"
                                step="500"
                                {...register('dividends', { valueAsNumber: true })}
                                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 transition-all hover:accent-indigo-500"
                            />
                            <div className="flex justify-between text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">
                                <span>£0</span>
                                <span>£300k+</span>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Other Non-Dividend Income</label>
                            <input
                                type="number"
                                {...register('otherIncome', { valueAsNumber: true })}
                                className="input-field"
                                placeholder="0"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Employer Pension Contribution</label>
                            <input
                                type="number"
                                {...register('pensionContribution', { valueAsNumber: true })}
                                className="input-field"
                                placeholder="0"
                            />
                        </div>
                    </div>

                    {/* Refined Toggle */}
                    <div className="flex flex-col gap-6">
                        <label className="flex items-center group cursor-pointer p-6 rounded-3xl border border-slate-100 bg-white hover:border-indigo-100 transition-all shadow-sm">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    {...register('employmentAllowance')}
                                    className="peer sr-only"
                                />
                                <div className="w-14 h-7 bg-slate-200 rounded-full peer peer-checked:bg-emerald-500 transition-colors after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-7" />
                            </div>
                            <div className="ml-6 flex-1">
                                <span className="text-base font-bold text-slate-900 block group-hover:text-indigo-600 transition-colors">Employment Allowance</span>
                                <p className="text-xs font-medium text-slate-400">Apply the NIC offset for eligible businesses (Max £10,500)</p>
                            </div>
                        </label>
                    </div>

                    <button
                        type="button"
                        onClick={handleSubmit(onCalculate)}
                        className="btn-primary w-full shadow-lg shadow-indigo-100 flex items-center justify-center gap-4 group"
                    >
                        <span className="text-lg">Update Calculation</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </form>
            </div>

            {/* Output Side */}
            <div className="lg:col-span-5 relative">
                <div className="lg:sticky lg:top-32 space-y-8">
                    <ResultsPanel results={results} snapshot={snapshot} />

                    {results && (
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={takeSnapshot}
                                className="flex flex-col items-center justify-center p-8 rounded-[2rem] border border-slate-100 bg-white hover:border-indigo-200 transition-all shadow-sm hover:shadow-md group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-indigo-50 transition-colors">
                                    <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="text-[13px] font-bold text-slate-900 italic">Compare Baseline</span>
                            </button>
                            <button
                                onClick={clearSnapshot}
                                className="flex flex-col items-center justify-center p-8 rounded-[2rem] border border-slate-100 bg-white hover:border-rose-100 transition-all shadow-sm hover:shadow-md group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-rose-50 transition-colors">
                                    <svg className="w-6 h-6 text-slate-400 group-hover:text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                                <span className="text-[13px] font-bold text-slate-900 italic">Clear Current</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
