export default function IntegrationSection() {
  return (
    <section id="integration" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Synergy</span>{' '}
            in Action
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            When Nexura hardware meets EOS software, the results are transformational
          </p>
        </div>

        {/* Integration Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ),
              title: 'Real-time Integration',
              description: 'Hardware sensors feed live data directly into EOS analytics for instant insights',
              color: 'from-purple-400 to-purple-600'
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: 'Enhanced Accuracy',
              description: 'Combine bill analysis with real sensor data for unprecedented precision',
              color: 'from-cyan-400 to-cyan-600'
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              ),
              title: 'Automated Optimization',
              description: 'AI algorithms optimize energy usage based on real-time hardware feedback',
              color: 'from-pink-400 to-pink-600'
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: 'Predictive Maintenance',
              description: 'Detect equipment issues before they become costly failures',
              color: 'from-emerald-400 to-emerald-600'
            }
          ].map((benefit, index) => (
            <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
              <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Data Flow Visualization */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Integration Data Flow
          </h3>
          
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Hardware Step */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Nexura Hardware</h4>
              <p className="text-slate-400 text-sm">Collects real-time energy data</p>
            </div>

            {/* Arrow */}
            <div className="hidden lg:block">
              <svg className="w-12 h-8 text-purple-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Integration Step */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Integration Layer</h4>
              <p className="text-slate-400 text-sm">Processes and streams data</p>
            </div>

            {/* Arrow */}
            <div className="hidden lg:block">
              <svg className="w-12 h-8 text-cyan-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20" style={{ animationDelay: '0.5s' }}>
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Software Step */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">EOS Analytics</h4>
              <p className="text-slate-400 text-sm">Delivers intelligent insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
