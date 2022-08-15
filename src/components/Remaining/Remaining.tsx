import { useEffect, useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext";
import { IExpense } from "../../types";
import { StyledRemaining, Title } from "./styles";

export const Remaining = () => {
  const { currency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  const { budget } = useBudgetContext();

  const spent: number = [...expenses].reduce(
    (spent: number, expense: IExpense): number => {
      return expense ? (spent += Number(expense.cost)) : spent;
    },
    0
  );
  const remaining: number = budget - spent;

  const [isOverspnding, setIsOverspending] = useState<boolean>(false);

  useEffect(() => {
    if (remaining < 0) {
      setIsOverspending(true);
    } else setIsOverspending(false);
  }, [spent, budget]);

  return (
    <StyledRemaining isOverspnding={isOverspnding}>
      <Title isOverspnding={isOverspnding}>{`${
        isOverspnding ? "Overspending by" : "Remaining:"
      } ${currency.value}${Math.abs(remaining)}`}</Title>
    </StyledRemaining>
  );
};
