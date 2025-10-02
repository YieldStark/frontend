'use client'

import { useState } from 'react'
import AgentPerformance from '@/components/dashboard/AgentPerformance'
import CurrentPositions from '@/components/dashboard/CurrentPositions'
import DepositModal from '@/components/ui/DepositModal'
import { useWalletStore } from '@/providers/wallet-store-provider'

export default function DashboardPage() {
  const vaultAddress = useWalletStore((state) => state.vaultAddress)
  const isConnected = useWalletStore((state) => state.isConnected)
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false)
  
  // Debug logging
  console.log('Dashboard - vaultAddress:', vaultAddress)
  console.log('Dashboard - isConnected:', isConnected)

  // Format address for display (show first 6 and last 4 characters)
  const formatAddress = (address: string) => {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  // Copy address to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(vaultAddress)
      // You could add a toast notification here
      console.log('Address copied to clipboard')
    } catch (err) {
      console.error('Failed to copy address:', err)
    }
  }

  // Handle deposit
  const handleDeposit = async (amount: string) => {
    try {
      console.log('Depositing amount:', amount)
      // TODO: Implement actual deposit logic here
      // This would typically involve:
      // 1. Validating the amount
      // 2. Calling the smart contract to deposit
      // 3. Updating the UI state
      // 4. Showing success/error messages
      
      // For now, just log the deposit
      console.log(`Depositing ${amount} $wBTC to vault`)
      
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // You could add a success toast here
      console.log('Deposit successful!')
    } catch (error) {
      console.error('Deposit failed:', error)
      throw error // Re-throw to let the modal handle the error state
    }
  }

  return (
    <div className="space-y-6">
      {/* Main Dashboard Block - Everything in ONE modal */}
      <div className="bg-[#101D22] rounded-4xl p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Vault Info and Balance */}
          <div className="lg:col-span-2 space-y-6">
            {/* Vault Address */}
            <div>
              <h3 className="text-lg font-medium text-white mb-6">Your Vault Address:</h3>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-300 font-mono">
                  {isConnected && vaultAddress ? formatAddress(vaultAddress) : 'Not connected'}
                </span>
                {isConnected && vaultAddress && (
                  <>
                    <button 
                      onClick={copyToClipboard}
                      className="p-1 hover:bg-gray-700 rounded transition-colors"
                      title="Copy address"
                    >
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => window.open(`https://starkscan.co/contract/${vaultAddress}`, '_blank')}
                      className="p-1 hover:bg-gray-700 rounded transition-colors"
                      title="View on Starkscan"
                    >
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Total BTC Balance */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Total BTC Balance:</h3>
              <div className="flex items-baseline space-x-2 mb-8">
                <span className="text-6xl font-medium text-white">0.20560</span>
                <span className="text-lg text-gray-300">$wbtc</span>
              </div>
              
              <div className="flex space-x-4 mb-4">
                <button 
                  onClick={() => setIsDepositModalOpen(true)}
                  className="px-8 py-4 bg-[#97FCE4] text-black font-medium rounded-full hover:bg-[#85E6D1] transition-colors"
                >
                  Deposit
                </button>
                <button className="px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors">
                  Withdraw
                </button>
              </div>

              <div className="flex items-start space-x-2 text-sm text-gray-300">
                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
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

      {/* Deposit Modal */}
      <DepositModal
        isOpen={isDepositModalOpen}
        onClose={() => setIsDepositModalOpen(false)}
        onDeposit={handleDeposit}
      />
    </div>
  )
}