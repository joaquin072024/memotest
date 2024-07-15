
import "./card.css"

function Card({card, onClick}) {
    return(
    <div className="card" onClick={onClick}>
        {card.isSelected ?
        (<div className="right">Al derecho</div>) :
        (<div className="reverse">Al revez</div>)}
    </div>
)}

export default Card