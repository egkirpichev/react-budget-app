import styled from "styled-components";
import { Color } from "./color";


export const Background = styled.div`
	background-color: ${Color.LightBlue};
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	min-height: 100vh;
	max-width: 768px;
	margin: 0px auto;
	padding: 30px 20px 50px;
	background-color: ${Color.White};
`

export const Header = styled.header`
	display: grid;
	grid-template-columns: 4fr 1fr;
	grid-template-rows: 30px repeat(3, 1fr);
	row-gap: 20px;
`