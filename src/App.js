import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/pure/greeting";
import GreetingF from "./components/pure/greetingF";
import TaskListComponent from "./components/container/TaskListComponent";
import ContactListComponent from "./components/container/ContactListComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Greeting name={"Gian"} /> */}
        {/* <GreetingF name = { 'Carlos '}/> */}
        {/* <TaskListComponent/> */}
        <ContactListComponent/>
      </header>
    </div>
  );
}

export default App;
