import styled from "styled-components";
import { Color } from "../../../ui/color";

interface IProps {
	isOverspnding: boolean
}

export const StyledRemaining = styled.div<IProps>`
	grid-column: 1/3;
	padding: 32px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${(props => props.isOverspnding ? Color.Red : Color.LightPurple)};
	border-radius: 10px;
`

export const Title = styled.span<IProps>`
	font-weight: ${(props => props.isOverspnding ? 700 : 500)};
	font-size: 20px;
	line-height: 24px;
	color: ${(props => props.isOverspnding ? Color.White : Color.Black)};
`