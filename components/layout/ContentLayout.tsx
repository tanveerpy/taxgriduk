'use client';

import Header from './Header';
import Footer from './Footer';

interface ContentLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
    category?: string;
}

export default function ContentLayout({ children, title, subtitle, category }: ContentLayoutProps) {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-500">
            <Header />

            <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
                {/* Refined Navigation Breadcrumb */}
                <div className="flex items-center gap-2 mb-10 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    <a href="/" className="hover:text-indigo-600 transition-colors">TaxGrid Hub</a>
                    <span className="text-slate-200">/</span>
                    {category && (
                        <>
                            <span>{category.replace('_', ' ')}</span>
                            <span className="text-slate-200">/</span>
                        </>
                    )}
                    <span className="text-indigo-600">Article View</span>
                </div>

                {/* Executive Page Header */}
                <div className="relative mb-16 border-l-4 border-indigo-600 pl-8">
                    <h1 className="text-4xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 font-outfit text-slate-900">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl font-medium text-slate-500 leading-relaxed max-w-3xl">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Professional Content Density */}
                <div className="prose prose-slate prose-lg max-w-none 
                    prose-headings:font-outfit prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                    prose-p:text-slate-800 prose-p:leading-relaxed prose-p:font-medium
                    prose-strong:text-indigo-600 prose-strong:font-bold
                    prose-a:text-indigo-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                    border-t border-slate-100 pt-8 font-plus-jakarta">
                    {children}
                </div>
            </div>

            <Footer />
        </main>
    );
}
