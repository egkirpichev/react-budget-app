import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";
import { Remaining } from "./components/Remaining/Remaining";
import { CustomSelect } from "./components/Select/CustomSelect";
import { Spent } from "./components/Spent/Spent";
import { Title } from "./components/Title/Title";
import { Background, Header, Wrapper } from "./ui/base";

const App = () => {
  return (
    <Background>
		<Wrapper>
      <Header>
        <Title innerText={"Budget App"}></Title>
        <CustomSelect />
        <Budget />
				<Remaining />
				<Spent />
      </Header>
			<Expenses />
			<Form />
    </Wrapper>
		</Background>
  );
};

export default App;
