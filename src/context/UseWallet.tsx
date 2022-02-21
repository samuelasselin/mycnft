import { createContext, useContext } from "react";

interface useWalletProps {
  isWallet: boolean;
  setWallet?: (isWallet: boolean) => void;
}

export const WalletContext = createContext<useWalletProps>({ isWallet: false });

export const useWallet = () => {
  return useContext(WalletContext);
};
