import { Expenses } from "./components/Header/Expenses";
import { Form } from "./components/Form";
import { Background, Wrapper } from "./ui/base";
import { Header } from "./components/Header";

const App = () => {
  return (
    <Background>
      <Wrapper>
        <Header />
        <Expenses />
        <Form />
      </Wrapper>
    </Background>
  );
};

export default App;
