import React from 'react'
import weatherDash from '../images/weatherDash.PNG'
import EmployeeDirectory from '../images/EmployeeDirectory.PNG'
import EmployeeTracker from '../images/Employee-Tracker.PNG'
import BudgetTracker from '../images/BudgetTracker.PNG'
import Template from '../images/Template.PNG'
import Fitness from '../images/Fitness.PNG'
import "../App.css";

export default function Card() {

    const cardInfo = [
        { 
            image: EmployeeDirectory, 
            title: "React-Employee-Directory", 
            text: "A web page where users can view their entire employee directory at once so that they have quick access to their employee information.", 
            link: "https://github.com/MarcusTravis/react-employee-directory" 
        },
        { 
            image: EmployeeTracker, 
            title: "Employee-Tracker", 
            text: "Employee Tracker to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.", 
            link: "https://github.com/MarcusTravis/Employee-Tracker" 
        },
        { 
            image: BudgetTracker, 
            title: "Online-Offline-Budget-Tracker", 
            text: "Made w/Node.js, MongoDB, Mongoose, and Express. Users can add expenses and deposits to their budget with or without internet.", 
            link: "https://github.com/MarcusTravis/Online-Offline-Budget-Tracker" 
        },
        { 
            image: Template, 
            title: "Template-Engine-Employee-Summary", 
            text: "This is an OOP-demo for the homework required in the OOP section of the code bootcamp from UofA", 
            link: "https://github.com/MarcusTravis/Template-Engine-Employee-Summary" 
        },
        { 
            image: Fitness, 
            title: "Workout-Tracker", 
            text: "Built w/MongoDB, Node.js, HTML5, and CSS. View, create, and track daily workouts. Users can log multiple exercises in a workout on a given day.", 
            link: "https://github.com/MarcusTravis/Workout-Tracker" 
        },
        { 
            image: weatherDash, 
            title: "Weather-Dashboard", 
            text: "A Weather Dashboard where you can find a 5 day weather forecast and other info based on the city you search for.", 
            link: "https://github.com/MarcusTravis/Workout-Tracker" 
        }
    ]

    const renderCard = (card, index) => {
        return (
            <div className="col-md-3 d-inline-block offset-1">
                <div className="card cardWidth cardMarginTop bg-dark" key={index}>
                    <img src={card.image} className="card-img border border-rounded " alt=""></img>
                    <div className="card-body text-center box d-flex flex-column">
                        <div className="card-title text-red h4">{card.title}</div>
                        <div className="card-text text-red h5">{card.text}</div>
                        <a href={card.link} className="btn btn-black mt-auto">GitHub Repo</a>
                    </div>
                </div>
            </div>
        )
    }

    return <>
        {cardInfo.map(renderCard)}
    </>
} 
