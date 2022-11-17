import React from 'react'
import Menu from './Menu'
import './App.css'

function Header(props) {// {props.name} vira um objeto e passamos como atributo

    return (
        <header className='header'>
            <h1>{props.name}</h1>
            <Menu links={props.links}></Menu>
        </header>)
}

export default Header


