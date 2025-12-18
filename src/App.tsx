import { useState } from 'react'
import Input from './Input.tsx'
import ListOptions from './ListOptions.tsx'
import './App.css'
import ListGuesses from './ListGuesses.tsx';

function App() {
  const [lastGuessDate, setLastGuessDate] = useState<string>(
    localStorage.getItem('lastGuessDate') ? localStorage.getItem('lastGuessDate')!! : ""
  );

  const [options, setOptions] = useState<number[]>([]);

  const [guesses, setGuesses] = useState<number[]>(
    localStorage.getItem('guesses') ? JSON.parse(localStorage.getItem('guesses')!!) : []
  );

  function addGuess(guess: number) {
    setGuesses(prevGuesses => {
      const newGuesses = [...prevGuesses, guess];
      localStorage.setItem('guesses', JSON.stringify(newGuesses));
      return newGuesses;
    });
  }

  const currentDate: string = new Date().toISOString().split('T')[0];

  if (lastGuessDate === "" || lastGuessDate < currentDate) {
    localStorage.setItem('lastGuessDate', currentDate);
    setLastGuessDate(currentDate);
    localStorage.setItem('guesses', "[]");
    setGuesses([]);
  }

  return (
    <>
      <Input search={setOptions} />
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Weapon</th>
            <th>Type</th>
            <th>Damage</th>
            <th>Critical Boost</th>
            <th>Scaling</th>
            <th>Weight</th>
            <th>Upgrade Material</th>
          </tr>
        </thead>
        <ListOptions options={options} sendGuess={addGuess} />
      </table>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Weapon</th>
            <th>Type</th>
            <th>Damage</th>
            <th>Critical Boost</th>
            <th>Scaling</th>
            <th>Weight</th>
            <th>Upgrade Material</th>
          </tr>
        </thead>
        <ListGuesses guesses={guesses}/>
      </table>
    </>
  )
}

export default App