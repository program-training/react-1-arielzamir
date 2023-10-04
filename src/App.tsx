import Text from "./components/Text/Text";
import Card from "./components/Card/Card";
import { data } from "./components/Card/data";
import CardForm from "./components/CardForm/CardForm";

function App(): JSX.Element {
  return (
    <div>
      <Text />
      {data.map((card, index) => (
        <Card key={index} {...card} />
      ))}
      <CardForm />
    </div>
  );
}

export default App;
