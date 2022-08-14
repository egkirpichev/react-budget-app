import { useExpensesContext } from "../../../context/ExpensesContext";
import { IExpense } from "../../../types";
import { ExpensesListItem } from "./ExpensesListItem";
import { SearchError, StyledList } from "./styles";

interface IProps {
  searchResult: IExpense[];
}

export const ExpensesList = ({ searchResult }: IProps) => {
  const { expenses } = useExpensesContext();

  if (searchResult.length) {
    return (
      <StyledList>
        {searchResult.map((expense) => {
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
  }

  if (!searchResult.length && expenses.length)
    return <SearchError>Oooops 🙈</SearchError>;

  return <></>;
};
