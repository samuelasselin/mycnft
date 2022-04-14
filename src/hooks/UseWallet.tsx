import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface walletProps {
  isInstalled: boolean;
  syncWallet: boolean;
  address?: string;
}

interface useWalletProps {
  wallet: walletProps;
  setWallet?: Dispatch<SetStateAction<walletProps>>;
}

export const WalletContext = createContext<useWalletProps>({
  wallet: { syncWallet: false, isInstalled: false },
});

export const useWallet = () => {
  return useContext(WalletContext);
};
