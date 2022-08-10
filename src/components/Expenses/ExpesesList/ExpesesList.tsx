import { useExpensesContext } from "../../../context/ExpencesContext/ExpencesContext";
import { IExpense } from "../../../types";
import { ExpensesListItem } from "./ExpensesListItem/ExpensesListItem";
import { StyledList } from "./styles";

interface IProps {
  searchResult: IExpense[];
}

export const ExpesesList = ({ searchResult }: IProps) => {
	
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

  if (!searchResult.length && expenses.length) return <p>Oooops 🙈</p>;

  return <></>;
};
