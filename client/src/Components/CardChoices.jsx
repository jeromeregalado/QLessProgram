import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Modals from './Modals'

const CardChoices = () => {
    const [imagesList, setImage] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:3001/api/getComponents').then((response) => {
            setImage(response.data);
        });
    }, []);

    const renderCard = (val, index) => {
        
        return (
            <div className="card cardFormat col-sm-5 m-auto p-auto mb-5" index={index} key={index}>
                <img src={val.componentContent} className="card-img-top cardImg" alt={val.componentId} key={index} />
                <div className="card-body">
                    <h5 className="card-title">{val.componentTitle}</h5>
                    <p className="card-text">{val.componentDesc}</p>
                    <button type='button' className="btn btn-primary" data-bs-toggle="modal" data-bs-target={val.componentModal}>Get {val.componentTitle}</button>
                </div>
            </div>
        );
    }

    return (
        <div className='container'>
            <h3 className='mb-4'>Pick a card</h3>
            <div className='row'>
                {imagesList.map(renderCard)}
                <Modals/>
            </div>
        </div>
    )
}

export default CardChoices