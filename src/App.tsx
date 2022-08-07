import { Budget } from "./components/Budget/Budget";
import { Remaining } from "./components/Remaining/Remaining";
import { CustomSelect } from "./components/Select/CustomSelect";
import { Title } from "./components/Title/Title";
import { Header, Wrapper } from "./ui/base";

const App = () => {
  return (
    <Wrapper>
      <Header>
        <Title innerText={"Budget App"}></Title>
        <CustomSelect />
        <Budget />
				<Remaining />
      </Header>
    </Wrapper>
  );
};

export default App;
