import Header from "./components/Header/Header";
import LessonCard from "./components/LessonCard/LessonCard";
import { data } from "./components/helper/data";
function App() {
  return (
    <div className="app">
     <Header/>
     <LessonCard lessons={data}/>
    </div>
  );
}

export default App;
