'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname()

  const navigationItems = [
    {
      name: 'Overview',
      href: '/dashboard',
      icon: '/icons/overview.svg',
    },
    {
      name: 'History',
      href: '/dashboard/history',
      icon: '/icons/history.svg',
    },
    {
      name: 'Staking',
      href: '/dashboard/staking',
      icon: '/icons/staking.png',
    },
    {
      name: 'Opportunities',
      href: '/dashboard/opportunities',
      icon: '/icons/opportunities.svg',
    },
    {
      name: 'Settings',
      href: '/dashboard/settings',
      icon: '/icons/settings.svg',
    },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed left-0 top-0 h-full w-64 bg-[#101D22] z-50 lg:relative lg:translate-x-0 lg:opacity-100 lg:w-50 lg:h-fit lg:rounded-4xl lg:p-6"
          >
            {/* Close Button for Mobile */}
            <div className="flex justify-end p-4 lg:hidden">
              <button
                onClick={onClose}
                className="p-2 text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="space-y-2 px-4 lg:px-0">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-[#97FCE4] text-black'
                        : 'text-white hover:bg-gray-800'
                    }`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={20}
                        height={20}
                        className={isActive ? 'brightness-0' : 'brightness-100'}
                      />
                    </div>
                    <span className="text-base font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar
