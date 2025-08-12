'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              NEXURA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="#ecosystem" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">
              Ecosystem
            </Link>
            <Link href="#residential" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">
              Residential
            </Link>
            <Link href="#enterprise" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">
              Enterprise
            </Link>
            <Link href="#integration" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">
              Integration
            </Link>
            <Link href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">
              Contact
            </Link>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium">
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-4">
            <Link href="#ecosystem" className="block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
              Ecosystem
            </Link>
            <Link href="#residential" className="block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
              Residential
            </Link>
            <Link href="#enterprise" className="block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
              Enterprise
            </Link>
            <Link href="#integration" className="block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
              Integration
            </Link>
            <Link href="#contact" className="block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
              Contact
            </Link>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium mt-4">
              Request Demo
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
