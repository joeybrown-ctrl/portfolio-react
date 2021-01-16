import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {

    const styles = {
        h2: {
            paddingBottom: "20px",
            paddingTop: "20px",
        },

        card: {
            maxWidth: "20rem",
        },

        container: {
            background: "linear-gradient(rgba(0, 0, 0, 0.5),  rgba(0,0,0,0.9))",
            // marginTop: "50px",
            marginBottom: "150px",
            // paddingTop: "50px",
            paddingBottom: "50px"
        }
    }


    return(
        <>
        <div className="container" style={styles.container}>
            <div className="row justify-content-center">
                <h2 className="text-white" style={styles.h2}>Portfolio
                </h2>
                <br/>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="card mx-auto mb-3" style={styles.card}>
                        <img className="card-img-top" src={process.env.PUBLIC_URL + "/assets/beercrawlr-sm.png"} alt="Beercrawlr project"/>
                        <hr/>
                        <h5 className="card-title text-center">BeerCrawlr</h5>
                        <div className="card-body text-center">
                            <p className="card-text">A brewery and restaurant search app that I created with a team of four.
                                Utilizes JavaScript, jQuery, AJAX, and APIs. Front-end built using HTML5 and Bulma. </p>
                            <Link to="https://joeybrown-ctrl.github.io/Beercrawlr/" className="btn btn-success"
                                target="_blank">View Project</Link>
                            <hr/>
                            <Link to="https://github.com/joeybrown-ctrl/Beercrawlr" className="btn btn-success"
                                target="_blank">View Repository</Link>
                        </div>

                    </div>
                </div>

                <div className="col-lg-4">

                    <div className="card mx-auto mb-3" style={styles.card} >
                        <img className="card-img-top" src={process.env.PUBLIC_URL + "/assets/odyssey.png"} alt="Odyssey's landing page"/>
                        <hr/>
                        <h5 className="card-title text-center">Odyssey</h5>
                        <div className="card-body text-center">
                            <p className="card-text">A scrapbooking travel app that allows the user to create
                                country-specific travelogues filled with pictures and notes. The app utilizes the MVC
                                design pattern, and is built with Node.js, Handlebars.js, Sequelize, Cloudinary,
                                SendGrid and RESTCountries. Deployed to Heroku with a jawsDB database. </p>
                            <Link to="https://team-zeus.herokuapp.com/" className="btn btn-success" target="_blank">View
                                Project</Link>
                            <hr/>
                            <Link to="https://github.com/joeybrown-ctrl/Odyssey" className="btn btn-success"
                                target="_blank">View Repository</Link>
                        </div>

                    </div>
                </div>

                <div className="col-lg-4">

                    <div className="card mx-auto mb-3" style={styles.card}>
                        <img className="card-img-top" src={process.env.PUBLIC_URL + "/assets/burger-logger.png"} alt="burger-logger app"/>
                        <hr/>
                        <h5 className="card-title text-center">Burger Logger</h5>
                        <div className="card-body text-center">
                            <p className="card-text">A burger logger app built with MySQL, Node, Express, Handlebars and a
                                homemade ORM. Created following the MVC design pattern, and deployed to Heroku. Node and
                                MySQL are used to query and route data through the app, and Handlebars generates the
                                HTML and Bootstrap front-end.</p>
                            <Link to="https://burger-logger-joeybrown-ctrl.herokuapp.com/" className="btn btn-success"
                                target="_blank">View Project</Link>
                            <hr/>
                            <Link to="https://github.com/joeybrown-ctrl/burger-logger" className="btn btn-success"
                                target="_blank">View Repository</Link>
                        </div>

                    </div>
                </div>

            </div>
            <hr/>
            <br/>
            <br/>

            <div className="row justify-content-center">
                <div className="col-lg-4">

                    <div className="card mx-auto mb-3" style={styles.card}>
                        <img className="card-img-top"
                            src="https://raw.githubusercontent.com/joeybrown-ctrl/joeybrown-ctrl.github.io/master/images/note-taker-pic.png"
                            alt="Note-Taker app"/>
                        <hr/>
                        <h5 className="card-title text-center">Note Taker</h5>
                        <div className="card-body text-center">
                            <p className="card-text">A note-taking app for users to keep persistent notes. Allows users to
                                create, save and delete notes, as well as viewing previously saved notes. Utilizes an
                                Express back-end and uses GET, POST and DELETE methods with HTML and API routes to work
                                with
                                data. Built using Express.js, Node.js, JavaScript, CSS and HTML. Deployed via Heroku.
                            </p>
                            <Link to="https://note-taker-joeybrown-ctrl.herokuapp.com/" className="btn btn-success"
                                target="_blank">View Project</Link>
                            <hr/>
                            <Link to="https://github.com/joeybrown-ctrl/note-taker" className="btn btn-success"
                                target="_blank">View Repository</Link>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4">
                    <div className="card mx-auto mb-3" style={styles.card}>
                        <img className="card-img-top"
                            src="https://raw.githubusercontent.com/joeybrown-ctrl/joeybrown-ctrl.github.io/master/images/employee-card-pic.png" alt="Team profile generator"/>
                        <hr/>
                        <h5 className="card-title text-center">Team Profile Generator</h5>
                        <div className="card-body text-center">
                            <p className="card-text">A Node CLI that generates an HTML page with employee profiles. Utilizes
                                NPM's Inquirer package to ask the user whether the employee they are inputting is a
                                manager,
                                engineer or intern -- and what the employee's name, ID, and email are -- with additional
                                role specific questions as well.</p>
                            <Link to="https://github.com/joeybrown-ctrl/team-profile-generator" className="btn btn-success"
                                target="_blank">View Project</Link>
                        </div>

                    </div>
                </div>

                <div className="col-lg-4">

                    <div className="card mx-auto mb-3" style={styles.card}>
                        <img className="card-img-top" src={process.env.PUBLIC_URL + "/assets/emp-tracker.png"} alt="Employee Tracker app"/>
                        <hr/>
                        <h5 className="card-title text-center">Employee Tracker</h5>
                        <div className="card-body text-center">
                            <p className="card-text">A command-line application that allows users with businesses to track
                                employees by viewing, adding, updating and deleting employees, their roles, and
                                departments. Built using Node.js with the Inquirer and MySQL NPM packages, Visual Studio
                                Code, and MySQL Workbench.</p>
                            <Link to="https://github.com/joeybrown-ctrl/employee-tracker" className="btn btn-success"
                                target="_blank">View Project</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <br/>
        <hr/>
        <br/>
        </>
    )
}

export default Portfolio;