import { ChangeEvent, MouseEvent, MouseEventHandler, useState } from "react";
import { useBudgetContext} from "../../context/BudgetContext/BudgetContext";
import { useInput } from "../../hooks/useInput";
import { Button, Input, StyledBudget, Title } from "./styles";

export const Budget = () => {
  const { budget, editBudgetValue } = useBudgetContext();

	const budgetInput = useInput()

  const [isEditMode, SetIsEditMode] = useState<boolean>(false);

  const handleClick = () => {
    SetIsEditMode(!isEditMode);

		editBudgetValue(budgetInput.value)
  };

  return (
    <StyledBudget>
			
      {isEditMode ? <Input placeholder="Enter  budget ..." type="number" {...budgetInput}/> : <Title>{`Budget: $${budget}`}</Title>}

      <Button type="button" onClick={handleClick}>
        {isEditMode ? "Save" : "Edit"}
      </Button>
    </StyledBudget>
  );
};
