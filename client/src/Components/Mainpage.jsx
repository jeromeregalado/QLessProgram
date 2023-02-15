import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardChoices from './CardChoices';

const Mainpage = () => {
    return (
        <div className="jumbotron container mt-4 pt-5">
            <h1 >Q-Less Transportation System</h1>
            <p className="lead">This is a simple program to create an app that aims to lessen the time getting a ticket</p>
            <hr className="my-4" />
            <CardChoices/>
        </div>
    )
}

export default Mainpage