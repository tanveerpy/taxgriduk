import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-md">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-xl font-black font-outfit text-slate-900 tracking-tight">TaxGrid</span>
                        </Link>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">
                            Expert-led tax planning for UK directors. I help you navigate the complexity of HMRC thresholds so you can keep more of what you earn.
                        </p>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Tax Intelligence</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-600">
                            <li><Link href="/guides" className="hover:text-indigo-600 transition-colors">Expert Guides</Link></li>
                            <li><Link href="/tax-years/2025-26" className="hover:text-indigo-600 transition-colors">2025/26 Refence</Link></li>
                            <li><Link href="/tax-years/2026-27" className="hover:text-indigo-600 transition-colors">2026/27 Future View</Link></li>
                        </ul>
                    </div>

                    {/* Trust/Legal */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Trust & Privacy</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-600">
                            <li><Link href="/about" className="hover:text-indigo-600 transition-colors">About My Mission</Link></li>
                            <li><Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/cookies" className="hover:text-indigo-600 transition-colors">Cookie Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Use</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-600">
                            <li><Link href="/contact" className="hover:text-indigo-600 transition-colors">Get in Touch</Link></li>
                            <li><a href="https://www.gov.uk/income-tax-rates" target="_blank" className="hover:text-indigo-600 transition-colors">HMRC Official Rates</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        © {new Date().getFullYear()} TaxGrid Executive Planning
                    </p>
                    <div className="flex gap-8">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider italic">
                            Disclaimer: For illustrative purposes only. Always consult a professional.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
