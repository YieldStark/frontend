import { createStore } from 'zustand/vanilla'

// Define proper types for wallet account
interface WalletAccount {
  address: string
  account?: {
    address: string
  }
}

export type WalletState = {
  wallet: WalletAccount | null
  isConnected: boolean
  vaultAddress: string
  totalBalance: number
  vesuBalance: number
  ekuboBalance: number
  agentROI: number
}

export type WalletActions = {
  connectWallet: (walletAccount?: WalletAccount) => Promise<void>
  disconnectWallet: () => void
  updateBalances: () => Promise<void>
  setVaultAddress: (address: string) => void
}

export type WalletStore = WalletState & WalletActions

export const defaultInitState: WalletState = {
  wallet: null,
  isConnected: false,
  vaultAddress: '0x017b5442309bf987c91d5c855598867017da9be848078164d6b15805f16bbe70',
  totalBalance: 0.20560,
  vesuBalance: 0.15,
  ekuboBalance: 0.05,
  agentROI: 1.3,
}

export const createWalletStore = (
  initState: WalletState = defaultInitState,
) => {
  return createStore<WalletStore>()((set, get) => ({
    ...initState,
    connectWallet: async (walletAccount?: WalletAccount) => {
      try {
        // Extract address from different possible wallet object structures
        let address = get().vaultAddress // fallback to current address
        
        if (walletAccount) {
          console.log('Wallet account object:', walletAccount)
          console.log('Wallet account keys:', Object.keys(walletAccount))
          
          // Try different possible address locations
          address = walletAccount?.account?.address || 
                   walletAccount?.address || 
                   walletAccount?.account?.address || 
                   walletAccount?.address
          
          console.log('Extracted address:', address)
        }
        
        console.log('Connecting wallet with address:', address)
        
        set({ 
          isConnected: true,
          wallet: walletAccount || get().wallet,
          vaultAddress: address
        })
      } catch (error) {
        console.error('Failed to connect wallet:', error)
      }
    },
    disconnectWallet: () => {
      set({ 
        wallet: null, 
        isConnected: false,
        totalBalance: 0,
        vesuBalance: 0,
        ekuboBalance: 0,
      })
    },
    updateBalances: async () => {
      try {
        // TODO: Implement actual balance fetching
        console.log('Updating balances...')
      } catch (error) {
        console.error('Failed to update balances:', error)
      }
    },
    setVaultAddress: (address: string) => {
      set({ vaultAddress: address })
    },
  }))
}
