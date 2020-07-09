import React from 'react'
import "../App.css";

export default function Card() {

    const cardInfo = [
        { 
            image: "../images/LogoBlck.png", 
            title: "react-employee-directory", 
            text: "A web page where a user can view their entire employee directory at once so that they have quick access to their employee information.", 
            link: "https://github.com/MarcusTravis/react-employee-directory" 
        },
        { 
            image: "../images/LogoBlck.png", 
            title: "Employee-Tracker", 
            text: "Employee Tracker to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.", 
            link: "https://github.com/MarcusTravis/Employee-Tracker" 
        },
        { 
            image: "../images/LogoBlck.png", 
            title: "Online-Offline-Budget-Tracker", 
            text: "Made with Node.js, MongoDB, Mongoose, and Express. The user will be able to add expenses and deposits to their budget with or without a connection.", 
            link: "https://github.com/MarcusTravis/Online-Offline-Budget-Tracker" 
        },
        { 
            image: "../images/LogoBlck.png", 
            title: "Template-Engine-Employee-Summary", 
            text: "This is an OOP-demo for the homework required in the OOP section of the code bootcamp from UofA", 
            link: "https://github.com/MarcusTravis/Template-Engine-Employee-Summary" 
        },
        { 
            image: "../images/LogoBlck.png", 
            title: "Workout-Tracker", 
            text: "View, create, and track daily workouts. A user should be able to log multiple exercises in a workout on a given day. Built with MongoDB, Node.js, HTML5, CSS.", 
            link: "https://github.com/MarcusTravis/Workout-Tracker" 
        },
        { 
            image: "../images/LogoBlck.png", 
            title: "Weather-Dashboard", 
            text: "View, create, and track daily workouts. A user should be able to log multiple exercises in a workout on a given day. Built with MongoDB, Node.js, HTML5, CSS.", 
            link: "https://github.com/MarcusTravis/Workout-Tracker" 
        }
    ]

    const renderCard = (card, index) => {
        return (
            <div className="col-md-3 d-inline-block offset-1">
                <div className="card cardWidth cardMarginTop bg-dark" key={index}>
                    <img src={card.image} className="card-img-top bg-img-jawa" alt=""></img>
                    <div className="card-body text-center">
                        <div className="card-title text-red h5">{card.title}</div>
                        <div className="card-text text-red">{card.text}</div>
                        <a href={card.link} className="btn btn-black mt-3">GitHub Repo</a>
                    </div>
                </div>
            </div>
        )
    }

    return <div>
        {cardInfo.map(renderCard)}
    </div>
} 
