import { ChakraProvider } from '@chakra-ui/react'
import '../styles/style.css'
import '@rainbow-me/rainbowkit/styles.css'
import {
  // ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { AppProvider } from '../context/AppContext'

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    alchemyProvider({ alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
    publicProvider(),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function Home({ Component, pageProps }) {
    const getLayout = Component.getLayout || (page => page);
  return (
    <ChakraProvider>
      <AppProvider>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              overlayBlur: 'small',
              borderRadius: 'medium',
              accentColor: '#7b3fe4',
              accentColorForeground: 'white',
            })}
            modalSize="compact"
            coolMode
          >
            {getLayout(<Component {...pageProps} />)}
          </RainbowKitProvider>
        </WagmiConfig>
        </AppProvider>
    </ChakraProvider>
  )
}

export default Home
