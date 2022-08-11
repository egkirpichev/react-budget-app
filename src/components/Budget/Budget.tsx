import { useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext";
import { useInput } from "../../hooks";
import { Button, Input, StyledBudget, Title } from "./styles";

export const Budget = () => {
  const { budget, editBudgetValue } = useBudgetContext();

	const {currency} = useCurrencyContext()

	const budgetInput = useInput()

  const [isEditMode, SetIsEditMode] = useState<boolean>(false);

  const handleClick = () => {
    SetIsEditMode(!isEditMode);

		editBudgetValue(budgetInput.value)
  };

  return (
    <StyledBudget>
			
      {isEditMode ? <Input placeholder="Enter  budget ..." type="number" {...budgetInput}/> : <Title>{`Budget: ${currency.value}${budget}`}</Title>}

      <Button type="button" onClick={handleClick}>
        {isEditMode ? "Save" : "Edit"}
      </Button>
    </StyledBudget>
  );
};
