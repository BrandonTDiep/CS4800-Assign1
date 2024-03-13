// Provide a rough estimate of how many hours you think this will take 
// Considering, that I do have some experience working with React.js and CSS to build a user interface. This assignment will take me a rough 6 hours.

// Log time spent on the project
//  – Date & Hours worked each day 
// 2/8/24 
// Requirements Analysis & Design 
// 2 Hours
// Development 
// 5 Hours
// Testing 
// 15 mins


//  Record number of bugs/defects found during testing 
//   Line 36:8:  'Header' is not defined  react/jsx-no-undef
// forgot to import the ‘Header’ component
//   Line 25:27:  eval can be harmful               no-eval
// import math and use math.evaluate to avoid error
// Each child in a list should have a unique "key" prop.
// added an index as a key “key = {index}” to each child of the component
//   Line 5:28:  'onClickz' is not defined  no-undef      
// component props error: I had to relearn how component props worked again and how to pass them in different JS files
// Around a total of 4 bugs/defects that I felt were time-consuming.


// • Compare your total time spent with your initial estimate
// The total time I spent on this project was 7 Hours and 15 minutes compared to my initial estimate of 6 hours. I spent an extra hour and 15 minutes more. I think the reason why it took me longer could be because of me trying to lay out and figure out how to create a nice-looking user interface for the calculator.


import './App.css';
import { useState } from 'react'
import * as math from 'mathjs'


function App() {

  const Header = () => {
    return (
      <header>Assignment1 - Brandon Diep</header>
    )
  }

  const CalcNumRow = ({ btnValRow, onBtnClick }) => {
    return (
      <section className='btnRow'>
          {btnValRow.map((value, index) => (
              <CalcButton key={index} value={value} onClickz={onBtnClick}/>
          ))}
      </section>
    )
  }

  const CalcButton = ({ value, onClickz }) => {
    return (
      <button onClick={() => onClickz(value)} className='btn'>{value}</button>
      )
  }

  const [displayValue, setDisplayValue] = useState('')

  const btnValRow1 = [7, 8, 9, '/']
  const btnValRow2 = [4, 5, 6, '*']
  const btnValRow3 = [1, 2, 3, '+']
  const btnValRow4 = [0, '.', '=', '-']
  const btnValRow5 = ['C']

  const handleBtnClick = (value) => {
    try{
      switch(value) {
        case 'C':
          setDisplayValue('')
          break
        case '=':
          setDisplayValue(math.evaluate(displayValue).toString())
          break
        default:
          setDisplayValue((prevDisplayValue) => prevDisplayValue + value)
      }
    }
    catch(error){
      setDisplayValue('Error')
    }
  }
  return (
    <div>
      <Header />
      <section className="Calculator">
        <p>{displayValue}</p>
        <CalcNumRow btnValRow = {btnValRow1} onBtnClick={handleBtnClick}/>
        <CalcNumRow btnValRow = {btnValRow2} onBtnClick={handleBtnClick}/>
        <CalcNumRow btnValRow = {btnValRow3} onBtnClick={handleBtnClick}/>
        <CalcNumRow btnValRow = {btnValRow4} onBtnClick={handleBtnClick}/>
        <CalcNumRow btnValRow = {btnValRow5} onBtnClick={handleBtnClick}/>
      </section>
    </div>
  );
}

export default App;
