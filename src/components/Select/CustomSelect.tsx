import Select, { StylesConfig } from "react-select"
import { ICurrencyOption } from "../../types"

export const CustomSelect = () => {
	const currencyOptions: ICurrencyOption[] = [
		{value: "$", label: "USD"},
		{value: "€", label: "EUR"},
		{value: "£", label: "GBR"},
	]
	
	const customStyles: StylesConfig<ICurrencyOption, boolean> = {
	}


	return (
		<Select options={currencyOptions} isMulti={false} defaultValue={currencyOptions[0]}/>
	)
}
