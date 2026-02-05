'use client';

import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

interface KeyTakeawayProps {
    items: string[];
}

export function KeyTakeaways({ items }: KeyTakeawayProps) {
    return (
        <div className="my-10 p-8 bg-indigo-50/50 rounded-[2rem] border border-indigo-100 shadow-sm transition-all hover:shadow-md">
            <h4 className="flex items-center gap-2 text-indigo-900 font-outfit font-black uppercase tracking-widest text-xs mb-6 px-1">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Executive Summary // Key Strategic Points
            </h4>
            <ul className="space-y-4">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                        <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-indigo-600 transition-colors" />
                        <span className="text-slate-700 text-[15px] font-medium leading-relaxed">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

interface TOCItem {
    id: string;
    text: string;
}

interface TOCProps {
    items: TOCItem[];
}

export function TableOfContents({ items }: TOCProps) {
    if (!items || items.length === 0) return null;

    return (
        <nav className="mb-12 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="text-slate-900 font-outfit font-black uppercase tracking-widest text-[10px] mb-4 text-slate-400">
                Navigation Blueprint
            </h4>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors py-1 group"
                        >
                            <ChevronRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 transition-all" />
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
