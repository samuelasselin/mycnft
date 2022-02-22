import { Dispatch, SetStateAction } from "react";
import { walletProps } from "../context/UseWallet";

export const namiWalletSignIn = async (
  setWallet: Dispatch<SetStateAction<walletProps>>
) => {
  try {
    const api = await window.cardano.nami.enable();
    if (api) {
      const address = await api.getUsedAddresses();
      setWallet({ isWallet: true, address: address[0] });
    }
  } catch (error) {
    setWallet({ isWallet: false });
  }
};
