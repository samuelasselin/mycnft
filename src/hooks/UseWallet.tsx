import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";

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

type Props = {
  children: React.ReactNode;
};

export const WalletContext = createContext<useWalletProps | null>(null);

export const useWallet = (): useWalletProps => {
  const context = useContext(WalletContext);
  if (context === null) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};

export const WalletProvider: FC<Props> = ({ children }): JSX.Element => {
  const [wallet, setWallet] = useState<walletProps>({
    username: null,
    walletLoading: false,
    syncWallet: false,
    isInstalled: false,
  });

  const value = { wallet, setWallet };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};
