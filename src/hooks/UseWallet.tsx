import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface walletProps {
  isInstalled: boolean;
  isWallet: boolean;
  address?: string;
}

interface useWalletProps {
  wallet: walletProps;
  setWallet?: Dispatch<SetStateAction<walletProps>>;
}

export const WalletContext = createContext<useWalletProps>({
  wallet: { isWallet: false, isInstalled: false },
});

export const useWallet = () => {
  return useContext(WalletContext);
};
