import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface useWalletProps {
  isWallet: boolean;
  setWallet?: Dispatch<SetStateAction<boolean>>;
}

export const WalletContext = createContext<useWalletProps>({
  isWallet: false,
});

export const useWallet = () => {
  return useContext(WalletContext);
};
