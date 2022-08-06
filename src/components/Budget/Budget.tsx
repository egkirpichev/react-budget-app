import { useContext } from "react"
import { BudgetContext } from "../../context/BudgetContext/BudgetContext"
import { Button, StyledBudget, Title } from "./styles"

export const Budget = () => {

	const {budget} = useContext(BudgetContext)

	return (
		<StyledBudget>
			<Title>Budget: {budget}$</Title>
			<Button type="button">Edit</Button>
		</StyledBudget>
	)
}
