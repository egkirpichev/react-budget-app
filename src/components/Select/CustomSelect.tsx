import Select from "react-select"

export const CustomSelect = () => {
	const languageOptions = [
		{value: "$", label: "USD"},
		{value: "€", label: "EUR"},
		{value: "£", label: "GBR"},
	]
	
	const customStyles = {
		
	}


	return (
		<Select options={languageOptions} isMulti={false} defaultValue={languageOptions[0]}/>
	)
}
