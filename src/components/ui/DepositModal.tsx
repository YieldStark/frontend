'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Shield, Zap, TrendingUp } from 'lucide-react'

interface DepositModalProps {
  isOpen: boolean
  onClose: () => void
  onDeposit: (amount: string) => void
}

const DepositModal = ({ isOpen, onClose, onDeposit }: DepositModalProps) => {
  const [amount, setAmount] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isDepositing, setIsDepositing] = useState(false)

  const handleDeposit = async () => {
    if (!amount || !agreedToTerms) return
    
    setIsDepositing(true)
    try {
      await onDeposit(amount)
      // Close modal after successful deposit
      onClose()
      setAmount('')
      setAgreedToTerms(false)
    } catch (error) {
      console.error('Deposit failed:', error)
    } finally {
      setIsDepositing(false)
    }
  }

  const isValidAmount = amount && parseFloat(amount) > 0
  const canDeposit = isValidAmount && agreedToTerms && !isDepositing

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#101D22] rounded-2xl p-8 w-full max-w-4xl mx-auto border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-white">Deposit to Vault</h2>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Amount Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Amount to Deposit
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <div className="w-6 h-6 bg-[#F7931A] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">₿</span>
                    </div>
                    <span className="text-gray-400 text-sm">$wBTC</span>
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    step="0.00000001"
                    min="0"
                    className="w-full pl-24 pr-4 py-4 bg-[#0F1A1F] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-[#97FCE4] focus:outline-none text-lg font-medium"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Minimum deposit: 0.001 $wBTC
                </p>
              </div>

              {/* How YieldStark Works */}
              <div className="mb-6 p-4 bg-[#0F1A1F] rounded-xl border border-gray-800">
                <h3 className="text-sm font-medium text-white mb-3 flex items-center">
                  <Zap className="w-4 h-4 text-[#97FCE4] mr-2" />
                  How YieldStark Works
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  YieldStark automatically spreads your $wBTC across the most profitable yield protocols on Starknet. 
                  Our AI agent continuously monitors and rebalances your funds to maximize returns while managing risk.
                </p>
                
                <div className="mt-3 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-3 h-3 text-[#97FCE4]" />
                    <span className="text-xs text-gray-300">Multi-protocol diversification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-3 h-3 text-[#97FCE4]" />
                    <span className="text-xs text-gray-300">Automated yield optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-[#97FCE4]" />
                    <span className="text-xs text-gray-300">Audited smart contracts</span>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="mb-6">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[#97FCE4] bg-[#0F1A1F] border-gray-700 rounded focus:ring-[#97FCE4] focus:ring-2"
                  />
                  <span className="text-sm text-gray-300 leading-relaxed">
                    I agree to the{' '}
                    <span className="text-[#97FCE4] hover:underline cursor-pointer">
                      Terms of Service
                    </span>{' '}
                    and{' '}
                    <span className="text-[#97FCE4] hover:underline cursor-pointer">
                      Privacy Policy
                    </span>
                    . I understand that my funds will be automatically deployed across yield protocols and that there are inherent risks involved.
                  </span>
                </label>
              </div>

              {/* Deposit Button */}
              <button
                onClick={handleDeposit}
                disabled={!canDeposit}
                className={`w-full py-4 rounded-xl font-medium transition-all duration-200 ${
                  canDeposit
                    ? 'bg-[#97FCE4] text-black hover:bg-[#85E6D1] shadow-lg shadow-[#97FCE4]/20'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isDepositing ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing Deposit...</span>
                  </div>
                ) : (
                  `Deposit ${amount || '0.00'} $wBTC`
                )}
              </button>

              {/* Security Notice */}
              <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Shield className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-blue-300">
                    Your funds are secured by multi-signature wallets and audited smart contracts. 
                    You maintain full control of your assets at all times.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default DepositModal
