import { useBudgetContext } from "../../context/BudgetContext/BudgetContext"
import { Button, StyledBudget, Title } from "./styles"

export const Budget = () => {

	const {budget} = useBudgetContext()

	return (
		<StyledBudget>
			<Title>Budget: {budget}$</Title>
			<Button type="button">Edit</Button>
		</StyledBudget>
	)
}
