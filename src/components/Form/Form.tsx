import { useExpensesContext } from "../../context/ExpencesContext/ExpencesContext";
import { useInput } from "../../hooks/useInput";
import { Title } from "../Title/Title";
import { ExpenseInput } from "./ExpenseInput/ExpenseInput";
import { Button, StyledForm } from "./styles";

export const Form = () => {
  const nameInput = useInput();
  const costInput = useInput();

	const {expenses} = useExpensesContext()

  return (
    <StyledForm>
      <Title innerText="Add Expense" />
      <ExpenseInput placeholder="enter name ..." type="text" {...nameInput}/>
      <ExpenseInput placeholder="enter cost ..." type="number" {...costInput}/>
      <Button type="submit">Done</Button>
    </StyledForm>
  );
};
