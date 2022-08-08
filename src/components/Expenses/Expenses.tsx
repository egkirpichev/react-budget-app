import { Title } from "../Title/Title"
import { ExpesesList } from "./ExpesesList/ExpesesList"
import { SearchBar } from "./SearchBar/SearchBar"
import { Container } from "./styles"

export const Expenses = () => {
	return (
		<Container>
			<Title innerText="Expenses"/>
			<SearchBar />
			<ExpesesList />
		</Container>
	)
}
