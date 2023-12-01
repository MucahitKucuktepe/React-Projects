import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./scss/app.scss";

import data from "./data";

function App() {
  console.log(data);
  return (
    <>
      <Header />
      <Card veri= {data} className="flex" />
      <Footer />
    </>
  );
}

export default App;
