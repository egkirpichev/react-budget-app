import { useExpensesContext } from "../../../context/ExpencesContext/ExpencesContext";
import { ExpensesListItem } from "./ExpensesListItem/ExpensesListItem";
import { StyledList } from "./styles";

export const ExpesesList = () => {
  const { expenses } = useExpensesContext();

  return (
    <StyledList>
      {expenses.length > 0 &&
        expenses.map((expense) => {
          return (
            <ExpensesListItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          );
        })}
    </StyledList>
  );
};
