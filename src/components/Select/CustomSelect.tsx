import Select, { StylesConfig } from "react-select"
import { Currency } from "../../config/currency"
import { ICurrencyOption } from "../../types"
import { Color } from "../../ui/color"

export const CustomSelect = () => {
	const currencyOptions: ICurrencyOption[] = [
		{value: Currency.USD, label: "USD"},
		{value: Currency.EUR, label: "EUR"},
		{value: Currency.GBR, label: "GBR"},
	]
	
	const customStyles: StylesConfig<ICurrencyOption, boolean> = {
		control: (styles) => ({
			...styles,
			minHeight: `30px`,
			border: `1px solid ${Color.LightGrey}`,
		}),

		valueContainer: (styles) => ({
			...styles,
			padding: 0,
			textAlign: `center`,
			fontWeight: `400`,
			fontSize: `12px`,
			lineHeight: `15px`,
		}),

		indicatorsContainer: (styles) => ({
			...styles,
			div: {
				padding: `0px 5px`,
			}
		}),

		indicatorSeparator: (styles) => ({
			...styles,
			border: `1px solid ${Color.LightGrey}`,
		})
	}


	return (
		<Select options={currencyOptions} isMulti={false} defaultValue={currencyOptions[0]} styles={customStyles}/>
	)
}
