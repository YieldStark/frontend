'use client'

import { Check } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CurrentPositions = () => {
  // Sample data for the charts with more points for smoother curves
  const vesuData = [
    { value: 0.0020 },
    { value: 0.0021 },
    { value: 0.0019 },
    { value: 0.0022 },
    { value: 0.0021 },
    { value: 0.0023 },
    { value: 0.0022 },
    { value: 0.00234 },
  ]

  const ekuboData = [
    { value: 0.0010 },
    { value: 0.0011 },
    { value: 0.0009 },
    { value: 0.0012 },
    { value: 0.0011 },
    { value: 0.0013 },
    { value: 0.0012 },
    { value: 0.00134 },
  ]

  const positions = [
    {
      protocol: 'Vesu',
      return: '+0.00234',
      percentage: '+3.4%',
      data: vesuData,
      logoPath: '/supported_platforms/vesu_brand.png',
      chartColor: '#97FCE4',
      gradientId: 'gradientVesu',
    },
    {
      protocol: 'Ekubo',
      return: '+0.00134',
      percentage: '+2.4%',
      data: ekuboData,
      logoPath: '/supported_platforms/ekubo.png',
      chartColor: '#8B5CF6',
      gradientId: 'gradientEkubo',
    },
  ]

  return (
    <div className="bg-[#101D22] rounded-4xl p-4 lg:p-6">
      <h3 className="text-base lg:text-lg font-medium text-white mb-4 lg:mb-6">Current Positions</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {positions.map((position, index) => (
          <motion.div
            key={position.protocol}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }}
            className="bg-[#0F1A1F] rounded-xl p-4 lg:p-6 relative overflow-hidden"
          >
            <div className="space-y-4">
              {/* Top section: Current return and percentage */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs lg:text-sm text-gray-400 mb-1">Current return</p>
                  <span className="text-xl lg:text-2xl font-bold text-white">{position.return}</span>
                </div>
                <span className="text-base lg:text-lg font-semibold text-[#97FCE4]">{position.percentage}</span>
              </div>
              
              {/* Chart section */}
              <div className="h-12 lg:h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={position.data}>
                    <defs>
                      <linearGradient id={position.gradientId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={position.chartColor} stopOpacity={0.3}/>
                        <stop offset="95%" stopColor={position.chartColor} stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={position.chartColor}
                      fill={`url(#${position.gradientId})`}
                      strokeWidth={2}
                      dot={false}
                      activeDot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              {/* Bottom section: Logo and Qualified status */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src={position.logoPath}
                    alt={position.protocol}
                    width={position.protocol === 'Vesu' ? 50 : 35}
                    height={35}
                    className="object-contain"
                  />
                </div>
                
                <div className="flex items-center space-x-1">
                  <Check className="w-3 lg:w-4 h-3 lg:h-4 text-[#97FCE4]" />
                  <span className="text-xs lg:text-sm text-gray-400">Audited</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CurrentPositions
