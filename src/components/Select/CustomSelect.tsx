import Select, { StylesConfig } from "react-select"
import { Currency } from "../../config/currency"
import { ICurrencyOption } from "../../types"
import { Color } from "../../ui/color"
import { customStyles } from "./styles"

export const CustomSelect = () => {
	const currencyOptions: ICurrencyOption[] = [
		{value: Currency.USD, label: "USD"},
		{value: Currency.EUR, label: "EUR"},
		{value: Currency.GBR, label: "GBR"},
	]
	
	return (
		<Select options={currencyOptions} isMulti={false} defaultValue={currencyOptions[0]} styles={customStyles}/>
	)
}
