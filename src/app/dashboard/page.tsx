'use client'

import AgentPerformance from '@/components/dashboard/AgentPerformance'
import CurrentPositions from '@/components/dashboard/CurrentPositions'

export default function DashboardPage() {
  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Main Dashboard Block - Everything in ONE modal */}
      <div className="bg-[#101D22] rounded-4xl p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Vault Info and Balance */}
          <div className="lg:col-span-2 space-y-4 lg:space-y-6">
            {/* Vault Address */}
            <div>
              <h3 className="text-base lg:text-lg font-medium text-white mb-4 lg:mb-6">Your Vault Address:</h3>
              <div className="flex items-center space-x-3">
                <span className="text-xs lg:text-sm text-white font-mono">
                  0x017b5442309b1987c91d5c855598867017da9be848078164d6b15805f16bbe70
                </span>
                <button className="p-1 hover:bg-gray-700 rounded transition-colors">
                  <svg className="w-3 lg:w-4 h-3 lg:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-700 rounded transition-colors">
                  <svg className="w-3 lg:w-4 h-3 lg:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Total BTC Balance */}
            <div>
              <h3 className="text-base lg:text-lg font-medium text-white mb-4">Total BTC Balance:</h3>
              <div className="flex items-baseline space-x-2 mb-6 lg:mb-8">
                <span className="text-4xl lg:text-6xl font-medium text-white">0.20560</span>
                <span className="text-base lg:text-lg text-gray-300">$wbtc</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
                <button className="px-6 lg:px-8 py-3 lg:py-4 bg-[#97FCE4] text-black font-medium rounded-full hover:bg-[#85E6D1] transition-colors text-sm lg:text-base">
                  Deposit
                </button>
                <button className="px-6 lg:px-8 py-3 lg:py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors text-sm lg:text-base">
                  Withdraw
                </button>
              </div>

              <div className="flex items-start space-x-2 text-xs lg:text-sm text-gray-300">
                <div className="w-3 lg:w-4 h-3 lg:h-4 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                  <span className="text-xs text-white">i</span>
                </div>
                <p>
                  The current $wbtc asset shown has been{' '}
                  <span className="text-[#97FCE4] font-medium">yieldstarked</span>{' '}
                  into protocols with the highest yield.{' '}
                  <span className="text-[#97FCE4] font-medium cursor-pointer">Read More</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Agent Performance */}
          <div className="lg:col-span-1">
            <AgentPerformance />
          </div>
        </div>
      </div>
      
      {/* Current Positions - Separate Full Width Block */}
      <CurrentPositions />
    </div>
  )
}