import { createContext, FC, ReactNode, useContext, useState } from "react";
import { IExpense } from "../../types";

interface IExpencesContext {
  expenses: IExpense[] | [];
	addNewExpense: (value: IExpense) => void;
	removeExpense: (id: string) => void;
}

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
						expenses: [...previousContext.expenses, {...expense}]
					}))
				},

				removeExpense: (id) => {
					setExpensesContext((previousContext) => ({
						...previousContext,
						expenses: [...previousContext.expenses].filter(expense => expense.id!==id)
					}))
				}
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
