import { createContext, FC, ReactNode, useContext, useState } from "react";
import { Currency } from "../../config/currency";

interface ICurrencyContext {
  currency: Currency;
}

const CurrencyContext = createContext<ICurrencyContext>({
  currency: Currency.USD,
});

const useCurrencyValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(
    () => {
      return {
        currency: Currency.USD,
      };
    }
  );
  return currencyContext;
};

export const useCurrencyContext = () => {
	return useContext<ICurrencyContext>(CurrencyContext)
}

export const CurrencyContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <CurrencyContext.Provider value={useCurrencyValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
