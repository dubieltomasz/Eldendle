import Input from './input'
import './App.css'

function App() {
  return (
    <>
      <Input/>
      <table>
        <tr>
          <th colSpan={2}>Weapon</th>
          <th>Type</th>
          <th>Damage</th>
          <th>Critical Boost</th>
          <th>Scaling</th>
          <th>Weight</th>
          <th>Upgrade Material</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Alfreds Futterkiste</td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Alfreds Futterkiste</td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
      </table>
    </>
  )
}

export default App