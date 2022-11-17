import React from "react";

function Menu(props){

    const listLinks = props.links.map(link => <li key={link}>{link}</li>)

    return  <ul className='menu'> 
                {listLinks}
            </ul>
}

export default Menu

    //<li>{link}</li>)} criou uma key em baixo para parar de acursar erro no navegador
    //<li key={link}>{link}</li>)} 