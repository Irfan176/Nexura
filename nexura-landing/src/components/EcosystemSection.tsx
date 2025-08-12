export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Complete Energy <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Ecosystem</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Nexura integrates hardware and software to deliver comprehensive energy solutions
          </p>
        </div>

        {/* Ecosystem Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hardware Card */}
          <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <div className="absolute top-4 right-4">
              <span className="bg-orange-500/20 text-orange-400 text-xs font-medium px-3 py-1 rounded-full border border-orange-500/30">
                Enterprise Only
              </span>
            </div>
            
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-white">Nexura Hardware</h3>
            <p className="text-slate-300 mb-6">
              Advanced IoT sensors and monitoring devices for real-time data collection across your facility
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-slate-300">Real-time Power Monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-slate-300">Environmental Sensors</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-slate-300">Equipment Health Monitoring</span>
              </div>
            </div>
          </div>

          {/* Software Card - Featured */}
          <div className="group relative bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/50 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
            <div className="absolute top-4 right-4">
              <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full border border-cyan-500/30">
                Universal
              </span>
            </div>
            
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-white">EOS Software Platform</h3>
            <p className="text-slate-300 mb-6">
              AI-powered analytics and optimization engine for intelligent energy management and cost reduction
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm text-slate-300">16 Professional Energy Tools</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm text-slate-300">Predictive Analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm text-slate-300">Bill Analysis & OCR</span>
              </div>
            </div>
          </div>

          {/* Integration Card */}
          <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
            <div className="absolute top-4 right-4">
              <span className="bg-purple-500/20 text-purple-400 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/30">
                Enterprise Only
              </span>
            </div>
            
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-white">Integration Layer</h3>
            <p className="text-slate-300 mb-6">
              Seamless communication between hardware sensors and software analytics for unified insights
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-slate-300">Real-time Data Streaming</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-slate-300">API Connectivity</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-slate-300">Cloud Synchronization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Connection Visualization */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="w-8 h-px bg-gradient-to-r from-orange-400 to-cyan-400"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-8 h-px bg-gradient-to-r from-cyan-400 to-purple-400"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <p className="text-slate-400 mt-4">Hardware + Software + Integration = Complete Solution</p>
        </div>
      </div>
    </section>
  )
}
