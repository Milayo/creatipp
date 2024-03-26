import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import LandingPage from "./pages/landingpage.jsx";
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'f302e71cfea7c8b2028717ab917b2ad7'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet]
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
 chains
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <WagmiProvider config={config}>
      <App />
      </WagmiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
