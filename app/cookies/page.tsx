'use client';

import ContentLayout from '@/components/layout/ContentLayout';

export default function CookiePolicy() {
    return (
        <ContentLayout
            title="Cookie Policy"
            subtitle="I use transparent technology to keep this tax engine running smoothly."
            category="LEGAL"
        >
            <section className="space-y-10">
                <div>
                    <h2 className="text-2xl font-black mb-4 font-outfit text-slate-900">1. What are Cookies?</h2>
                    <p>
                        Cookies are simple text files stored in your browser. I use them sparingly on TaxGrid to recognize your session and ensure that the interactive elements—like the comparison tool and real-time sliders—work exactly as you'd expect.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-black mb-4 font-outfit text-slate-900">2. Essential Technical Cookies</h2>
                    <p>
                        These are strictly necessary for the site to function. For example, when you "Lock" a calculation to compare it against a new scenario, I use local storage to keep that data visible for you. Without these, the core value of the tool wouldn't be possible.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-black mb-4 font-outfit text-slate-900">3. Analytics & Advertising</h2>
                    <p>
                        To keep this platform free for all UK directors, I use cookies from partners like Google AdSense. These cookies help me understand which guides are most popular and serve you with relevant, high-quality advertisements based on your interests.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-black mb-4 font-outfit text-slate-900">4. Your Control</h2>
                    <p>
                        You are always in the driver's seat. You can choose to block or delete cookies through your browser settings at any time. Just be aware that some of the "Locked Strategy" features might be affected.
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
