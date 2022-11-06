import React from 'react'
import Card from "../Card/Card"
import "./Main.css"


function Main(props) {

    return (
        <div className="products-container">
            {props.products.map((v) =>
                <Card key={v.title} {...v} imag={v.img} />)
            }

        </div>
    )
}

export default Main