'use client';

import ContentLayout from '@/components/layout/ContentLayout';

export default function TermsPage() {
    return (
        <ContentLayout
            title="Terms of Use"
            subtitle="Please read this professional agreement before utilizing the TaxGrid engine."
            category="LEGAL"
        >
            <section className="space-y-10">
                <div>
                    <h2 className="text-2xl font-black mb-4 font-outfit text-slate-900">1. Illustrative Purpose Only</h2>
                    <p>
                        TaxGrid is designed to provide high-precision illustrations of UK tax scenarios. While I make every effort to ensure the engine accurately reflects current HMRC legislation, the outputs are for informational purposes only. They do not constitute professional tax, legal, or financial advice.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-black mb-4 font-outfit text-slate-900">2. Professional Consultation</h2>
                    <p>
                        Taxation for limited company directors is complex and depends on your specific individual circumstances. I strongly recommend that you consult with a qualified accountant or tax professional before making significant financial decisions based on these calculations.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-black mb-4 font-outfit text-slate-900">3. Liability Disclaimer</h2>
                    <p>
                        Neither TaxGrid nor Sarah Mitchell shall be held liable for any financial losses, penalties, or damages arising from the use of this tool. The responsibility for accurate tax reporting and payment remains solely with the individual and their company.
                    </p>
                </div>

                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 italic font-medium text-slate-600">
                    "I am committed to accuracy, but the UK tax code is 20,000 pages long. This tool is a guide, not a final verdict."
                </div>

                <div>
                    <h2 className="text-2xl font-black mb-4 font-outfit text-slate-900">4. Intellectual Property</h2>
                    <p>
                        The unique design, "Warm Professional" UI, and calculation logic of TaxGrid are the intellectual property of this platform. Unauthorized reproduction or commercial use of the engine is prohibited.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-black mb-4 font-outfit text-slate-900">5. Continuous Updates</h2>
                    <p>
                        The UK fiscal landscape changes frequently. I aim to update TaxGrid within 24 hours of major Autumn Budget or Spring Statement announcements. Always check the "Coverage Status" in the header to ensure you are viewing the most current rules.
                    </p>
                </div>

                <div className="pt-8 border-t border-slate-100">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                        Last Updated: February 2026
                    </p>
                </div>
            </section>
        </ContentLayout>
    );
}
