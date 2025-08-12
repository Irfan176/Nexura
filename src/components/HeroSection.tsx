'use client'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            // Use deterministic values based on index to prevent hydration mismatch
            const leftPos = (i * 17.3) % 100;
            const topPos = (i * 23.7) % 100;
            const delay = (i * 0.15) % 3;
            const duration = 2 + (i * 0.1) % 2;
            
            return (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${leftPos}%`,
                  top: `${topPos}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`
                }}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate-300">Next-Generation Energy Intelligence</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          The Future of{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Energy Optimization
          </span>
          <br />
          Starts Here
        </h1>

        {/* Description */}
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Nexura revolutionizes energy management by combining cutting-edge hardware monitoring 
          with advanced EOS software analytics. From residential smart homes to enterprise-grade facilities, 
          we deliver unprecedented insights and control over your energy ecosystem.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium flex items-center space-x-2">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span>Watch Demo</span>
          </button>
          <button className="border border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 px-8 py-4 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>Explore EOS Platform</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
              95%
            </div>
            <div className="text-slate-400">Energy Efficiency</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-slate-400">Real-time Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
              50%
            </div>
            <div className="text-slate-400">Cost Reduction</div>
          </div>
        </div>
      </div>

      {/* Hologram Device Visualization */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-30 lg:opacity-60">
        <div className="relative w-96 h-96">
          {/* Core Device */}
          <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full animate-pulse"></div>
          
          {/* Rotating Rings */}
          {[1, 2, 3].map((ring, index) => (
            <div
              key={ring}
              className={`absolute inset-0 border border-cyan-400/30 rounded-full animate-spin`}
              style={{
                animationDuration: `${10 + index * 5}s`,
                transform: `scale(${0.3 + index * 0.3})`
              }}
            ></div>
          ))}
          
          {/* Data Streams */}
          {[0, 90, 180, 270].map((rotation, index) => (
            <div
              key={rotation}
              className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="w-1 h-32 bg-gradient-to-t from-transparent to-cyan-400 animate-pulse" style={{
                animationDelay: `${index * 0.5}s`
              }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
