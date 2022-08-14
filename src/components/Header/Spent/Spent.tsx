import { useCurrencyContext } from "../../../context/CurrencyContext";
import { useExpensesContext } from "../../../context/ExpensesContext";
import { IExpense } from "../../../types";
import { StyledSpent, Title } from "./styles";

export const Spent = () => {
  const { currency } = useCurrencyContext();
  const { expenses } = useExpensesContext();

  const spent: number = [...expenses].reduce(
    (spent: number, expense: IExpense): number => {
      return expense ? (spent += Number(expense.cost)) : spent;
    },
    0
  );

  return (
    <StyledSpent>
      <Title>{`Spent: ${currency.value}${spent}`}</Title>
    </StyledSpent>
  );
};
