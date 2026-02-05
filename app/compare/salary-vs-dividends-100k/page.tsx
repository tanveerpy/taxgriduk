'use client';

import ContentLayout from '@/components/layout/ContentLayout';
import { KeyTakeaways, TableOfContents } from '@/components/ui/ArticleFeatures';

export default function Compare100k() {
    const tocItems = [
        { id: 'trap-mechanics', text: 'How the 60% Tax Rate Works' },
        { id: 'child-benefit', text: 'The Child Benefit Danger Zone' },
        { id: 'simulation', text: 'A Real Example: £95k vs £110k' },
        { id: 'spousal-splitting', text: 'Sharing Profit with Your Spouse' },
        { id: 'student-loans', text: 'The 71% Hit for Student Loans' },
        { id: 'solutions', text: 'How I Help You Fix It' },
        { id: 'marginal-relief', text: 'The Corporate Tax Trap' }
    ];

    return (
        <ContentLayout
            title="How to Escape the £100,000 Tax Trap"
            subtitle="I'll show you why earning over £100k can actually leave you with less cash—and how we can avoid it."
            category="STRATEGY"
        >
            <TableOfContents items={tocItems} />

            <div className="mt-8 mb-12 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm aspect-video max-h-[400px] relative">
                <img
                    src="/images/guides/navigating-complexity.png"
                    alt="Navigating the £100,000 Tax Trap"
                    className="object-cover w-full h-full"
                />
            </div>

            <section id="trap-mechanics">
                <p className="lead text-xl text-slate-900 font-medium mb-8">
                    In my years of advising business owners, I've found that £100,000 is the most dangerous number in the UK tax system. It's a "trap" that can catch even the most careful directors off guard.
                </p>

                <p>
                    The problem starts with your **Personal Allowance**. For every £2 you earn over £100,000, the government takes away £1 of your tax-free allowance. By the time you hit £125,140, your entire allowance has vanished.
                </p>
                <p>
                    Here's what that actually means for your pocket: you're paying 40% tax on your income, plus you're losing that tax-free allowance (which effectively taxes another part of your income at 40%). When I do the math, it works out to a staggering <strong>60% effective tax rate</strong> on that slice of your pay.
                </p>

                <KeyTakeaways items={[
                    "The trap triggers on your 'Adjusted Net Income'—this includes all your dividends and even bank interest.",
                    "Between £100k and £125k, you are basically working for 40p in every pound.",
                    "If you have kids, the trap is even worse due to childcare benefit losses.",
                    "Dividends don't help you escape this; they still count towards the £100k total.",
                    "I often suggest using pension contributions to 'pull' your income back under the limit."
                ]} />
            </section>

            <section id="child-benefit" className="mt-16">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">The Child Benefit Danger Zone</h2>
                <p>
                    If you have children, the £100,000 mark is an even bigger cliff. You might already know about the High Income Child Benefit Charge (HICBC) that starts at £60k, but there's a hidden cost at £100k that I always warn my clients about.
                </p>
                <p>
                    The moment one parent earns £1 over £100,000, you lose your eligibility for <strong>Tax-Free Childcare</strong> and the <strong>30 free hours</strong> allowance.
                </p>
                <div className="my-8 p-8 rounded-[2rem] bg-red-50 border border-red-100">
                    <p className="text-sm font-bold text-red-900 uppercase tracking-widest mb-2">My "Cliff Edge" Warning</p>
                    <p className="text-red-800">
                        I've seen families with two kids lose over <strong>£10,000 in benefits</strong> just by earning £100,001 instead of £99,999. In my view, it is vital to manage your income carefully if you are anywhere near this threshold.
                    </p>
                </div>
            </section>

            <section id="simulation" className="mt-20">
                <h2 className="text-3xl font-black mb-10 font-outfit text-slate-900">A Real Example: £95k vs £110k</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-8 rounded-[3rem] bg-white border border-slate-100 shadow-xl">
                        <h4 className="font-black text-slate-400 uppercase text-[10px] tracking-widest mb-6">Scenario 1: Staying Safe (£95,000)</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-slate-50 pb-2">
                                <span className="text-slate-500">Your Income</span>
                                <span className="font-bold text-slate-900">£95,000</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-50 pb-2">
                                <span className="text-slate-500">Tax-Free Allowance</span>
                                <span className="font-bold text-emerald-600">£12,570</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-50 pb-2">
                                <span className="text-slate-500">How I see it</span>
                                <span className="font-bold text-slate-900">Highly Efficient</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-8 rounded-[3rem] bg-indigo-900 text-white shadow-xl">
                        <h4 className="font-black text-indigo-300 uppercase text-[10px] tracking-widest mb-6">Scenario 2: The Trap (£110,000)</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-indigo-200">Your Income</span>
                                <span className="font-bold">£110,000</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-indigo-200">Tax-Free Allowance</span>
                                <span className="font-bold text-orange-400">£7,570 (-£5,000)</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-indigo-200">The "Real" Tax on that £15k</span>
                                <span className="font-bold text-orange-400">60%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="spousal-splitting" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">Sharing Profit with Your Spouse</h2>
                <p>
                    If you're married or in a civil partnership, one of the easiest ways I move clients away from the trap is by splitting dividends. By giving ordinary shares to your partner, we can use their tax-free allowances and lower tax bands too.
                </p>
                <p className="mt-4">
                    However, you have to be careful about the "Arctic Systems" rules. I always tell my clients that this split must be a real gift of shares with full rights, and ideally, your partner should have some involvement in the business.
                </p>
            </section>

            <section id="student-loans" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">The 71% Hit for Student Loans</h2>
                <p>
                    If you're a younger director with a <strong>Plan 2 Student Loan</strong>, the £100k trap is exceptionally painful. I've calculated that in the range between £100k and £125k, you can end up losing <strong>71p in every pound</strong> you earn.
                </p>
                <ul className="mt-6 space-y-2 font-mono text-sm bg-slate-900 text-indigo-300 p-6 rounded-2xl">
                    <li>40% Income Tax</li>
                    <li>20% Lost Allowance</li>
                    <li>9% Student Loan Repayment</li>
                    <li>2% National Insurance</li>
                    <li className="border-t border-white/10 pt-2 text-white font-black">71% Total Deduction</li>
                </ul>
            </section>

            <section id="solutions" className="mt-20">
                <h2 className="text-3xl font-black mb-10 font-outfit text-slate-900">How I Help You Fix It</h2>
                <div className="space-y-6">
                    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                        <h4 className="font-black text-slate-900 mb-2">1. The Pension Strategy</h4>
                        <p className="text-sm text-slate-500 font-medium">This is my favorite fix. A personal or company pension contribution can drop your income back below £100,000, saving you from the trap entirely while building your future wealth.</p>
                    </div>
                    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                        <h4 className="font-black text-slate-900 mb-2">2. Giving to Charity</h4>
                        <p className="text-sm text-slate-500 font-medium">Gift Aid donations actually increase your tax thresholds. If you're slightly over £100k, a well-timed donation can pull you back into the "safe zone."</p>
                    </div>
                    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                        <h4 className="font-black text-slate-900 mb-2">3. Planning Your Dividends</h4>
                        <p className="text-sm text-slate-500 font-medium">I help my clients time their dividends so they don't accidentally trip over the threshold. Sometimes waiting until a new tax year can save you thousands.</p>
                    </div>
                </div>
            </section>

            <section id="marginal-relief" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">The Corporate Tax Trap</h2>
                <p>
                    It's not just your personal tax that goes up. If your business profit is over £50,000, you're paying a higher rate of Corporation Tax too. In this "Marginal Relief" zone, the taxman takes <strong>26.5%</strong> before you even get to take your dividends.
                </p>
            </section>

            <section id="compliance" className="mt-20 p-12 bg-indigo-900 rounded-[3rem] text-center text-white">
                <h2 className="text-3xl font-black mb-4 font-outfit">Let's Check Your Situation</h2>
                <p className="text-indigo-200 mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
                    I've updated my calculator to spot this trap for you. Put your numbers in, and I'll show you exactly where your tax bill is spiking—and how we can fix it.
                </p>
                <a href="/#calculator" className="inline-block px-10 py-5 bg-white text-indigo-900 rounded-2xl font-black shadow-xl hover:bg-indigo-50 transition-all text-lg font-outfit">
                    Run My Calculation
                </a>
            </section>
        </ContentLayout>
    );
}
