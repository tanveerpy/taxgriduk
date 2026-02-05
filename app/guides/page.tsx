'use client';

import ContentLayout from '@/components/layout/ContentLayout';

export default function GuidesHub() {
    const guides = [
        {
            title: "Optimal Director Salary 2025/26",
            slug: "optimal-director-salary-2025-26",
            description: "I'll help you decide between the £12,570 and £9,100 salary options for the new tax year.",
            category: "ADVICE"
        },
        {
            title: "How I Use Pensions to Save Tax",
            slug: "pension-contributions-via-ltd-company",
            description: "Why employer pension contributions are my favorite way to extract profit tax-free.",
            category: "EFFICIENCY"
        },
        {
            title: "Tax Rates & Thresholds 2025/26",
            slug: "/tax-years/2025-26",
            description: "A quick reference for all the key HMRC numbers and tax bands I use for my clients.",
            category: "REFERENCE"
        },
        {
            title: "The 2026 Dividend Tax Rise",
            slug: "../../tax-years/2026-27",
            description: "A proactive look at the 2% dividend tax increase coming in April 2026.",
            category: "FUTURE"
        },
        {
            title: "Escaping the £100k Tax Trap",
            slug: "../../compare/salary-vs-dividends-100k",
            description: "How we can avoid the 60% effective tax rate and keep your personal allowance.",
            category: "STRATEGY"
        }
    ];

    return (
        <ContentLayout
            title="My Expert Tax Guides"
            subtitle="I've written these guides to help you understand the most efficient ways to pay yourself."
            category="RESOURCES"
        >
            <div className="mt-8 mb-12 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm aspect-[21/9] relative">
                <img
                    src="/images/guides/guides-hub-header.png"
                    alt="Professional Planning Lounge"
                    className="object-cover w-full h-full opacity-80"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {guides.map((guide) => (
                    <a
                        key={guide.title}
                        href={guide.slug.startsWith('/') ? guide.slug : `/guides/${guide.slug}`}
                        className="group block p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <span className="px-3 py-1 bg-slate-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-full group-hover:bg-indigo-50 transition-colors">
                                {guide.category}
                            </span>
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-500">
                                <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-black text-slate-900 mb-4 font-outfit leading-tight">
                            {guide.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">
                            {guide.description}
                        </p>
                    </a>
                ))}
            </div>

            <div className="mt-24 border-t border-slate-100 pt-16">
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Current System Status</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-50 shadow-sm">
                        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[13px] font-bold text-slate-700">HMRC 2025/26 Rates Active</span>
                    </div>
                    <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-50 shadow-sm">
                        <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full" />
                        <span className="text-[13px] font-bold text-slate-700">Last Verified: Today</span>
                    </div>
                    <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-50 shadow-sm">
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                        <span className="text-[13px] font-bold text-slate-700">Calculation Accuracy Checked</span>
                    </div>
                </div>
            </div>
        </ContentLayout>
    );
}
