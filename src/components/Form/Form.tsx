import { SubmitHandler, useForm } from "react-hook-form";
import { useExpensesContext } from "../../context/ExpencesContext/ExpencesContext";
import { Title } from "../Title/Title";
import { Button, ExpenseInput, StyledForm } from "./styles";

type FormType = {
  name: string;
  cost: string;
};

export const Form = () => {
  const { expenses } = useExpensesContext();

  const { register, handleSubmit, resetField} = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = (expense) => {
	
		resetField("name");
		resetField("cost");
		
	};

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title innerText="Add Expense" />
      <ExpenseInput
        placeholder="enter name ..."
        type="text"
        {...register("name")}
      />
      <ExpenseInput
        placeholder="enter cost ..."
        type="number"
        {...register("cost")}
      />
      <Button type="submit">Done</Button>
    </StyledForm>
  );
};
