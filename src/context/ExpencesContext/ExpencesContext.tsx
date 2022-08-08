import { createContext, FC, ReactNode, useContext, useState } from "react";
import { IExpense } from "../../types";
import { v4 as uuidv4 } from "uuid";

interface IExpencesContext {
  expenses: IExpense[] | [];
	addNewExpense: (value: IExpense) => void;
}

const ExpensesContext = createContext<IExpencesContext>({
  expenses: [],
	addNewExpense: (value: IExpense) => {},
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
