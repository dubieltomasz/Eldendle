import JSONArray from '../public/csvjson.json'

interface Prop {
    options: number[];
    sendGuess: (match: number) => void;
};

function ListOptions({ options, sendGuess }: Prop) {
    function onclickfunction(index: number) {
        sendGuess(index);
    }

    return (
        <tbody>
            {options.map((option, index) => (
                <tr key={index} onClick={() => onclickfunction(option)}>
                    <td>Picture</td>
                    <td>{JSONArray.at(option)!!.Name}</td>
                    <td>{JSONArray.at(option)!!.Type}</td>
                    <td>{JSONArray.at(option)!!.Name}</td>
                    <td>{JSONArray.at(option)!!.Cri}</td>
                    <td>{JSONArray.at(option)!!.Name}</td>
                    <td>{JSONArray.at(option)!!.Wgt}</td>
                    <td>{JSONArray.at(option)!!.Upgrade}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default ListOptions;