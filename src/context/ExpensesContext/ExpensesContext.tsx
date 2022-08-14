import { createContext, FC, ReactNode, useContext, useState } from "react";
import { IExpencesContext, IExpense } from "../../types";

const ExpensesContext = createContext<IExpencesContext>({
  expenses: [],
  addNewExpense: (value: IExpense) => {},
  removeExpense: (id: string) => {},
});

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpencesContext>(
    () => {
      return {
        expenses: [],
        addNewExpense: (expense) => {
          setExpensesContext((previousContext) => ({
            ...previousContext,
            expenses: [...previousContext.expenses, { ...expense }],
          }));
        },

        removeExpense: (id) => {
          setExpensesContext((previousContext) => ({
            ...previousContext,
            expenses: [...previousContext.expenses].filter(
              (expense) => expense.id !== id
            ),
          }));
        },
      };
    }
  );

  return expensesContext;
};

export const useExpensesContext = () => {
  return useContext<IExpencesContext>(ExpensesContext);
};

export const ExpencesContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
