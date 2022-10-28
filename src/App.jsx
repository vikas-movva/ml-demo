import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Demo from "./components/demo/Demo";
function App() {
  console.log(window.location.href);
  return (
    <div className="App">
      <Sidebar />
      <Demo />
    </div>
  );
}

export default App;
