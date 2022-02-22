import { Dispatch, SetStateAction } from "react";
import { walletProps } from "../context/UseWallet";

export const namiWalletSignIn = async (
  setWallet: Dispatch<SetStateAction<walletProps>>
) => {
  try {
    const signInWallet: boolean = await window.cardano.enable();

    if (signInWallet) {
      const address = await window.cardano.getUsedAddresses();
      setWallet({ isWallet: signInWallet, address: address[0] });
    }
  } catch (error) {
    setWallet({ isWallet: false });
  }
};
