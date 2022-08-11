import { FC, ReactNode } from "react";
import { BudgetContextProvider } from "./BudgetContext";
import { CurrencyContextProvider } from "./CurrencyContext";
import { ExpencesContextProvider } from "./ExpensesContext";

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const providers = [BudgetContextProvider, CurrencyContextProvider, ExpencesContextProvider];

  return (
    <>
      {providers.reduce((acc, Provider) => {
        return <Provider>{acc}</Provider>;
      }, children)}
    </>
  );
};