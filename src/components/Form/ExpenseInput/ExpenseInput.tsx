import { Input } from "./styles"

interface IProps {
	placeholder: string,
	type: string
}

export const ExpenseInput = ({placeholder, type}: IProps) => {
	return (
		<Input placeholder={placeholder} type = {type}></Input>
	)
}
