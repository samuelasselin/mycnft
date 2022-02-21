import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface useWalletProps {
  wallet: { isWallet: boolean; address?: string };
  setWallet?: Dispatch<SetStateAction<{ isWallet: boolean }>>;
}

export const WalletContext = createContext<useWalletProps>({
  wallet: { isWallet: false },
});

export const useWallet = () => {
  return useContext(WalletContext);
};
