'use client';

import ContentLayout from '@/components/layout/ContentLayout';
import { KeyTakeaways, TableOfContents } from '@/components/ui/ArticleFeatures';

export default function TaxYear2026() {
    const tocItems = [
        { id: 'dividend-rise', text: 'The 2026 Dividend Tax Rise' },
        { id: 'double-hit', text: 'Preparing for the "Double Hit"' },
        { id: 'taking-money-early', text: 'Should You Take Dividends Early?' },
        { id: 'frozen-bands', text: 'Frozen Tax Bands' },
        { id: 'corporation-tax', text: 'The Future of Business Tax' },
        { id: 'scotland', text: 'If You Are in Scotland' }
    ];

    return (
        <ContentLayout
            title="Tax Changes for 2026/27"
            subtitle="I'm looking ahead to the April 2026 changes, so you can start planning your dividends now."
            category="REFERENCE"
        >
            <TableOfContents items={tocItems} />

            <section id="dividend-rise">
                <div className="mt-8 mb-12 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm aspect-video max-h-[400px] relative">
                    <img
                        src="/taxgriduk/images/guides/tax-future-2026.webp"
                        alt="The 2026 Dividend Tax Rise"
                        className="object-cover w-full h-full"
                    />
                </div>
                <p className="lead text-xl text-slate-900 font-medium mb-8">
                    If you take a lot of dividends, you'll need to watch out for 2026. The government has confirmed they're raising dividend tax rates by **2 percentage points** to match the changes they made to National Insurance.
                </p>

                <KeyTakeaways items={[
                    "The Basic Rate for dividends is going up to 10.75%.",
                    "The Higher Rate for dividends is climbing to 35.75%.",
                    "Your £12,570 Personal Allowance is still frozen.",
                    "The point where you hit Higher Rate tax stays at £50,270.",
                    "The Employer NI changes from 2025 will still be in effect."
                ]} />

                <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm bg-white mt-12 mb-8 text-center">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="p-4 text-xs font-black uppercase tracking-widest text-slate-500">How Dividends are Changing</th>
                                <th className="p-4 text-xs font-black uppercase tracking-widest text-slate-500">2025/26 Rate</th>
                                <th className="p-4 text-xs font-black uppercase tracking-widest text-slate-500 text-indigo-600">New 2026/27 Rate</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-b border-slate-50">
                                <td className="p-4 font-bold">Basic Rate</td>
                                <td className="p-4">8.75%</td>
                                <td className="p-4 text-orange-600 font-black">10.75%</td>
                            </tr>
                            <tr className="border-b border-slate-50">
                                <td className="p-4 font-bold">Higher Rate</td>
                                <td className="p-4">33.75%</td>
                                <td className="p-4 text-orange-600 font-black">35.75%</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold">Additional Rate</td>
                                <td className="p-4">39.35%</td>
                                <td className="p-4 font-bold">39.35%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="double-hit" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">Preparing for the "Double Hit"</h2>
                <p className="mb-6">I've noticed that for many of my clients, this creates a two-step tax rise that really starts to add up by 2026.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8 rounded-[2.5rem] bg-indigo-50 border border-indigo-100">
                        <h4 className="font-black uppercase text-[10px] tracking-widest text-indigo-400 mb-4">Step 1: Payroll (2025)</h4>
                        <p className="text-sm text-indigo-900 font-medium">Your company starts paying more National Insurance on your salary.</p>
                    </div>
                    <div className="p-8 rounded-[2.5rem] bg-orange-50 border border-orange-100">
                        <h4 className="font-black uppercase text-[10px] tracking-widest text-orange-400 mb-4">Step 2: Dividends (2026)</h4>
                        <p className="text-sm text-orange-900 font-medium">You personally pay an extra 2% tax on every pound of dividends you take.</p>
                    </div>
                </div>
            </section>

            <section id="taking-money-early" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">Should You Take Dividends Early?</h2>
                <p>If your company has extra profit sitting in the bank, I often suggest looking at "accelerating" your dividends. If you take them before April 6, 2026, you can lock in the current lower rates and save that extra 2% tax.</p>
                <div className="mt-6 p-6 bg-red-50 rounded-2xl border border-red-100 italic">
                    <h4 className="font-black uppercase text-[10px] tracking-widest mb-2 text-red-900">A Word of Caution</h4>
                    <p className="text-sm text-red-800 font-medium leading-relaxed">
                        Don't take so much that you push yourself into the £100,000 "Tax Trap." Losing your personal allowance would cost you way more than the 2% you're trying to save.
                    </p>
                </div>
            </section>

            <section id="frozen-bands" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">Frozen Tax Bands</h2>
                <p>While the dividend rates are going up, the thresholds stay the same. This means as your business grows, more of your profit will naturally fall into the higher tax brackets. I'm keeping a close eye on this for all my clients to make sure we're still being as efficient as possible.</p>
            </section>

            <section id="corporation-tax" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">The Future of Business Tax</h2>
                <p>The system where you pay 19% on small profits and 25% on larger ones isn't going anywhere. Because the Corporation Tax is so high, it makes things like putting money into your pension even more attractive—because you save that tax before it's even paid.</p>
            </section>

            <section id="scotland" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">If You Are in Scotland</h2>
                <p>I expect the Scottish government will continue to set their own (often higher) rates for 2026. Even with the dividend rise, running a Limited Company is still usually the best way for higher-earning Scottish directors to manage their tax bill.</p>

                <div className="mt-24 p-12 bg-indigo-900 rounded-[3rem] text-center text-white">
                    <h3 className="text-3xl font-black mb-4 font-outfit text-white">Ready to see the impact?</h3>
                    <p className="text-indigo-200 mb-10 max-w-xl mx-auto leading-relaxed text-lg">
                        I've updated my calculator to include these 2026 rates. You can now compare your take-home pay across different years to see exactly when you should be taking your money.
                    </p>
                    <a href="/#calculator" className="inline-block px-10 py-5 bg-white text-indigo-900 rounded-2xl font-black shadow-xl hover:bg-indigo-50 transition-all text-lg font-outfit">
                        Run the 2026 Comparison
                    </a>
                </div>
            </section>
        </ContentLayout>
    );
}
