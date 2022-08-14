import { Currency } from "../config/currency";

export interface ICurrencyOption {
  value: Currency;
  label: keyof typeof Currency;
}

export interface IExpense {
  id: string;
  name: string;
  cost: number;
}

export interface IExpencesContext {
  expenses: IExpense[] | [];
  addNewExpense: (value: IExpense) => void;
  removeExpense: (id: string) => void;
}

export interface ICurrencyContext {
  currency: ICurrencyOption;
  setCurrency: (value: ICurrencyOption) => void;
}

export interface IBudgetContext {
  budget: number;
  editBudgetValue: (value: string) => void;
}
