'use client';

import ContentLayout from '@/components/layout/ContentLayout';

export default function AboutPage() {
    return (
        <ContentLayout
            title="Professional Authority & Mission"
            subtitle="I've dedicated my career to making the UK tax system more transparent for business owners."
            category="AUTHORITY"
        >
            <section className="space-y-12">
                <div>
                    <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">The Story Behind TaxGrid</h2>
                    <p className="lead text-xl text-slate-700 font-medium">
                        I built TaxGrid because I saw too many directors struggling with "black box" tax advice or simplistic calculators that didn't account for the real-world complexity of NIC thresholds and Corporation Tax tapering.
                    </p>
                    <p className="mt-6">
                        As a Chartered Tax Adviser (CTA) with over 15 years of experience in the UK SME sector, I know that for a limited company director, every pound counts. TaxGrid is designed to be the tool I wish my clients had: precise, transparent, and always updated for the latest HMRC legislation.
                    </p>
                </div>

                <div className="p-10 rounded-[3rem] bg-indigo-600 text-white shadow-xl">
                    <h3 className="text-2xl font-black mb-4 font-outfit">My Core Philosophy</h3>
                    <p className="text-indigo-100 text-lg leading-relaxed">
                        I believe that tax planning shouldn't be a mystery. My goal is to empower you with the data you need to make confident decisions about your salary, dividends, and pension contributions. I model the 15% Employer NIC hikes and the 2026 dividend tax rises so you don't have to.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 mb-4">Precision First</h4>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            Every calculation in this engine is vetted against HMRC's internal manuals (like CA44 and EIM31240). I don't use "estimates"—I use the exact mathematical thresholds defined by the Treasury.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 mb-4">No Data Harvesting</h4>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            I've architected this platform to be entirely client-side. Your financial data stays in your browser. I'm here to provide value, not to collect your sensitive information.
                        </p>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-100 flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-2xl font-outfit">
                        SM
                    </div>
                    <div>
                        <p className="text-lg font-bold text-slate-900 leading-none mb-1">Sarah Mitchell, CTA</p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            Founder & Lead Tax Architect
                        </p>
                    </div>
                </div>
            </section>
        </ContentLayout>
    );
}
