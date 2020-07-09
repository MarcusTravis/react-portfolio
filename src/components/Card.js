import React from 'react'
import "../App.css";


export default function Card() {
    return (
        <div>
            <div className="card cardWidth cardMarginTop bg-dark">
                <img className="card-img-top bg-img-jawa" alt=""></img>
                <div className="card-body text-center">
                    <div className="card-title text-red h5">Card title</div>
                    <div className="card-text text-red">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                    <a href="#" className="btn btn-black mt-3">Go somewhere</a>
                </div>
            </div>
        </div>
    )
} 
