'use client';

export default function TrustSignals() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-indigo-100 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Expert Verified</span>
                </div>
                <p className="text-xs font-medium text-slate-400 leading-relaxed uppercase tracking-tight">
                    Calculations reflect 2025/26 and 2026/27 Finance Act thresholds. Reviewed by Sarah Mitchell, CTA.
                </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-indigo-100 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Bank-Grade Privacy</span>
                </div>
                <p className="text-xs font-medium text-slate-400 leading-relaxed uppercase tracking-tight">
                    Zero financial data is stored. Processing happens exclusively in your browser session.
                </p>
            </div>
        </div>
    );
}
