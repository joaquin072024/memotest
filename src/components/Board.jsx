import { useState } from "react"
import Card from "./Card1"
import "./board.css"

const array = [
    { id: 1, algo: "a", isSelected: false },
    { id: 2, algo: "b", isSelected: false },
    { id: 3, algo: "c", isSelected: false },
    { id: 4, algo: "d", isSelected: false },
    { id: 5, algo: "e", isSelected: false },
    { id: 6, algo: "f", isSelected: false },
    { id: 7, algo: "g", isSelected: false },
    { id: 8, algo: "h", isSelected: false },
    { id: 9, algo: "i", isSelected: false },
    { id: 10, algo: "j", isSelected: false }
  ];
  
  const arrayDoble = [...array, ...array];

const shuffleArray = (array) => {
    for( let i = array.length - 1; i > 1; i--) {
        const j = Math.floor(Math.random() * i + 1);
        [array[i],array[j]] = [array[j],array[i]];
    }
    return array
}

let obj = {
    value1: null,
    value2: null,
}


function checkObj(card) {
    if(obj.value1 === null) {
        obj.value1 = card.id
    } else if(obj.value2 === null) {
        obj.value2 = card.id
    } else {
        if(obj.value1 === obj.value2) {
            console.log("hiciste un punto")
        }
    }
}

function Board() {
    const [values, setValues] = useState(shuffleArray(arrayDoble))
    
   
    const handleClick = (id) => {
        setValues((prevValues) =>
            prevValues.map((card) =>
                card.id === id ? { ...card, isSelected: !card.isSelected } : card
            )
        );
        const clickedCard = values.find((card) => card.id === id);
        checkObj(clickedCard);
    };



    return(
        <div className="container"> 
           {values.map(card => (
                <Card
                    key={card.id}
                    card={card}
                    onClick={() => handleClick(card.id) }
                />
            ))}
        </div>
)}


export default Board
