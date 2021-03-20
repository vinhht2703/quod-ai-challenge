import MainPage from "../MainPage";
import Exercises from "../Exercises";
import NavigationBar from "../../components/NavigationBar";
import "./styles.scss";

function App() {
  return (
    <div className="app-container">
      <NavigationBar></NavigationBar>
      <Exercises></Exercises>
    </div>
  );
}

export default App;
