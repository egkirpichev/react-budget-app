import { PriceBadge } from "./PriceBadge";
import { DeleteButton, ListItem, Name } from "./styles";
import { ReactComponent as CloseIcon } from "../../../../assets/closeicon.svg";
import { useExpensesContext } from "../../../../context/ExpensesContext";
import { useCurrencyContext } from "../../../../context/CurrencyContext";

interface IProps {
  id: string;
  name: string;
  cost: number;
}

export const ExpensesListItem = ({ id, name, cost }: IProps) => {
  const { currency } = useCurrencyContext();
  const { removeExpense } = useExpensesContext();

  const handleClick = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    if (currentTarget.parentElement) {
      removeExpense(currentTarget.parentElement.id);
    }
  };

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
