import MainPage from "../MainPage";
import NavigationBar from "../../components/NavigationBar";
import "./styles.scss";

function App() {
  return (
    <div className="app-container">
      <NavigationBar></NavigationBar>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
