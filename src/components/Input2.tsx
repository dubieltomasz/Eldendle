import JSONarray from '../../public/craftingData.json';

interface Prop {
    search: (match: number[]) => void;
};

function Input2({search}: Prop) {
    function onChangeFunction(inputValue: string) {
        const expression: string = inputValue.trim().toLowerCase();
        const matches: number[] = [];

        if (expression !== '') {
            JSONarray.forEach((record, index: number) => {
                if (record.name.toLocaleLowerCase().match(expression)) {
                    matches.push(index);
                }
            })
        }

        search(matches);
    }

    return (
        <input
            type='text'
            name='inputName'
            onChange={that => {
                onChangeFunction(that.target.value);
            }}
        />
    );
};

export default Input2;