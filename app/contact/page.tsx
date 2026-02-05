'use client';

import ContentLayout from '@/components/layout/ContentLayout';

export default function ContactPage() {
    return (
        <ContentLayout
            title="Get in Touch"
            subtitle="I'm always happy to hear from fellow directors, accountants, or tech partners."
            category="COMMUNICATION"
        >
            <section className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-black mb-6 font-outfit text-slate-900">How I Can Help</h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                Whether you've found a legislative edge case, have a bug to report, or are interested in featuring TaxGrid in your publication, please don't hesitate to reach out.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-start gap-6">
                            <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-100">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Direct Inquiries</h4>
                                <p className="text-lg font-bold text-slate-900">hello@taxgrid.co.uk</p>
                            </div>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-start gap-6">
                            <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white shrink-0 shadow-lg">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Feedback Loop</h4>
                                <p className="text-slate-600 font-medium">
                                    I read every email. If you have an idea for a new feature or calculation module, I'd love to hear it.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-indigo-100/20">
                        <h3 className="text-2xl font-black mb-8 font-outfit text-slate-900">Send a Quick Note</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Your Name</label>
                                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium" placeholder="E.g. James Smith" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Email Address</label>
                                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium" placeholder="james@company.com" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Message</label>
                                <textarea className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium min-h-[150px]" placeholder="How can I help you today?" />
                            </div>
                            <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-lg shadow-indigo-100">
                                Dispatch Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-100 text-center">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Response time: Typically within 48 hours
                    </p>
                </div>
            </section>
        </ContentLayout>
    );
}
