import styled from "styled-components";
import { Color } from "../../ui/color";

export const StyledBudget = styled.div`
	grid-column: 1/3;
	padding: 32px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${Color.LightBlue};
	border-radius: 10px;
`
export const Title = styled.span`
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	color: ${Color.Black};
`

export const Button = styled.button`
	padding: 10px 30px;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	border: none;
	border-radius: 10px; 
	cursor: pointer;

	:hover {
		background-color: ${Color.LightGrey};
	}

	:active {
		box-shadow: inset 5px 5px 5px ${Color.Black}; 
	}
`