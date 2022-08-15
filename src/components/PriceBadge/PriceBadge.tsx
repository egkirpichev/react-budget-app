import { StyledBadge } from "./styles"

interface IProps {
	currency: string,
	cost: number
}

export const PriceBadge = ({currency, cost}: IProps) => {
	return (
		<StyledBadge>{`${currency}${cost}`}</StyledBadge>
	)
}
