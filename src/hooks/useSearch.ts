import { useEffect, useState } from "react";
import { useExpensesContext } from "../context/ExpencesContext/ExpencesContext";
import { IExpense } from "../types";

export const useSearch = () => {
  const { expenses } = useExpensesContext();
  const [searchResult, setSearchResult] = useState<IExpense[]>(expenses);

	const searchExpenses = (searchRequest: string) => {
      if (searchRequest) {setSearchResult(
        expenses.filter((expense) =>
          expense.name.toLowerCase().match(searchRequest.toLowerCase())
        )
      );
    } else setSearchResult(expenses)
	}

  return { searchResult, searchExpenses};
};
