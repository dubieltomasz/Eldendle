import JSONArray from '../public/csvjson.json'

interface Prop{
    Submit: (match: number[]) => void;
};

function input({Submit}: Prop) {
    function search(name: string) {
        const inputValue: string = name.trim().toLowerCase();
        const matches: number[] = []; 

        JSONArray.forEach((record, index: number) => {
            if(record.Name.toLocaleLowerCase().match(inputValue)) {
                matches.push(index);
            }
        })

        Submit(matches);
    }

    return (
        <form>
            <input
                type="text"
                name="inputName"
                onChange={that => {
                    search(that.target.value);
                }}
            />
        </form>
    );
};

export default input;