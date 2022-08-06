import { Budget } from "./components/Budget/Budget";
import { CustomSelect } from "./components/Select/CustomSelect";
import { Title } from "./components/Title/Title";
import { Wrapper } from "./ui/base";

const App = () => {
  return (
    <Wrapper>
			<Title innerText={"Budget App"}></Title>
			<CustomSelect />
			<Budget />
    </Wrapper>
  );
}

export default App;
