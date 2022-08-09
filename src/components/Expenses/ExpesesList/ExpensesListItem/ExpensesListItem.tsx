import { PriceBadge } from "./PriceBadge/PriceBadge";
import { DeleteButton, ListItem, Name } from "./styles";
import { ReactComponent as CloseIcon } from "../../../../assets/closeIcon.svg";
import { useCurrencyContext } from "../../../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../../../context/ExpencesContext/ExpencesContext";
import { ChangeEvent, MouseEventHandler } from "react";

interface IProps {
  id: string;
  name: string;
  cost: number;
}

export const ExpensesListItem = ({ id, name, cost }: IProps) => {
  const { currency } = useCurrencyContext();
  const { expenses, removeExpense } = useExpensesContext();

  const handleClick = (
    {currentTarget}: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (currentTarget.parentElement) {
			removeExpense(currentTarget.parentElement.id);
    }
  };
console.log(expenses);

  return (
    <ListItem id={id}>
      <Name>{name}</Name>
      <PriceBadge currency={currency.value} cost={cost} />
      <DeleteButton type="button" onClick={handleClick}>
        <CloseIcon />
      </DeleteButton>
    </ListItem>
  );
};
