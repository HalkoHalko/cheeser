import { onchainTable } from "ponder";

export const PancakeSwapSwapEvent = onchainTable("pancakeswap_swap_event", (t) => ({
  id: t.text().primaryKey(),
  sender: t.hex().notNull(),
  amount0In: t.bigint().notNull(),
  amount1In: t.bigint().notNull(),
  amount0Out: t.bigint().notNull(),
  amount1Out: t.bigint().notNull(),
  to: t.hex().notNull(),
}));

export const CamelotSwapEvent = onchainTable("camelot_swap_event", (t) => ({
  id: t.text().primaryKey(),
  sender: t.hex().notNull(),
  amount0In: t.bigint().notNull(),
  amount1In: t.bigint().notNull(),
  amount0Out: t.bigint().notNull(),
  amount1Out: t.bigint().notNull(),
  to: t.hex().notNull(),
}));

export const UniV3SwapEvent = onchainTable("univ3_swap_event", (t) => ({
  id: t.text().primaryKey(),
  sender: t.hex().notNull(),
  recipient: t.hex().notNull(),
  amount0: t.bigint().notNull(),
  amount1: t.bigint().notNull(),
  sqrtPriceX96: t.bigint().notNull(),
  liquidity: t.bigint().notNull(),
  tick: t.integer().notNull(),
}));

export const UniswapSwapEvent = onchainTable("uniswap_swap_event", (t) => ({
  id: t.text().primaryKey(),
  sender: t.hex().notNull(),
  amount0In: t.bigint().notNull(),
  amount1In: t.bigint().notNull(),
  amount0Out: t.bigint().notNull(),
  amount1Out: t.bigint().notNull(),
  to: t.hex().notNull(),
}));