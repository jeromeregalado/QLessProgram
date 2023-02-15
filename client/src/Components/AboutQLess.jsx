import React, {useEffect, useState} from 'react'
import axios from 'axios';


const AboutQLess = () => {
    const [textList, setText] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:3001/api/getAboutText').then((response) => {
            setText(response.data);
        });
    }, []);
    return (
        <div className='container'>
            <h3 className='fw-bold mt-4 pt-5'>About Q-Less</h3>
                {textList.map((val) => {
                    return <p className='text-start' key={val.textId}>{val.textContent}</p>
                })}
            
            <p className='inline'>This Application was made using React and Bootstrap 5.3.0 alpha
                <a className="btn btn-primary btn-sm mx-2 inline" href="https://getbootstrap.com/" target="_blank" rel="noreferrer" role="button">Learn more</a>
            </p>
        </div >
    )
}

export default AboutQLess