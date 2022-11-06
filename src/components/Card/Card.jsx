import React from 'react'
import "./Card.css"

function Card(props) {
    console.log("🚀 ~ file: Card.jsx ~ line 4 ~ Card ~ props", props)
    return (
        <div className="card-container">
            <div className="card-title">{props.title}</div>
            {props.category === "Google" ? <div>Google rock</div> : null}
            <img src={props.img} alt="" />
            <div>
                <label>price: {props.price.split(" ")[0]}</label>
            </div>

            <button >Add to cart</button>
        </div>
    )
}

export default Card