import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { StyledSpent, Title } from "./styles";

export const Spent = () => {
  const { currency } = useCurrencyContext();

  return (
    <StyledSpent>
      <Title>{`Spent: ${currency.value}2000`}</Title>
    </StyledSpent>
  );
};
