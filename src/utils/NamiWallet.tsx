import { Dispatch, SetStateAction } from "react";
import { walletProps } from "../hooks/UseWallet";
import { useCardano } from "../hooks/UseCardano";

export const namiWalletSignIn = async (
  setWallet: Dispatch<SetStateAction<walletProps>>
) => {
  const deserialization = await useCardano();
  try {
    if (window.cardano?.nami) {
      const api = await window.cardano.nami.enable();
      if (api) {
        const hex = await api.getUsedAddresses();

        const address = deserialization
          .from_bytes(Buffer.from(hex[0], "hex"))
          .to_bech32();

        setWallet({ isWallet: true, address, isInstalled: true });
      }
    } else {
      setWallet({ isWallet: false, isInstalled: false });
    }
  } catch (error) {
    setWallet({ isWallet: false, isInstalled: false });
  }
};
