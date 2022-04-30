import { Dispatch, SetStateAction } from "react";
import { walletProps } from "../hooks/UseWallet";
import { CardanoAddress } from "./CardanoAddress";
import { SetStateWithPrev } from "./SetStateWithPrev";

export const namiWalletSignIn = async (
  setWallet: Dispatch<SetStateAction<walletProps>>
) => {
  const deserialization = await CardanoAddress();
  try {
    if (window.cardano?.nami) {
      await SetStateWithPrev(setWallet, {
        isInstalled: true,
        walletLoading: true,
      });

      const walletConnected = await window.cardano.nami.enable();

      if (walletConnected) {
        const hex = await walletConnected.getUsedAddresses();

        const address = deserialization
          .from_bytes(Buffer.from(hex[0], "hex"))
          .to_bech32();

        await SetStateWithPrev(setWallet, {
          syncWallet: true,
          address,
          walletLoading: false,
        });
      }
    }
  } catch (error) {
    setWallet({
      syncWallet: false,
      isInstalled: true,
      walletLoading: false,
    });
  }
};
