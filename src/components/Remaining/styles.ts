import styled from "styled-components";
import { Color } from "../../ui/color";

export const StyledRemaining = styled.div`
	grid-column: 1/3;
	padding: 32px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${Color.LightPurple};
	border-radius: 10px;
`

export const Title = styled.span`
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
`