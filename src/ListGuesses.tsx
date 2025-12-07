import JSONArray from '../public/csvjson.json'

interface Prop{
    guesses: number[];
};

function ListGuesses({guesses}: Prop) {
    return (
        <tbody>
            {guesses.map((guess) => (
                <tr key={guess}>
                    <td>Picture</td>
                    <td>{JSONArray.at(guess)!!.Name}</td>
                    <td>{JSONArray.at(guess)!!.Type}</td>
                    <td>{JSONArray.at(guess)!!.Name}</td>
                    <td>{JSONArray.at(guess)!!.Cri}</td>
                    <td>{JSONArray.at(guess)!!.Name}</td>
                    <td>{JSONArray.at(guess)!!.Wgt}</td>
                    <td>{JSONArray.at(guess)!!.Upgrade}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default ListGuesses;