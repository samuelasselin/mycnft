import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface walletProps {
  isInstalled: boolean;
  syncWallet: boolean;
  walletLoading?: boolean;
  address?: string;
  username: null;
}

interface useWalletProps {
  wallet: walletProps;
  setWallet?: Dispatch<SetStateAction<walletProps>>;
}

export const WalletContext = createContext<useWalletProps>({
  wallet: {
    syncWallet: false,
    isInstalled: false,
    walletLoading: false,
    username: null,
  },
});

export const useWallet = () => {
  return useContext(WalletContext);
};
