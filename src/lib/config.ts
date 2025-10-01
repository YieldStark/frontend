// Starknet Configuration
export const STARKNET_CONFIG = {
  RPC_URL: 'https://starknet-sepolia.public.blastapi.io/rpc/v0_7',
  CHAIN_ID: '0x534e5f5345504f4c4941', // Starknet Sepolia
  EXPLORER_URL: 'https://sepolia.starkscan.co',
}

// App Configuration
export const APP_CONFIG = {
  VAULT_ADDRESS: '0x017b5442309bf987c91d5c855598867017da9be848078164d6b15805f16bbe70',
  SUPPORTED_TOKENS: ['wbtc', 'eth', 'usdc'],
  PROTOCOLS: {
    VESU: {
      name: 'Vesu',
      color: '#97FCE4',
      apy: 3.4,
    },
    EKUBO: {
      name: 'Ekubo',
      color: '#8B5CF6',
      apy: 2.4,
    },
  },
}
