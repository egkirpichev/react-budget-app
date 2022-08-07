import { createContext, FC, ReactNode, useContext, useState } from "react";

interface IBudgetContext {
  budget: number;
	editBudgetValue: (value: string) => void 
}

const BudgetContext = createContext({
  budget: 0,
	editBudgetValue: (value: string) => {}
});

const useBudgetValue = () => {
  const [BudgetContext, setBudgetContext] = useState<IBudgetContext>(() => {
    return {
      budget: 10,

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

console.log(BudgetContext);


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
