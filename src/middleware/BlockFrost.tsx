import { BlockFrostAPI } from "@blockfrost/blockfrost-js";

export const BlockFrost = new BlockFrostAPI({
  projectId: process.env.NEXT_PUBLIC_BLOCKFROST_KEY,
});
