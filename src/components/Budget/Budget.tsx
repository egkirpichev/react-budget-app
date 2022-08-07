import { ChangeEvent, useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { Button, Input, StyledBudget, Title } from "./styles";

export const Budget = () => {
  const { budget } = useBudgetContext();

  const [isEditMode, SetIsEditMode] = useState<boolean>(false);

  const handleClick = () => {
    SetIsEditMode(!isEditMode);
  };

  return (
    <StyledBudget>
			
      {isEditMode ? <Title>{`Budget: $${budget}`}</Title> : <Input placeholder="Enter  budget ..." type="number"/>}

      <Button type="button" onClick={handleClick}>
        {isEditMode ? "Save" : "Edit"}
      </Button>
    </StyledBudget>
  );
};
