import "./style.css";
import data from "./data";
import Card from "./components/Card";

function App() {
  console.log(data);
  return <Card veri={data} />;
}

export default App;
