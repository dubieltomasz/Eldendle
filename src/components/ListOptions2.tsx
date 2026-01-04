import JSONarray from '../../public/craftingData.json';
import './ListOptions2.css';

interface Prop {
    options: number[];
    guesses: number[];
    sendGuess: (match: number) => void;
};

function ListOptions2({ options, guesses, sendGuess }: Prop) {
    return (
        <section className='optionBox'>
            {
                options
                    .filter((value) => (undefined === guesses.find((value2) => value2 === value)))
                    .map((value, index) => (
                        <div className='optionCard' onClick={() => sendGuess(value)}>{JSONarray.at(value)!!.name}</div>
                    ))
            }
        </section>
    );
}

export default ListOptions2;