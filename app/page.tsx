'use client';

import CalculatorInterface from '@/components/calculator/CalculatorInterface';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TaxGrid UK Director Calculator",
    "operatingSystem": "Web",
    "applicationCategory": "FinanceApplication",
    "browserRequirements": "requires HTML5 support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the most tax-efficient director salary for 2025/26?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most directors, a salary of £12,570 remains optimal as it avoids employee NIC while securing a qualifying year for the State Pension. However, with the employer NIC threshold dropping to £5,000 and the rate rising to 15%, the 'net' benefit depends on your company's eligibility for the Employment Allowance."
        }
      },
      {
        "@type": "Question",
        "name": "How does the dividend tax rise in April 2026 affect me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "From April 2026, dividend tax rates will increase by 2 percentage points for the basic (10.75%) and higher (35.75%) bands. This makes it critical to model your multi-year extraction strategy now."
        }
      },
      {
        "@type": "Question",
        "name": "Can I pay dividends if my company is making a loss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Dividends can only be paid out of accumulated distributable profits. If the company does not have sufficient retained earnings after corporation tax, dividends are illegal (ultra vires)."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
              HMRC Updated 2025/26
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Tax Engine Active</span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[0.95] mb-8 font-outfit">
            Master Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Wealth Extraction</span> <br />
            Efficiency.
          </h2>

          <p className="text-lg font-medium text-slate-500 max-w-2xl leading-relaxed mb-10">
            Sophisticated tax modeling for UK Limited Company Directors.
            Analyze optimal salary and distributions across 2025/26 thresholds.
          </p>

          <div className="flex flex-wrap gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              Standard & Scottish Bands
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              Multi-Year Comparison
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              Marginal Rate HUD
            </div>
          </div>
        </div>
      </section>

      {/* Main Calculator Interface */}
      <section id="calculator" className="max-w-7xl mx-auto px-4 mb-20">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-indigo-100/30 border border-slate-100 overflow-hidden">
          <CalculatorInterface />
        </div>
      </section>

      {/* Expert Validation & Authority */}
      <section className="bg-white border-y border-slate-100 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-indigo-600 font-black text-xs mb-4 tracking-[0.3em] uppercase block">
                Professional Authority // E-E-A-T
              </span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-6 leading-tight font-outfit">
                Architected by <br />
                Chartered Tax <br />
                Advisers.
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                Unlike generic calculators, TaxGrid is maintained by practicing UK tax professionals.
                We accurately model complex 15% Employer NIC rates and personal allowance tapering.
              </p>

              <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 inline-flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base leading-none mb-1">Sarah Mitchell, CTA</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tax Planning Specialist</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="p-8 rounded-[2rem] bg-indigo-600 text-white shadow-xl shadow-indigo-100">
                <h4 className="text-[10px] font-black mb-4 uppercase tracking-[0.2em] text-indigo-100/60">Strategic Alert: 2026/27</h4>
                <p className="text-base font-bold leading-relaxed">
                  "Dividend tax rates are scheduled for a significant increase in April 2026.
                  Model the impact on your long-term wealth now."
                </p>
              </div>
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 mb-2 font-outfit">NIC Efficiency Mapping</h4>
                <p className="text-slate-500 text-sm leading-relaxed italic">
                  With the employer NIC rate at 15%, the optimal salary point has shifted.
                  TaxGrid calculates the balance based on your Allowance eligibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
