'use client';

import ContentLayout from '@/components/layout/ContentLayout';
import { KeyTakeaways, TableOfContents } from '@/components/ui/ArticleFeatures';

export default function TaxYear2025() {
    const tocItems = [
        { id: 'overview', text: 'What You Need to Know for 2025/26' },
        { id: 'income-tax', text: 'Income Tax Bands' },
        { id: 'scottish-tax', text: 'If You Are in Scotland' },
        { id: 'ni-thresholds', text: 'National Insurance (NIC)' },
        { id: 'corporation-tax', text: 'Corporation Tax Rates' },
        { id: 'glossary', text: 'Jargon Buster' }
    ];

    return (
        <ContentLayout
            title="Tax Rates & Limits for 2025/26"
            subtitle="I've gathered all the key numbers you'll need for the tax year starting April 2025."
            category="REFERENCE"
        >
            <TableOfContents items={tocItems} />

            <div className="mt-8 mb-12 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm aspect-video max-h-[400px] relative">
                <img
                    src="/taxgriduk/images/guides/tax-reference-2025.webp"
                    alt="Tax Rates and Thresholds 2025/26"
                    className="object-cover w-full h-full"
                />
            </div>

            <section id="overview">
                <p className="lead text-xl text-slate-900 font-medium mb-8">
                    The 2025/26 tax year brings some of the biggest changes we've seen in a decade, particularly for employers. While your personal tax thresholds are still frozen, the way your company pays National Insurance has been completely overhauled.
                </p>

                <p className="mb-8">
                    I've summarized the most important changes below so you can see at a glance how they might affect your take-home pay.
                </p>

                <KeyTakeaways items={[
                    "Your Personal Allowance is staying at £12,570.",
                    "The point where your company starts paying NI has dropped to £5,000.",
                    "The Employer NI rate has increased to 15%.",
                    "We have a larger £10,500 Employment Allowance to help cover these extra costs.",
                    "Corporation Tax still has that tricky 26.5% 'marginal' band."
                ]} />
            </section>

            <section id="income-tax" className="mt-16">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">Income Tax (England & Wales)</h2>
                <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm bg-white mb-8">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="p-4 text-xs font-black uppercase tracking-widest text-slate-500">Band</th>
                                <th className="p-4 text-xs font-black uppercase tracking-widest text-slate-500">Your Income</th>
                                <th className="p-4 text-xs font-black uppercase tracking-widest text-slate-500">Tax Rate</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-b border-slate-50">
                                <td className="p-4 font-bold">Tax-Free (Personal Allowance)</td>
                                <td className="p-4">Up to £12,570</td>
                                <td className="p-4">0%</td>
                            </tr>
                            <tr className="border-b border-slate-50">
                                <td className="p-4 font-bold">Basic Rate</td>
                                <td className="p-4">£12,571 to £50,270</td>
                                <td className="p-4">20%</td>
                            </tr>
                            <tr className="border-b border-slate-50">
                                <td className="p-4 font-bold">Higher Rate</td>
                                <td className="p-4">£50,271 to £125,140</td>
                                <td className="p-4">40%</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold">Additional Rate</td>
                                <td className="p-4">Over £125,140</td>
                                <td className="p-4">45%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="scottish-tax" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">Scottish Income Tax</h2>
                <p className="mb-8 text-slate-600">If you live in Scotland, things are a bit different. There are more bands, and the rates for higher earners are slightly more expensive.</p>
                <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm bg-white mb-8">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="p-4 text-xs font-black uppercase tracking-widest text-slate-500">Band</th>
                                <th className="p-4 text-xs font-black uppercase tracking-widest text-slate-500">Your Income</th>
                                <th className="p-4 text-xs font-black uppercase tracking-widest text-slate-500">Tax Rate</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-b border-slate-50">
                                <td className="p-4 font-bold">Starter Rate</td>
                                <td className="p-4">£12,571 to £14,876</td>
                                <td className="p-4">19%</td>
                            </tr>
                            <tr className="border-b border-slate-50">
                                <td className="p-4 font-bold">Basic Rate</td>
                                <td className="p-4">£14,877 to £26,561</td>
                                <td className="p-4">20%</td>
                            </tr>
                            <tr className="border-b border-slate-50">
                                <td className="p-4 font-bold">Intermediate Rate</td>
                                <td className="p-4">£26,562 to £43,662</td>
                                <td className="p-4">21%</td>
                            </tr>
                            <tr className="border-b border-slate-50">
                                <td className="p-4 font-bold">Higher Rate</td>
                                <td className="p-4">£43,663 to £75,000</td>
                                <td className="p-4 text-orange-600 font-bold">42%</td>
                            </tr>
                            <tr className="border-b border-slate-50">
                                <td className="p-4 font-bold">Advanced Rate</td>
                                <td className="p-4">£75,001 to £125,140</td>
                                <td className="p-4 font-bold">45%</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold">Top Rate</td>
                                <td className="p-4">Over £125,140</td>
                                <td className="p-4 font-black">48%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="ni-thresholds" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">National Insurance (NIC)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                        <h4 className="font-black uppercase text-[10px] tracking-widest text-slate-400 mb-4">You Pay (Employee)</h4>
                        <ul className="space-y-3 text-sm font-medium text-slate-700">
                            <li className="flex justify-between"><span>Start paying at:</span> <span>£12,570</span></li>
                            <li className="flex justify-between"><span>Main Rate:</span> <span>8%</span></li>
                            <li className="flex justify-between"><span>Rate over £50,270:</span> <span>2%</span></li>
                        </ul>
                    </div>
                    <div className="p-8 rounded-[2.5rem] bg-indigo-50 border border-indigo-100">
                        <h4 className="font-black uppercase text-[10px] tracking-widest text-indigo-400 mb-4">Your Company Pays (Employer)</h4>
                        <ul className="space-y-3 text-sm font-medium text-indigo-900">
                            <li className="flex justify-between"><span>Start paying at:</span> <span className="text-red-600">£5,000</span></li>
                            <li className="flex justify-between"><span>Rate:</span> <span>15%</span></li>
                            <li className="flex justify-between"><span>Employment Allowance:</span> <span>£10,500</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="corporation-tax" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">Corporation Tax Rates</h2>
                <p className="mb-8">The rate your company pays depends on how much profit it makes in a year.</p>
                <div className="p-8 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Profits under £50k</p>
                            <p className="text-2xl font-black text-slate-900">19%</p>
                            <p className="text-xs text-slate-500 font-medium">The Small Profits Rate</p>
                        </div>
                        <div className="bg-indigo-50/30 p-4 rounded-2xl border border-indigo-50">
                            <p className="text-[10px] font-black uppercase text-indigo-400 mb-2">Profits £50k - £250k</p>
                            <p className="text-2xl font-black text-indigo-600">26.5%</p>
                            <p className="text-xs text-indigo-500 font-medium">Marginal Relief Rate</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Profits over £250k</p>
                            <p className="text-2xl font-black text-slate-900">25%</p>
                            <p className="text-xs text-slate-500 font-medium">The Main Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="glossary" className="mt-24">
                <h2 className="text-3xl font-black mb-10 font-outfit text-slate-900">My Jargon Buster</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">Lower Earnings Limit (LEL)</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">If you earn at least £6,396, you get credit for your state pension without actually having to pay any National Insurance.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">Primary Threshold (PT)</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">This is the point (£12,570) where you personally start paying National Insurance on your salary.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">Secondary Threshold (ST)</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">This is the point (£5,000) where your company starts paying National Insurance on what it pays you.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">Upper Earnings Limit (UEL)</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">Once you earn over £50,270, your personal National Insurance rate drops from 8% down to just 2%.</p>
                    </div>
                </div>

                <div className="mt-24 p-12 bg-indigo-900 rounded-[3rem] text-center text-white">
                    <h3 className="text-3xl font-black mb-4 font-outfit">Ready to see how this affects you?</h3>
                    <p className="text-indigo-200 mb-10 max-w-xl mx-auto leading-relaxed text-lg">
                        I've programmed all these numbers into my calculator. Plug in your expected profit, and I'll show you exactly how much tax you'll pay and the best way to take your income.
                    </p>
                    <a href="/#calculator" className="inline-block px-10 py-5 bg-white text-indigo-900 rounded-2xl font-black shadow-xl hover:bg-indigo-50 transition-all text-lg font-outfit">
                        Get Your Tax Estimate
                    </a>
                </div>
            </section>
        </ContentLayout>
    );
}
