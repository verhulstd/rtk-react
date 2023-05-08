import Counter from "./components/Counter";
import Todos from "./components/Todos";
import Landscapes from "./components/Landscapes";
import "./styles.scss";

const App = () => {
  return (
    <main>
      <Counter />
      <hr />
      <Todos />
      <hr />
      <Landscapes />
    </main>
  );
};

export default App;
