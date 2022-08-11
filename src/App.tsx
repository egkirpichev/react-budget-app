import { Expenses } from "./components/Expenses";
import { Form } from "./components/Form";
import { Remaining } from "./components/Remaining";
import { LanguageSelect } from "./components/LanguageSelect";
import { Spent } from "./components/Spent";
import { Title } from "./components/Title";
import { Background, Header, Wrapper } from "./ui/base";
import { Budget } from "./components/Budget";

const App = () => {
  return (
    <Background>
      <Wrapper>
        <Header>
          <Title innerText={"Budget App"}></Title>
          <LanguageSelect />
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
