import { Expenses } from "./components/Header/Expenses";
import { Form } from "./components/Form";
import { Wrapper } from "./ui/base";
import { Header } from "./components/Header";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Expenses />
      <Form />
    </Wrapper>
  );
};

export default App;
