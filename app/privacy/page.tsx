'use client';

import ContentLayout from '@/components/layout/ContentLayout';

export default function PrivacyPolicy() {
    return (
        <ContentLayout
            title="Privacy & Data Integrity"
            subtitle="I take your financial privacy as seriously as I take your tax efficiency."
            category="LEGAL"
        >
            <section className="space-y-8">
                <div>
                    <h2 className="text-2xl font-black mb-4 font-outfit text-slate-900">Your Data Stays With You</h2>
                    <p>
                        When I built TaxGrid, I made a conscious decision: I don't want your data. All calculations you perform on this site happen entirely within your own browser. I do not store, collect, or transmit any of the sensitive financial information you enter into the calculator.
                    </p>
                    <p className="mt-4">
                        Your salary figures, dividend amounts, and pension contributions never touch my servers. They remain on your device, private and secure.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-black mb-4 font-outfit text-slate-900">How Shareable Links Work</h2>
                    <p>
                        To help you save your calculations, I've implemented a feature that encodes your inputs directly into the URL (using Base64 encoding). This allows you to bookmark your "Locked Strategy" or share it with your accountant.
                    </p>
                    <p className="mt-4 italic text-slate-500 font-medium">
                        Important: If you share this link with someone else, they will be able to see the data points you've entered. Only share links with people you trust.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-black mb-4 font-outfit text-slate-900">Cookies & Advertising</h2>
                    <p>
                        To keep this tool free and accurate, I use minimal analytics to understand how the engine is being used. I also partner with Google AdSense to show relevant advertisements. These partners may use cookies to serve ads based on your visit to this site and others on the internet.
                    </p>
                    <p className="mt-4">
                        You can always manage your preferences or opt-out of personalized advertising by visiting your Google Ads Settings.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-black mb-4 font-outfit text-slate-900">External HMRC Links</h2>
                    <p>
                        I often link to official government sources (GOV.UK) to provide you with direct access to the latest legislation. While I trust these sources, I am not responsible for their privacy practices once you leave TaxGrid.
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
