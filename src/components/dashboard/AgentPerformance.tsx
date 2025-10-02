'use client'

import { useWalletStore } from '@/providers/wallet-store-provider'

const AgentPerformance = () => {
  const { vesuBalance, ekuboBalance, agentROI } = useWalletStore(
    (state) => state,
  )

  return (
    <div className="bg-[#101D22] rounded-lg p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Total $wbtc in vesu:</span>
          <span className="text-sm text-white font-medium">{vesuBalance}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Total $wbtc in ekubo:</span>
          <span className="text-sm text-white font-medium">{ekuboBalance}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Agent's ROI:</span>
          <span className="text-sm text-[#97FCE4] font-medium">{agentROI}x</span>
        </div>
        
        <div className="flex items-center space-x-2 pt-2">
          <div className="w-2 h-2 bg-[#97FCE4] rounded-full"></div>
          <span className="text-sm text-[#97FCE4] font-medium">Yieldstark Agent</span>
        </div>
      </div>
    </div>
  )
}

export default AgentPerformance

