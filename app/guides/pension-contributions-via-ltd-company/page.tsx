'use client';

import ContentLayout from '@/components/layout/ContentLayout';
import { KeyTakeaways, TableOfContents } from '@/components/ui/ArticleFeatures';

export default function PensionGuide() {
    const tocItems = [
        { id: 'why-pensions', text: 'Why I Recommend Pensions' },
        { id: 'corporation-tax', text: 'Saving Corporation Tax' },
        { id: 'allowance-shield', text: 'Avoiding the £100k Tax Trap' },
        { id: 'limits', text: 'Understanding the £60k Limit' },
        { id: 'carry-forward', text: 'Using Your Unused Allowance' },
        { id: 'tapering', text: 'A Warning for High Earners' },
        { id: 'ssas-vs-sipp', text: 'Choosing the Right Pension Type' },
        { id: 'trade-off', text: 'Dividends vs Pension: My Take' },
        { id: 'how-to-extract', text: 'How I Plan Your Pay' }
    ];

    return (
        <ContentLayout
            title="How to Use Your Pension to Save Business Tax"
            subtitle="I'll show you why putting money into a pension directly from your company is often the smartest move you can make."
            category="STRATEGY"
        >
            <TableOfContents items={tocItems} />

            <div className="mt-8 mb-12 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm aspect-video max-h-[400px] relative">
                <img
                    src="/images/guides/pension-security.png"
                    alt="Pension Security and Carry Forward"
                    className="object-cover w-full h-full"
                />
            </div>

            <section id="why-pensions">
                <p className="lead text-xl text-slate-900 font-medium mb-8">
                    If you're a director, the single best way to move money from your company into your personal name is often something you might not have considered: your pension.
                </p>

                <p>
                    I often see clients focusing entirely on salary and dividends. But once you've paid your Corporation Tax, and then you pay Income Tax and National Insurance on your salary, you're left with a much smaller slice of the pie. In my experience, employer pension contributions are the "secret weapon" for directors because they skip almost all these taxes.
                </p>
                <p>
                    With Corporation Tax rates climbing to 25%, a pension contribution isn't just about retirement anymore—it's a powerful tool I use to help you keep your hard-earned profits today.
                </p>

                <KeyTakeaways items={[
                    "Employer contributions are a business expense, so they save you up to 25% in Corporation Tax.",
                    "We avoid both Employee (8%) and Employer (15%) National Insurance entirely.",
                    "Pensions don't count towards the £100k limit, so they help you keep your Personal Allowance.",
                    "If you haven't contributed lately, I can help you reach back 3 years to contribute even more.",
                    "The money grows tax-free once it's inside your pension fund."
                ]} />
            </section>

            <section id="corporation-tax" className="mt-16">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">Saving Corporation Tax</h2>
                <p>
                    The biggest reason I suggest employer pension contributions is that they count as an <strong>allowable business expense</strong>. That's a fancy way of saying you pay them out of your profit before the taxman takes his cut.
                </p>
                <p>
                    Right now, many of my clients find themselves in the "Marginal Relief" zone. If your profits are between £50,000 and £250,000, you're effectively paying <strong>26.5% tax</strong> on your top slice of profit.
                </p>
                <div className="my-10 overflow-hidden rounded-2xl border border-slate-100 shadow-sm bg-white">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="p-4 text-xs font-black uppercase tracking-widest text-slate-500">The Difference</th>
                                <th className="p-4 text-xs font-black uppercase tracking-widest text-slate-500 text-red-500">Taking Dividends</th>
                                <th className="p-4 text-xs font-black uppercase tracking-widest text-slate-500 text-emerald-600">Using Your Pension</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-b border-slate-50">
                                <td className="p-4 font-bold">Corporation Tax</td>
                                <td className="p-4">You pay up to 25%</td>
                                <td className="p-4 text-emerald-600 font-bold">You save 100% (0% paid)</td>
                            </tr>
                            <tr className="border-b border-slate-50">
                                <td className="p-4 font-bold">Payroll Tax (NI)</td>
                                <td className="p-4">N/A</td>
                                <td className="p-4 text-emerald-600 font-bold">None (0% paid)</td>
                            </tr>
                            <tr className="border-b border-slate-50">
                                <td className="p-4 font-bold">Personal Tax</td>
                                <td className="p-4">Up to 39.35% now</td>
                                <td className="p-4 text-emerald-600 font-bold">Not until you retire</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    In simple terms: if you put £10,000 into your pension, it only "costs" your company £7,350 in real terms. I think that's a deal worth taking.
                </p>
            </section>

            <section id="allowance-shield" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">Avoiding the £100k Tax Trap</h2>
                <p>
                    If you earn more than £100,000, you've probably noticed that your tax bill suddenly skyrockets. That's because you lose £1 of your Personal Allowance for every £2 you earn over that limit. It effectively means you're paying 60% tax on that slice of income.
                </p>
                <p>
                    I love using employer pension contributions to fix this. They <strong>do not count</strong> towards that £100,000 limit.
                </p>
                <div className="mt-8 p-8 rounded-[2.5rem] bg-indigo-50 border border-indigo-100">
                    <p className="text-sm text-indigo-900 font-bold italic">
                        Let's look at an example:
                        <br /><br />
                        If you have £120,000 in profit and take it all as dividends, you'll lose your entire Personal Allowance. But if we put £20,000 of that into your pension, your "official" income drops back to £100,000. I've literally seen this save clients £4,000 in tax overnight.
                    </p>
                </div>
            </section>

            <section id="limits" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">Understanding the £60k Limit</h2>
                <p>
                    The general rule is that you can contribute up to <strong>£60,000</strong> a year into your pension. This includes what you put in personally and what your company pays for you. If we go over this, HMRC will start charging you extra tax, which we definitely want to avoid.
                </p>
            </section>

            <section id="carry-forward" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">Using Your Unused Allowance</h2>
                <p>
                    If you haven't touched your pension in a few years, you might be sitting on a massive tax-saving opportunity. I can often use the "Carry Forward" rules to reach back into the previous <strong>three years</strong>.
                </p>
                <p className="mt-6">There are just two things you need for this to work:</p>
                <ul className="mt-4 space-y-4">
                    <li className="flex gap-4">
                        <span className="font-black text-indigo-600">1.</span>
                        <span>You must have had a pension scheme open in those years (even if it was empty).</span>
                    </li>
                    <li className="flex gap-4">
                        <span className="font-black text-indigo-600">2.</span>
                        <span>We have to use up this year's £60,000 allowance first.</span>
                    </li>
                </ul>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    <div className="p-4 border border-slate-100 rounded-xl">
                        <p className="text-[10px] font-black uppercase text-slate-400">3 Years Ago</p>
                        <p className="text-xl font-black text-slate-900">£40,000</p>
                    </div>
                    <div className="p-4 border border-slate-100 rounded-xl">
                        <p className="text-[10px] font-black uppercase text-slate-400">2 Years Ago</p>
                        <p className="text-xl font-black text-slate-900">£60,000</p>
                    </div>
                    <div className="p-4 border border-slate-100 rounded-xl">
                        <p className="text-[10px] font-black uppercase text-slate-400">Last Year</p>
                        <p className="text-xl font-black text-slate-900">£60,000</p>
                    </div>
                    <div className="p-4 bg-indigo-600 rounded-xl text-white">
                        <p className="text-[10px] font-black uppercase text-indigo-200">This Year</p>
                        <p className="text-xl font-black">£60,000</p>
                    </div>
                </div>
                <p className="mt-8 text-sm text-slate-500 italic">
                    In some cases, I've helped clients put over <strong>£220,000</strong> into their pension in a single year to wipe out a massive Corporation Tax bill.
                </p>
            </section>

            <section id="tapering" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">A Warning for High Earners</h2>
                <p>
                    If you're earning more than £200,000, we need to be very careful. There's a rule called "Tapering" that starts to shrink your £60,000 allowance. If your total income plus pension contributions goes over £260,000, your allowance can drop to as little as <strong>£10,000</strong>. If this sounds like you, let's talk before you make any big payments.
                </p>
            </section>

            <section id="ssas-vs-sipp" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">Choosing the Right Pension Type</h2>
                <p>
                    I usually recommend one of two types of pensions for my director clients:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="p-8 rounded-[2.5rem] border border-slate-100 bg-white">
                        <h4 className="font-black text-slate-900 mb-4">The SIPP (Personal)</h4>
                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                            This is the easiest one to set up. It's great if you just want to pick some funds or shares and let them grow.
                        </p>
                        <span className="px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-black rounded-full uppercase">Simple & Effective</span>
                    </div>
                    <div className="p-8 rounded-[2.5rem] border border-indigo-100 bg-indigo-50/30">
                        <h4 className="font-black text-indigo-900 mb-4">The SSAS (Business)</h4>
                        <p className="text-sm text-indigo-700 leading-relaxed mb-6">
                            I recommend this for more established businesses. It has a real "power move": you can actually lend some of the pension money back to your company if you need to.
                        </p>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-[10px] font-black rounded-full uppercase">For Business Growth</span>
                    </div>
                </div>
            </section>

            <section id="trade-off" className="mt-20">
                <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">Dividends vs Pension: My Take</h2>
                <p>
                    The main downside to pensions is that you can't touch the money until you're 55 (rising to 57 in a few years). Dividends give you cash you can spend today.
                </p>
                <p className="mt-4">
                    But the growth difference is huge. If you take £10,000 as a higher-rate dividend, you might only get <strong>£4,900</strong> in your pocket. If you put it in a pension, the full <strong>£10,000</strong> starts growing right away. In my experience, that compounded growth is what builds real wealth.
                </p>
            </section>

            <section id="how-to-extract" className="mt-24">
                <h2 className="text-3xl font-black mb-8 font-outfit text-center">How I Plan Your Pay</h2>
                <div className="space-y-4 max-w-3xl mx-auto">
                    {[
                        { step: 1, title: 'Take Your Basic Salary', value: '£12,570', desc: "This keeps your state pension active and uses up your tax-free allowance." },
                        { step: 2, title: 'Max Out Your Pension', value: '£60,000', desc: "I move as much as we can here to save you from Corporation Tax." },
                        { step: 3, title: 'Take Basic Rate Dividends', value: '£50,270', desc: "This is for your lifestyle needs, using the low 8.75% tax rate." },
                        { step: 4, title: 'Look at Other Savings', value: 'ISA / VCT', desc: "If you still have cash left, we look at other tax-free ways to invest." }
                    ].map((item) => (
                        <div key={item.step} className="flex gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <span className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-xl shrink-0">{item.step}</span>
                            <div>
                                <h4 className="font-black text-slate-900 text-lg">{item.title}</h4>
                                <p className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-2">{item.value}</p>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-white rounded-[4rem] border border-slate-100 shadow-2xl shadow-indigo-100/30 text-center">
                    <h3 className="text-3xl font-black text-slate-900 mb-4 font-outfit">Ready to see your tax savings?</h3>
                    <p className="text-slate-500 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                        I've built a tool that lets you plug in your profit and see exactly how a pension contribution would drop your tax bill.
                    </p>
                    <a href="/#calculator" className="inline-block px-10 py-5 bg-indigo-600 font-outfit text-white rounded-2xl font-black shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all hover:-translate-y-1">
                        Try the Strategy Builder
                    </a>
                </div>
            </section>
        </ContentLayout>
    );
}
