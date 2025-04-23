import { chainConfig } from '../../op-stack/chainConfig.js'
import { defineChain } from '../../utils/chain/defineChain.js'

const sourceId = 1 // mainnet

export const ink = /*#__PURE__*/ defineChain({
  ...chainConfig,
  id: 999,
  name: 'HyperEVM',
  nativeCurrency: { name: 'HYPER', symbol: 'HYPE', decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        'https://rpc.hyperliquid.xyz/evm',
        'https://rpc.hypurrscan.io',
        'https://hyperliquid-json-rpc.stakely.io',
        'https://hyperliquid.drpc.org'
      ],
      webSocket: [
        'wss://hyperliquid.drpc.org',
      ],
    },
  },
  blockExplorers: {
    default: {
      name: 'HyperScan',
      url: 'https://hyperscan.gas.zip/',
      apiUrl: 'https://hyperscan.gas.zip/api/v2',
    },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 0,
    },
    ...chainConfig.contracts,
    disputeGameFactory: {
      [sourceId]: {
        address: '0x10d7b35078d3baabb96dd45a9143b94be65b12cd',
      },
    },
    portal: {
      [sourceId]: {
        address: '0x5d66c1782664115999c47c9fa5cd031f495d3e4f',
      },
    },
    l1StandardBridge: {
      [sourceId]: {
        address: '0x88ff1e5b602916615391f55854588efcbb7663f0',
      },
    },
  },
  testnet: false,
  sourceId,
})
