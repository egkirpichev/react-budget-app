import { SubmitHandler, useForm } from "react-hook-form";
import { useExpensesContext } from "../../context/ExpencesContext/ExpencesContext";
import { IExpense } from "../../types";
import { Title } from "../Title/Title";
import { Button, ErrorMessage, ExpenseInput, StyledForm } from "./styles";
import { v4 as uuidv4 } from "uuid";

export const Form = () => {
  const { expenses, addNewExpense } = useExpensesContext();

  const { register, formState: { errors }, handleSubmit, resetField} = useForm<IExpense>();

  const onSubmit: SubmitHandler<IExpense> = (expense) => {
		expense.id = uuidv4();
		addNewExpense(expense);
		resetField("name");
		resetField("cost");
	};

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title innerText="Add Expense" />
      <ExpenseInput
        placeholder="enter name ..."
        type="text"
        {...register("name", {required: true, maxLength: 15, pattern: /^[A-Za-z]+$/i})}
      />
			{errors.name?.type === 'required' && <ErrorMessage>Name field is required</ErrorMessage>}

      <ExpenseInput
        placeholder="enter cost ..."
        type="number"
        {...register("cost", {required: true, maxLength: 5})}
      />

			{errors.cost?.type === 'required' && <ErrorMessage>Cost field is required</ErrorMessage>}
      <Button type="submit">Done</Button>
    </StyledForm>
  );
};
