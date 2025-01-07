import { createConfig } from "ponder";
import { http } from "viem";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config();

// import Pool addresses
import { EthereumAddresses } from "./CheesePools/Ethereum";
import { ArbitrumAddresses } from "./CheesePools/Arbitrum";
import { BaseAddresses } from "./CheesePools/Base";
import { BSCAddresses } from "./CheesePools/BSC";

// import ABIs
import { UniswapABI } from "./abis/UniswapABI";
import { CamelotABI } from "./abis/CamelotABI";
import { UniV3ABI } from "./abis/UniV3ABI";
import { PancakeSwapABI } from "./abis/PancakeSwapABI";

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
      pollingInterval: 300000,
    },
    arbitrum: {
      chainId: 42161,
      transport: http(process.env.PONDER_RPC_URL_42161),
      pollingInterval: 300000,
    },
    base: {
      chainId: 8453,
      transport: http(process.env.PONDER_RPC_URL_8453),
      pollingInterval: 300000,
    },
    bsc: {
      chainId: 56,
      transport: http(process.env.PONDER_RPC_URL_56),
      pollingInterval: 300000,
    },
  },
  contracts: {
    UniswapPair: {
      network: "mainnet",
      abi: UniswapABI,
      address: EthereumAddresses,
      startBlock: 21134200,
    },
    CamelotPair: {
      network: "arbitrum",
      abi: CamelotABI,
      address: ArbitrumAddresses,
      startBlock: 271905100,
    },
    UniswapV3Pair: {
      network: "base",
      abi: UniV3ABI,
      address: BaseAddresses,
      startBlock: 23790600,
    },
    PancakeSwapPair: {
      network: "bsc",
      abi: PancakeSwapABI,
      address: BSCAddresses,
      startBlock: 43985000,
    },
  },
});