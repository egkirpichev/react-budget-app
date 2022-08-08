import { StyledBadge } from "./styles"

interface IProps {
	currency: string,
	price: number
}

export const PriceBadge = ({currency, price}: IProps) => {
	return (
		<StyledBadge>{`${currency}${price}`}</StyledBadge>
	)
}
