import React from 'react'
import "./Header.css"
function Header(props) {

    const log = (e) => {
        console.log(e.target.id)
    }

    return (
        <div className="categories">
            {props.categs.map(v =>
                <li key={v} id={v} onClick={log} >{v}</li>
            )}


        </div>
    )
}

export default Header