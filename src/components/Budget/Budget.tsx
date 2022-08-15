import { ChangeEvent, useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext";
import { useInput } from "../../hooks";
import { Button, Input, StyledBudget, Title } from "./styles";

export const Budget = () => {
  const { budget, editBudgetValue } = useBudgetContext();

  const { currency } = useCurrencyContext();

  const budgetInput = useInput();

  const [isEditMode, SetIsEditMode] = useState<boolean>(false);

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    SetIsEditMode(!isEditMode);
    editBudgetValue(budgetInput.value);
  };

  return (
    <StyledBudget onSubmit={handleSubmit}>
      {isEditMode ? (
        <Input
          placeholder="Enter  budget ..."
          type="text"
          pattern="[0-9]+"
          autoFocus
          {...budgetInput}
        />
      ) : (
        <Title>{`Budget: ${currency.value}${budget}`}</Title>
      )}

      <Button type="submit">{isEditMode ? "Save" : "Edit"}</Button>
    </StyledBudget>
  );
};
