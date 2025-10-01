# YieldStark Frontend

A modern DeFi dashboard for yield optimization on Starknet, built with Next.js 15, React 19, and TypeScript.

## Features

- 🎨 **Modern Dark UI**: Clean, professional interface with custom PolySans fonts
- 🔗 **Starknet Integration**: Built-in wallet connection and RPC configuration
- 📊 **Real-time Dashboard**: Live balance tracking and position monitoring
- 🎯 **Yield Optimization**: Automated agent for maximizing DeFi yields
- 📱 **Responsive Design**: Optimized for all screen sizes
- ⚡ **Performance**: Built with Next.js 15 and React 19 for optimal performance

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI**: React 19, TypeScript, Tailwind CSS
- **State Management**: Zustand
- **Blockchain**: Starknet, get-starknet
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard pages
│   ├── swap/             # Swap interface
│   ├── docs/             # Documentation
│   └── support/          # Support page
├── components/           # Reusable components
│   ├── layout/          # Layout components
│   └── dashboard/       # Dashboard-specific components
├── providers/           # Context providers
├── stores/             # Zustand stores
└── lib/               # Utilities and configuration
```

## Configuration

### Starknet RPC
The app is configured to use Starknet Sepolia testnet:
- **RPC URL**: `https://starknet-sepolia.public.blastapi.io/rpc/v0_7`
- **Chain ID**: `0x534e5f5345504f4c4941`

### Styling
- **Page Background**: `#0F1A1F`
- **Container Background**: `#101D22`
- **Accent Color**: `#97FCE4`
- **Fonts**: PolySans (Neutral & Median)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features Implemented

✅ **Navigation System**
- Top navbar with logo, navigation links, chain selector, and wallet connection
- Dashboard sidebar with Overview, History, Staking, Opportunities, Settings
- Responsive design with proper active states

✅ **Dashboard Components**
- Vault address display with copy functionality
- Total BTC balance with deposit/withdraw buttons
- Agent performance metrics
- Current positions with interactive charts

✅ **State Management**
- Zustand store for wallet state
- Proper Next.js integration with SSR support

✅ **Routing**
- Dashboard, Swap, Docs, Support pages
- Proper layout management with/without sidebar

## Next Steps

- [ ] Implement actual wallet connection
- [ ] Add real-time balance updates
- [ ] Integrate with Starknet protocols
- [ ] Add transaction history
- [ ] Implement swap functionality
- [ ] Add settings page
- [ ] Deploy to production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.