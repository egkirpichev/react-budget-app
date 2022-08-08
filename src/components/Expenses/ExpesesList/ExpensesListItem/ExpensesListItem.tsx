import { PriceBadge } from "./PriceBadge/PriceBadge";
import { DeleteButton, ListItem, Name } from "./styles";
import { ReactComponent as CloseIcon } from "../../../../assets/closeIcon.svg";

export const ExpensesListItem = () => {
  return (
    <ListItem>
      <Name>shopping</Name>
      <PriceBadge currency="$" price={100} />
      <DeleteButton type="button">
        <CloseIcon />
      </DeleteButton>
    </ListItem>
  );
};
