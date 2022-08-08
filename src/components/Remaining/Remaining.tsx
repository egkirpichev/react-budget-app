import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { StyledRemaining, Title } from "./styles";

export const Remaining = () => {
  const { currency } = useCurrencyContext();

  return (
    <StyledRemaining>
      <Title>{`Remaining: ${currency.value}2000`}</Title>
    </StyledRemaining>
  );
};
