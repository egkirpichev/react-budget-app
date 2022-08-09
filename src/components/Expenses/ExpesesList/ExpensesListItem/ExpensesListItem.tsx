import { PriceBadge } from "./PriceBadge/PriceBadge";
import { DeleteButton, ListItem, Name } from "./styles";
import { ReactComponent as CloseIcon } from "../../../../assets/closeIcon.svg";
import { useCurrencyContext } from "../../../../context/CurrencyContext/CurrencyContext";

interface IProps {
	id: string,
	name: string,
	cost:number,
}

export const ExpensesListItem = ({id, name, cost}: IProps) => {

	const {currency} = useCurrencyContext()

	return (
    <ListItem id={id}>
      <Name>{name}</Name>
      <PriceBadge currency={currency.value} cost={cost}/>
      <DeleteButton type="button">
        <CloseIcon />
      </DeleteButton>
    </ListItem>
  );
};
