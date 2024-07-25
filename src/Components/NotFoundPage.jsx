import React, { useState } from 'react'
import img from "../assets/expriedPage.jpg"
import loader from "../assets/loading.gif"
import "../App.css"

const NotFoundPage = () => {
    const [count, setCount] = useState(0);
    setTimeout(() => {
        setCount(1);
    }, 6000);


    return (
        <div className="not-found-page ">
            {
                count == 1 ?
                    <div>
                        <h3 className='text-center'>Link has expired</h3>
                        <p>or</p>
                        <h3 className='text-center'>Network issues please refresh your screen</h3>
                        <img className='not-found-page-img' src={img} alt="" />
                    </div> :

                    <img className='loader' src={loader} alt="" />

            }
        </div>
    )
}

export default NotFoundPage