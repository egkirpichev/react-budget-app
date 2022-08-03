export enum Color {
	Black = "#000000",
	White = "#FFFFFF",
	LightBlue = "#7CC6FE",
	LightPurple = "#CCD5FF",
	LightPink = "#E7BBE3",
	Red = "#FF0000",
	LightGrey = "#999999",
	Blue = "#23C9FF"
}

export enum Currency {
	USD = "$",
	EUR = "€",
	GBR = "£",
}

export interface ICurrencyOption {
	value: "$" | "€" | "£", label: "USD" | "EUR" | "GBR"
}