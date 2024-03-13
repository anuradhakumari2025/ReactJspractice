
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Textutils" aboutText="About" />

      {/* <Navbar/> */}
      <div className="container">
        <TextForm heading="Enter the text below to analyze"/>
      </div>

    </>
  );
}
export default App;
