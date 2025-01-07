import { ponder } from "ponder:registry";
import { UniswapSwapEvent, CamelotSwapEvent, PancakeSwapSwapEvent, UniV3SwapEvent } from "ponder:schema";

ponder.on("UniswapPair:Swap", async ({ event, context }) => {
      await context.db
        .insert(UniswapSwapEvent)
        .values({
          id: event.log.id,
          sender: event.args.sender,
          amount0In: BigInt(event.args.amount0In),
          amount1In: BigInt(event.args.amount1In),
          amount0Out: BigInt(event.args.amount0Out),
          amount1Out: BigInt(event.args.amount1Out),
          to: event.args.to,
          blockNumber: event.block.number,
          transactionHash: event.transaction.hash,
        });
    }
);

ponder.on("CamelotPair:Swap", async ({ event, context }) => {
        await context.db
          .insert(CamelotSwapEvent)
          .values({
            id: event.log.id,
            sender: event.args.sender,
            amount0In: BigInt(event.args.amount0In),
            amount1In: BigInt(event.args.amount1In),
            amount0Out: BigInt(event.args.amount0Out),
            amount1Out: BigInt(event.args.amount1Out),
            to: event.args.to,
            blockNumber: event.block.number,
            transactionHash: event.transaction.hash,
          });
      }
  );
  
  ponder.on("UniswapV3Pair:Swap", async ({ event, context }) => {
      await context.db
        .insert(UniV3SwapEvent)
        .values({
          id: event.log.id,
          sender: event.args.sender,
          recipient: event.args.recipient,
          amount0: BigInt(event.args.amount0),
          amount1: BigInt(event.args.amount1),
          sqrtPriceX96: BigInt(event.args.sqrtPriceX96),
          liquidity: BigInt(event.args.liquidity),
          tick: event.args.tick,
        });
    }
);

ponder.on("PancakeSwapPair:Swap", async ({ event, context }) => {
        await context.db
          .insert(PancakeSwapSwapEvent)
          .values({
            id: event.log.id,
            sender: event.args.sender,
            amount0In: BigInt(event.args.amount0In),
            amount1In: BigInt(event.args.amount1In),
            amount0Out: BigInt(event.args.amount0Out),
            amount1Out: BigInt(event.args.amount1Out),
            to: event.args.to,
            blockNumber: event.block.number,
            transactionHash: event.transaction.hash,
          });
      }
  );