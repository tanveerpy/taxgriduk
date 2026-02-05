'use client';

import ContentLayout from '@/components/layout/ContentLayout';
import Link from 'next/link';
import { KeyTakeaways, TableOfContents } from '@/components/ui/ArticleFeatures';

export default function OptimalSalaryGuide() {
    const tocItems = [
        { id: 'summary', text: 'My Executive Overview' },
        { id: 'historical-context', text: 'How the 2024 Budget Changed the Game' },
        { id: 'mechanics', text: 'The Logic: Choosing Between CT and NIC' },
        { id: 'strategy', text: 'My Recommended Strategy for 2025/26' },
        { id: 'employment-allowance', text: 'A Clever Employment Allowance Hack' },
        { id: 'side-hustle', text: 'Case Study: If You Have Other Income' },
        { id: 'scottish', text: 'If You Are Based in Scotland' },
        { id: 'faq', text: 'Common Questions I Get Asked' }
    ];

    return (
        <ContentLayout
            title="What Is the Best Director's Salary for 2025/26?"
            subtitle="I've analyzed the new tax rules to help you find the absolute 'sweet spot' for your salary and dividends."
            category="STRATEGY"
        >
            <TableOfContents items={tocItems} />

            <div className="mt-8 mb-12 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm aspect-video max-h-[400px] relative">
                <img
                    src="/taxgriduk/images/guides/salary-planning.webp"
                    alt="Optimal Salary Planning"
                    className="object-cover w-full h-full"
                />
            </div>

            <section id="summary">
                <p className="lead text-xl text-slate-900 font-medium mb-8">
                    Every year, I get asked the same question: "How much salary should I actually take from my company?" For 2025/26, the answer has shifted significantly. In this guide, I'll walk you through why the old rules no longer apply and how you can keep more of what you earn.
                </p>
                <p>
                    Choosing your salary isn't just about picking a number; it's about balancing your personal tax bill against your company's Corporation Tax. I've broken down the logic so you can make an informed choice that fits your specific situation.
                </p>

                <KeyTakeaways items={[
                    "For most of my clients, I recommend a salary of £12,570 to make the most of the Personal Allowance.",
                    "The Employer NI hike to 15% means we have to be much more careful with payroll costs.",
                    "If you can claim the Employment Allowance, your 'sweet spot' might be even higher.",
                    "Don't ignore the LEL (£6,396) – it's vital for your future state pension.",
                    "I've updated this advice for the 2025/26 tax year to reflect the latest HMRC thresholds."
                ]} />
            </section>

            <section id="historical-context" className="mt-16">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">How the 2024 Budget Changed the Game</h2>
                <p>
                    I watched the Autumn 2024 Budget closely, and it delivered a real shock to many business owners. The government didn't touch the main income tax rates, but they made a massive move on National Insurance.
                </p>
                <p className="mt-4">
                    The threshold where your company starts paying Employer NI (the 'Secondary Threshold') was slashed from £9,100 down to just £5,000. At the same time, the rate jumped from 13.8% to 15%. In my experience, this makes the old '£12,570 or nothing' debate much more nuanced. We're now looking at a payroll environment that is effectively more expensive for small limited companies.
                </p>
            </section>

            <section id="mechanics" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">The Logic: Choosing Between CT and NIC</h2>
                <p>
                    Let's look at the tug-of-war happening behind the scenes. When you pay yourself a salary, it's a deductible expense for your company. This means for every £1,000 in salary, I'm saving your company at least £190 (or up to £250) in Corporation Tax.
                </p>
                <p className="mt-4">
                    However, the downside is that once you go over certain limits, National Insurance kicks in. My goal for you is to find the point where the Corporation Tax saving is bigger than the National Insurance cost.
                </p>
                <div className="my-8 p-8 rounded-[2rem] bg-indigo-50 border border-indigo-100">
                    <p className="text-sm font-bold text-indigo-900 uppercase tracking-widest mb-2">My "Rule of Thumb"</p>
                    <p className="text-indigo-800 italic">
                        "If your company is paying the 25% Main Rate of Corporation Tax, I almost always suggest taking the higher salary. The tax deduction is just too valuable to pass up."
                    </p>
                </div>
            </section>

            <section id="strategy" className="mt-20">
                <h2 className="text-3xl font-black mb-10 font-outfit text-slate-900">My Recommended Strategy for 2025/26</h2>
                <div className="space-y-6">
                    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                        <h4 className="font-black text-slate-900 mb-2">Option 1: The £12,570 'Efficiency' Salary</h4>
                        <p className="text-sm text-slate-500 mb-4">This is still my 'go-to' for directors who want to keep things simple. It uses up your full tax-free Personal Allowance.</p>
                        <ul className="text-xs space-y-2 text-slate-400 font-mono">
                            <li className="flex justify-between"><span>Personal Tax:</span> <span className="text-emerald-600 font-bold">£0.00</span></li>
                            <li className="flex justify-between"><span>Employee NI:</span> <span className="text-emerald-600 font-bold">£0.00</span></li>
                            <li className="flex justify-between"><span>Employer NI:</span> <span className="text-red-500">£1,135.50</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="employment-allowance" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">A Clever Employment Allowance Hack</h2>
                <p>
                    If you have at least two employees (including yourself), we can often claim the <strong>Employment Allowance</strong>, which is increasing to £10,500 for 2025.
                </p>
                <p className="mt-4">
                    In this scenario, your company doesn't pay any Employer NI until it exceeds that £10,500 pot. This changes everything. I often advise my eligible clients to take a higher salary in this case, because the Corporation Tax deduction becomes 'pure profit' with no NI downside.
                </p>
            </section>

            <section id="side-hustle" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">Case Study: If You Have Other Income</h2>
                <p>
                    I recently worked with a director who also had a part-time PAYE job. In his case, taking a high salary from his own company would have pushed him straight into the 40% tax bracket.
                </p>
                <div className="p-10 rounded-[3rem] bg-slate-900 text-white mt-8">
                    <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-widest mb-4">I advised him:</h4>
                    <p className="text-lg leading-relaxed">
                        "Since your employment already uses your Personal Allowance, we should drop your director's salary to the LEL (£6,396). This protects your state pension while ensuring we aren't paying 40% tax on a salary that could be taken more efficiently as dividends."
                    </p>
                </div>
            </section>

            <section id="scottish" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">Scottish Regional Variations</h2>
                <p>
                    Scottish directors face a significantly higher tax burden once they cross the £43,662 "Higher Rate" threshold (taxed at 42% vs 40% in England).
                </p>
                <p>
                    For Scottish directors, keeping the salary at £12,570 remains optimal, but the "sweet spot" for dividends is lower. Aggressive extraction in Scotland often leads to a combined dividend/corporation tax rate that rivals the PAYE system, making <strong>Pension Contributions</strong> even more critical for Scottish taxpayers.
                </p>
            </section>

            <section id="faq" className="mt-20">
                <h2 className="text-3xl font-black mb-10 font-outfit text-slate-900">Technical FAQ</h2>
                <div className="space-y-8">
                    <div className="border-b border-slate-100 pb-6">
                        <h4 className="font-black text-slate-900 text-lg mb-2">Q: Should I pay myself a salary if I start my company mid-way through the tax year?</h4>
                        <p className="text-slate-600">A: Yes, but the thresholds change. Director NICs are calculated on an **annualized basis**. If you start in Month 6, your thresholds are effectively halved, but your Personal Allowance remains £12,570 globally. Our calculator handles mid-year prorating automatically.</p>
                    </div>
                    <div className="border-b border-slate-100 pb-6">
                        <h4 className="font-black text-slate-900 text-lg mb-2">Q: Can I pay a salary of £5,000 to avoid NIC entirely?</h4>
                        <p className="text-slate-600">A: Mathematically, yes. You avoid the £1,135 NIC bill. However, you also lose ~£1,400 in Corporation Tax relief (assuming 19% rate). In most cases, paying the tax to get the bigger deduction is the better move. The 'saving' is often a false economy.</p>
                    </div>
                </div>

                <div className="mt-20 p-12 bg-indigo-900 rounded-[3rem] text-center text-white">
                    <h2 className="text-3xl font-black mb-4 font-outfit">HMRC Compliance Statement</h2>
                    <p className="text-indigo-200 mb-10 max-w-2xl mx-auto">
                        This guide is based on the legislation confirmed in the Autumn Budget 2024 and HMRC manuals CA44. Tax laws are subject to change, and we recommend consulting with a chartered accountant for specific personal circumstances.
                    </p>
                    <Link href="/#calculator" className="inline-block px-10 py-5 bg-white text-indigo-900 rounded-2xl font-black shadow-xl hover:bg-indigo-50 transition-all">
                        Consult the Tax Matrix
                    </Link>
                </div>
            </section>
        </ContentLayout>
    );
}
