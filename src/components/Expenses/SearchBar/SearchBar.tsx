import { useEffect } from "react"
import { useExpensesContext } from "../../../context/ExpencesContext/ExpencesContext"
import { useDebounce } from "../../../hooks/useDebounce"
import { useInput } from "../../../hooks/useInput"
import { StyledSearchBar } from "./styles"

interface IProps {
	searchExpenses: (debounceValue: string) => void,
}

export const SearchBar = ({searchExpenses}: IProps) => {
	const searchInput = useInput()
	const searchRequest = useDebounce(searchInput.value, 300)
	const {expenses} = useExpensesContext()
		
	useEffect(() => searchExpenses(searchRequest), [searchRequest, expenses]) 
	
	return (
		<StyledSearchBar type="text" placeholder="search ..." {...searchInput}/>
	)
}
