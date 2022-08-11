import { useSearch } from "../../../hooks/useSearch";
import { Title } from "../../Title";
import { ExpensesList } from "./ExpesesList";
import { SearchBar } from "./SearchBar";
import { Container } from "./styles";

export const Expenses = () => {
  const { searchResult, searchExpenses } = useSearch();
  return (
    <Container>
      <Title innerText="Expenses" />
      <SearchBar searchExpenses={searchExpenses} />
      <ExpensesList searchResult={searchResult} />
    </Container>
  );
};
