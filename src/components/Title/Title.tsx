import { StyledTitle } from "./styles"

interface IProps {
	innerText: string;
}

export const Title = ({innerText}: IProps) => {
	return (
		<StyledTitle>{innerText}</StyledTitle>
	)
}
