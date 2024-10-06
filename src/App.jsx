import Header from "./components/Header"
import ResultsTable from "./components/ResultsTable"
import UserInput from "./components/UserInput"
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1 ? true : false;

  function handleUserInput(event) {
    setUserInput((currInputState) => {
      return {
        ...currInputState,
        [event.target.id]: +event.target.value
      }
    });
  }



  return (
    <>
      <Header headerName="Investment Calculator" />
      <UserInput id="user-input" userInput={userInput} onChangeInput={handleUserInput} />
      {!inputIsValid && <p>Please enter a duration greater than zero</p>}
      {inputIsValid && <ResultsTable id="result" results={userInput} />}
    </>
  )
}

export default App
