'use client'

import { ExternalLink } from 'lucide-react'

export default function HistoryPage() {
  const transactions = [
    {
      date: '02-NOV-2025',
      description: 'Wallet 1 deposited 0.0123 $wbtc in the vault 0x017......be70 address',
      explorer: 'https://starkscan.co'
    },
    {
      date: '02-NOV-2025',
      description: 'Agent lends 0.0103 $wbtc on Vesu, earning 3.1% apy',
      explorer: 'https://starkscan.co'
    },
    {
      date: '02-NOV-2025',
      description: 'Agent lends 0.0052 $wbtc on Ekubo, earning 2.4% apy',
      explorer: 'https://starkscan.co'
    },
    {
      date: '02-NOV-2025',
      description: 'Wallet 1 withdrew 0.0089 $wbtc from the vault 0x017......be70 address',
      explorer: 'https://starkscan.co'
    },
    {
      date: '02-NOV-2025',
      description: 'Agent rebalanced position from Vesu to Ekubo for better yield',
      explorer: 'https://starkscan.co'
    }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">History</h1>
      
      <div className="bg-[#101D22] rounded-lg p-6">
        <div className="space-y-4">
          {transactions.map((tx, index) => (
            <div key={index} className="flex items-start justify-between py-4 border-b border-gray-800 last:border-b-0">
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-1">{tx.date}</p>
                <p className="text-white">
                  {tx.description.split('0x017......be70').map((part, i) => (
                    <span key={i}>
                      {part}
                      {i === 0 && (
                        <span className="text-[#97FCE4] cursor-pointer hover:underline">
                          0x017......be70
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
              <a
                href={tx.explorer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-[#97FCE4] hover:text-[#85E6D1] transition-colors ml-4"
              >
                <span className="text-sm">View in explorer</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}




