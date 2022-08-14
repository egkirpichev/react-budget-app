import { SubmitHandler, useForm } from "react-hook-form";
import { useExpensesContext } from "../../context/ExpensesContext";
import { IExpense } from "../../types";
import { Title } from "../Title";
import { Button, ErrorMessage, ExpenseInput, StyledForm } from "./styles";
import { v4 as uuidv4 } from "uuid";

export const Form = () => {
  const { expenses, addNewExpense } = useExpensesContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IExpense>();

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
        {...register("name", {
          required: true,
          maxLength: 15,
          pattern: /^[A-Za-z]+$/i,
        })}
      />

      {errors.name && (
        <ErrorMessage>
          The field is required for entrance. Only latin letters are accepted.
          Maximum length is 15 characters
        </ErrorMessage>
      )}

      <ExpenseInput
        placeholder="enter cost ..."
        type="text"
        {...register("cost", {
          required: true,
          maxLength: 5,
          pattern: /[0-9]+/,
        })}
      />

      {errors.cost && (
        <ErrorMessage>
          The field is required for entrance. Only a positive integer numbers
          are accepted. Maximum length is 5 digits
        </ErrorMessage>
      )}

      <Button type="submit">Done</Button>
    </StyledForm>
  );
};
