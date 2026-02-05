'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[200] border-t border-precision-mint/20 bg-[#0a0a0b]/95 backdrop-blur-xl p-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex gap-4">
                    <div className="w-1 h-auto bg-precision-mint" />
                    <div>
                        <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">
                            System_Notice // Cookie_Protocol_Active
                        </p>
                        <p className="text-[11px] font-mono text-white/60 uppercase leading-relaxed max-w-2xl">
                            We use technical and analytical data to optimize the Tax_Grid engine. By continuing, you acknowledge our <Link href="/privacy" className="text-precision-mint underline">Privacy Protocol</Link> and <Link href="/cookies" className="text-precision-mint underline">Cookie Registry</Link>.
                        </p>
                    </div>
                </div>

                <button
                    onClick={accept}
                    className="w-full md:w-auto px-12 py-3 bg-precision-mint text-black font-mono font-bold uppercase tracking-wider text-xs hover:bg-white transition-all shadow-[0_0_15px_rgba(0,255,157,0.2)]"
                >
                    Acknowledge_Sync
                </button>
            </div>
        </div>
    );
}
