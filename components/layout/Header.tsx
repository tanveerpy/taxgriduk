'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-[100] shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-11 h-11 bg-indigo-600 rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-all shadow-lg shadow-indigo-100">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-2xl font-black tracking-tight text-slate-900 font-outfit">
                            Tax<span className="text-indigo-600">Grid</span>
                        </h1>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">
                            Executive Planning
                        </p>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    <Link href="/about" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-widest">
                        About
                    </Link>
                    <Link href="/guides" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-widest">
                        Guides
                    </Link>
                    <Link href="/contact" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-widest">
                        Contact
                    </Link>
                    <Link href="/#calculator" className="px-8 py-3 bg-indigo-600 text-white rounded-xl text-sm font-black uppercase tracking-widest hover:bg-slate-900 hover:translate-y-[-2px] transition-all shadow-lg shadow-indigo-100 active:scale-95">
                        Start Planning
                    </Link>
                </nav>
            </div>
        </header>
    );
}
