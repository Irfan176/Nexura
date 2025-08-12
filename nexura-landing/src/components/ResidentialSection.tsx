export default function ResidentialSection() {
  return (
    <section id="residential" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-emerald-400 font-medium">Residential Solutions</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Smart Homes Made{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
                Smarter
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Transform your home into an intelligent energy ecosystem with EOS software platform. 
              Upload your bills, get instant insights, and optimize your energy consumption with 
              professional-grade analytics.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Bill Analysis & OCR Processing',
                '16 Professional Energy Tools',
                'Predictive Analytics & Forecasting',
                'Personalized Recommendations',
                'Cost Optimization Strategies',
                'Weather-Correlated Analysis'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="group bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-cyan-700 transition-all duration-200 font-medium flex items-center space-x-2">
              <span>Access EOS Platform</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Visual Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-600/10 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Residential Dashboard Preview</h3>
              <p className="text-slate-400 mb-6">Interactive energy management interface</p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-sm text-slate-500">Content coming soon</p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <div className="text-2xl font-bold text-emerald-400">$1,200</div>
              <div className="text-xs text-slate-400">Annual Savings</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <div className="text-2xl font-bold text-cyan-400">25%</div>
              <div className="text-xs text-slate-400">Efficiency Gain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
