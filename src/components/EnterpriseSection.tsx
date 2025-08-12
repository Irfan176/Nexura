export default function EnterpriseSection() {
  return (
    <section id="enterprise" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Hardware + Software</h3>
              <p className="text-slate-400 mb-6">Complete monitoring and analytics solution</p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-sm text-slate-500">Product images coming soon</p>
              </div>
            </div>

            {/* Floating Metrics */}
            <div className="absolute -top-4 -left-4 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <div className="text-2xl font-bold text-orange-400">99.9%</div>
              <div className="text-xs text-slate-400">Uptime</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-400">500+</div>
              <div className="text-xs text-slate-400">Data Points</div>
            </div>

            {/* Hardware Elements Visualization */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
              <div className="w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
            </div>
            <div className="absolute top-1/4 right-0 transform translate-x-1/2">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
              </svg>
              <span className="text-orange-400 font-medium">Enterprise Solutions</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Industrial-Grade{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                Energy Intelligence
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Deploy the complete Nexura ecosystem with hardware monitoring and EOS analytics 
              for enterprise facilities. Real-time data collection meets AI-powered optimization 
              for maximum efficiency and cost savings.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Hardware Sensor Network',
                'Real-time Data Streaming',
                'Advanced Power Quality Analysis',
                'Predictive Maintenance Alerts',
                'Equipment Health Monitoring',
                'Demand Response Automation'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200 font-medium flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4M3 21a18 18 0 0018 0M3 9a18 18 0 0018 0M3 15a18 18 0 0018 0" />
              </svg>
              <span>Schedule Consultation</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
