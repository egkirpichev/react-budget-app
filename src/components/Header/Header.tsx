import { Spent } from "../Spent";
import { Title } from "../Title";
import { Budget } from "../Budget";
import { CurrencySelect } from "../CurrencySelect";
import { Remaining } from "../Remaining";
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Title innerText={"Budget App"}></Title>
      <CurrencySelect />
      <Budget />
      <Remaining />
      <Spent />
    </StyledHeader>
  );
};
