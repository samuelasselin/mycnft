import { Dispatch, SetStateAction } from "react";
import { walletProps } from "../hooks/UseWallet";
import { CardanoAddress } from "./CardanoAddress";
import { SetStateWithPrev } from "./SetStateWithPrev";

export const namiWalletSignIn = async (
  setWallet: Dispatch<SetStateAction<walletProps>>
) => {
  const deserialization = await CardanoAddress();

  if (window.cardano?.nami) {
    await SetStateWithPrev(setWallet, {
      isInstalled: true,
      walletLoading: true,
    });

    const api = await window.cardano.nami.enable();

    if (api) {
      const hex = await api.getUsedAddresses();

      const address = deserialization
        .from_bytes(Buffer.from(hex[0], "hex"))
        .to_bech32();

      await SetStateWithPrev(setWallet, {
        syncWallet: true,
        address,
        walletLoading: false,
      });
    } else {
      setWallet({ syncWallet: false, isInstalled: false });
    }
  }
};
