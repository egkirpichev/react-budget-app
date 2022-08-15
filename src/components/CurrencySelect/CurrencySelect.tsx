import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { Currency } from "../../config/currency";
import { useCurrencyContext } from "../../context/CurrencyContext";
import { ICurrencyOption } from "../../types";
import { customStyles } from "./styles";

export const CurrencySelect = () => {
  const currencyOptions: ICurrencyOption[] = [
    { value: Currency.USD, label: "USD" },
    { value: Currency.EUR, label: "EUR" },
    { value: Currency.GBR, label: "GBR" },
  ];

  const { currency, setCurrency } = useCurrencyContext();

  const [selected, setSlected] = useState<ICurrencyOption>(currency);

  const handleChange = (option: SingleValue<ICurrencyOption>) => {
    if (option) {
      setSlected(option);
      setCurrency(option);
    }
  };

  return (
    <Select
      options={currencyOptions}
      isMulti={false}
      isSearchable={false}
      defaultValue={currency}
      styles={customStyles}
      onChange={handleChange}
    />
  );
};
