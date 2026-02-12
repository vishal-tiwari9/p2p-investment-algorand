import { SupportedWallet, WalletId, WalletManager, WalletProvider } from '@txnlab/use-wallet-react'
import { SnackbarProvider } from 'notistack'
import Home from './Home'
import { getAlgodConfigFromViteEnvironment, getKmdConfigFromViteEnvironment } from './utils/network/getAlgoClientConfigs'

// Senior Tip: Always check if the environment variable exists

const wcProjectId = import.meta.env.VITE_WC_PROJECT_ID

// Logic: Saare wallets ko ek list mein rakho
const supportedWallets: SupportedWallet[] = [
  { id: WalletId.PERA },
  { id: WalletId.DEFLY },
  { id: WalletId.EXODUS },
]

// Agar WalletConnect ID hai toh use add karo
if (wcProjectId) {
  supportedWallets.push({
    id: WalletId.WALLETCONNECT,
    options: { projectId: wcProjectId },
  })
}

// LocalNet ke liye KMD add karo (Ye list ke top par rahega)
if (import.meta.env.VITE_ALGOD_NETWORK === 'localnet') {
  const kmdConfig = getKmdConfigFromViteEnvironment()
  supportedWallets.unshift({ // unshift se ye pehle number par aayega
    id: WalletId.KMD,
    options: {
      baseServer: kmdConfig.server,
      token: String(kmdConfig.token),
      port: String(kmdConfig.port),
    },
  })
}
export default function App() {
  const algodConfig = getAlgodConfigFromViteEnvironment()

  // We memoize or define the manager. Note: In high-performance apps, 
  // you might move this outside the component to prevent re-instantiation.
  const walletManager = new WalletManager({
    wallets: supportedWallets,
    defaultNetwork: algodConfig.network,
    networks: {
      [algodConfig.network]: {
        algod: {
          baseServer: algodConfig.server,
          port: algodConfig.port,
          token: String(algodConfig.token),
        },
      },
    },
    options: {
      resetNetwork: true,
    },
  })

  return (
    <SnackbarProvider maxSnack={3}>
      <WalletProvider manager={walletManager}>
        <Home />
      </WalletProvider>
    </SnackbarProvider>
  )
}