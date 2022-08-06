import Select, { StylesConfig } from "react-select"
import { Currency } from "../../config/currency"
import { ICurrencyOption } from "../../types"

export const CustomSelect = () => {
	const currencyOptions: ICurrencyOption[] = [
		{value: Currency.USD, label: "USD"},
		{value: Currency.EUR, label: "EUR"},
		{value: Currency.GBR, label: "GBR"},
	]
	
	const customStyles: StylesConfig<ICurrencyOption, boolean> = {
	}


	return (
		<Select options={currencyOptions} isMulti={false} defaultValue={currencyOptions[0]}/>
	)
}
