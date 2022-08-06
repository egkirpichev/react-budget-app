import { createContext, FC, ReactNode, useContext, useState } from "react";

interface IBudgetContext {
  budget: number;
}

const BudgetContext = createContext({
  budget: 0,
});

const useBudgetValue = () => {
  const [BudgetContext, setBudgetContext] = useState<IBudgetContext>(() => {
    return {
      budget: 15,

      editBudgetValue: (value: string) => {
        setBudgetContext((previousContext) => ({
          ...previousContext,
          budget: Number(value),
        }));
      },
    };
  });

  return BudgetContext;
};

export const useBudgetContext = () => {
  return useContext<IBudgetContext>(BudgetContext);
};

export const BudgetContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <BudgetContext.Provider value={useBudgetValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
