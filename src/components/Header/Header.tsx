import { Spent } from "../Spent";
import { Title } from "../Title";
import { Budget } from "./Budget";
import { LanguageSelect } from "./LanguageSelect";
import { Remaining } from "./Remaining";
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Title innerText={"Budget App"}></Title>
      <LanguageSelect />
      <Budget />
      <Remaining />
      <Spent />
    </StyledHeader>
  );
};
