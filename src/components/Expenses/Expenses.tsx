import { useSearch } from "../../hooks/useSearch"
import { Title } from "../Title/Title"
import { ExpesesList } from "./ExpesesList/ExpesesList"
import { SearchBar } from "./SearchBar/SearchBar"
import { Container } from "./styles"

export const Expenses = () => {
	const {searchResult, searchExpenses} = useSearch()
	return (
		<Container>
			<Title innerText="Expenses"/>
			<SearchBar searchExpenses={searchExpenses}/>
			<ExpesesList searchResult={searchResult}/>
		</Container>
	)
}
