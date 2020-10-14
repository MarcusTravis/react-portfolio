import React from 'react'
import Tilt from 'react-parallax-tilt'
import weatherDash from '../../images/weatherDash.PNG'
import EmployeeDirectory from '../../images/EmployeeDirectory.PNG'
import EmployeeTracker from '../../images/Employee-Tracker.PNG'
import BudgetTracker from '../../images/BudgetTracker.PNG'
import Template from '../../images/Template.PNG'
import Fitness from '../../images/Fitness.PNG'
import gitIcon from '../../images/github-icon.png'
import "./styles.css";

export default function Card() {

    const cardInfo = [
        {
            image: EmployeeDirectory,
            title: "React-Employee-Directory",
            text: "A web page where users can view their entire employee directory at once, so they have quick access to their employee information.",
            repo: "https://github.com/MarcusTravis/react-employee-directory",
            deploy: "https://marcustravis.github.io/react-employee-directory/"
        },
        {
            image: EmployeeTracker,
            title: "Employee-Tracker",
            text: "Employee Tracker to architect and build a solution for managing your company's employees using node, inquirer, and MySQL.",
            repo: "https://github.com/MarcusTravis/Employee-Tracker",
            deploy: "https://github.com/MarcusTravis/Employee-Tracker/blob/master/public/images/employee-tracker-gif.gif"
        },
        {
            image: BudgetTracker,
            title: "Online-Offline-Budget-Tracker",
            text: "Made w/Node.js, MongoDB, Mongoose, and Express. Users can add expenses and deposits to their budget with or without internet.",
            repo: "https://github.com/MarcusTravis/Online-Offline-Budget-Tracker",
            deploy: "https://desolate-scrubland-50344.herokuapp.com/"
        },
        {
            image: Template,
            title: "Employee-Summary-CLI",
            text: "This is a Node CLI which takes in information about employees, and generates an HTML webpage that displays summaries for each person.",
            repo: "https://github.com/MarcusTravis/Template-Engine-Employee-Summary",
            deploy: "https://github.com/MarcusTravis/Employee-Summary-CLI/blob/master/Develop/images/TeamGIF.gif"
        },
        {
            image: Fitness,
            title: "Workout-Tracker",
            text: "Built w/MongoDB, Node.js, HTML5, and CSS. View, create, and track daily workouts. Users can log multiple exercises in a workout on a given day.",
            repo: "https://github.com/MarcusTravis/Workout-Tracker",
            deploy: "https://arcane-tor-74753.herokuapp.com/"
        },
        {
            image: weatherDash,
            title: "Weather-Dashboard",
            text: "This is Weather Dashboard where you can find a 5 day weather forecast, and other info based on the city you searched.",
            repo: "https://github.com/MarcusTravis/Weather-Dashboard",
            deploy: "https://marcustravis.github.io/Weather-Dashboard/"
        }
    ]

    const renderCard = (card, index) => {
        return (
            <div className="col-md-3 offset-1 d-inline-block pl-0 pr-0 ">
                <Tilt>
                    <div className="card cardWidth cardMarginTop bg-dark pb-2 pl-0 pr-0 text-center" key={index}>
                        <img src={card.image} className="card-img border border-rounded " alt=""></img>
                        <div className="card-body box d-flex flex-column ml-3">
                            <div className="card-title text-white h5 nosifer">{card.title}</div>
                            <div className="card-text text-white h5 rose">{card.text}</div>
                        </div>
                        <Tilt>
                            <div className="height-auto pl-1"><a href={card.repo} className="btn btn-black text-white rose"><img src={gitIcon} height="30px" className="mb-1"></img>GitHub Repo</a></div>
                            <div className="height-auto pl-9"><a href={card.deploy} className="btn btn-black text-white rose"><img src={gitIcon} height="30px" className="mb-1"></img>Deployed</a></div>
                        </Tilt>
                    </div>
                </Tilt>
            </div>
        )
    }

    return <>
        {cardInfo.map(renderCard)}
    </>
} 
