import { Title } from "../Title/Title"
import { ExpenseInput } from "./ExpenseInput/ExpenseInput"
import { Button, StyledForm } from "./styles"

export const Form = () => {
	return (
		<StyledForm>
			<Title innerText="Add Expense" />
			<ExpenseInput placeholder="enter name ..." type="text"/>
			<ExpenseInput placeholder="enter cost ..." type="number"/>
			<Button type="submit">Done</Button>
		</StyledForm>
	)
}
