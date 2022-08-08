import styled from "styled-components";


export const Wrapper = styled.div`
	min-height: 100vh;
	padding: 30px 20px 0px;
	display: flex;
	flex-direction: column;
	gap: 30px;
`

export const Header = styled.header`
	display: grid;
	grid-template-columns: 4fr 1fr;
	grid-template-rows: 30px repeat(3, 1fr);
	row-gap: 20px;
`