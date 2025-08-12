export default function PlaceholderSection() {
  return (
    <section className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Hardware <span className="bg-gradient-to-r from-slate-400 to-slate-600 bg-clip-text text-transparent">Specifications</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Detailed technical specifications and product images will be added here
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: 'Technical Specs',
              description: 'Comprehensive hardware specifications',
              placeholder: 'Device specifications, power requirements, connectivity options, and installation requirements will be detailed here.'
            },
            {
              icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ),
              title: 'Product Gallery',
              description: 'High-resolution product images',
              placeholder: 'Professional product photography, installation examples, and real-world deployment images will showcase the hardware.'
            },
            {
              icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
              title: 'Case Studies',
              description: 'Real-world implementation examples',
              placeholder: 'Customer success stories, ROI analyses, and detailed case studies showing actual energy savings and efficiency improvements.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center group hover:border-slate-600/50 transition-all duration-300">
              <div className="w-20 h-20 bg-slate-700/50 rounded-2xl mx-auto mb-6 flex items-center justify-center text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-slate-400 mb-6">{item.description}</p>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
                <p className="text-sm text-slate-500 italic">
                  {item.placeholder}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 font-medium">Content Development in Progress</span>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <p className="text-slate-500 mt-4 text-sm">
            Detailed hardware documentation and visual assets will be added as the product development progresses
          </p>
        </div>
      </div>
    </section>
  )
}
