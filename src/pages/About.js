import React from "react";
import Navbar from "../components/Navbar";

function About() {

    const styles = {
        img: {
            marginBottom: "70px",
            paddingBottom: "20px",
        },

        h2: {
            paddingBottom: "10px",
            paddingTop: "20px",
        },

        container: {
            background: "linear-gradient(rgba(0, 0, 0, 0.5),  rgba(0,0,0,0.9))",
            // marginTop: "50px",
            // paddingTop: "50px",
            // marginBottom: "150px",
            height: "100vh"
        }
    }

    return (
        <>
            <Navbar />
            <div className="container" style={styles.container}>
                <div className="row">
                    <div className="col text-center">
                        <h2 className="text-white" style={styles.h2}>About Me</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <img src={process.env.PUBLIC_URL + "/assets/aboutPic.jpg"} className="img-fluid rounded-circle" style={styles.img}
                            alt="A photograph of Joey Brown smiling in his living room" />
                    </div>

                    <div className="col-sm-12 col-md-6 text-white">
                        <p>
                            Hey there! I am a certified full-stack web developer. I am a MERN developer, so I work mainly with JavaScript,
                            with a focus on React and Node. I am passionate about the balance between design and functionality,
                            and dedicated to the continual learning process that lays at the heart of development.
                        </p>
                        <hr />
                        <p>
                            My skills include JavaScript, React, Node, MySQL/NoSQL, ORMs, PWAs, Webpack, CSS, Bootstrap, and Gatsby.
                        </p>
                        <hr />
                        <p>
                            Before my entrance into the tech field, I worked as a bartender and bar manager specializing in
                            craft cocktails in Seattle, San Francisco and
                            Tucson. I originally hail from Wellington, New Zealand and I've also lived and worked in London
                            and New York. I consider myself to be a
                            well-seasoned traveler and international man of mystery. I am always striving to better
                            understand both people and systems. In my spare time, I can
                            be found cooking delicious meals, working with plants, and writing songs on my guitar.
                        </p>
                        <hr />
                        <p>
                            I hold dual citizenship in New Zealand and the United States, and have the right to work in both countries.
                            I am available for work at this time.
                        </p>

                        <div><a href="https://docs.google.com/document/d/1PhYnlpJAlFEQCuOxQ33QhitccT5LWES6N_FZJKTaWWA/edit?usp=sharing" className="btn-floating btn-lg" role="button" target="_blank" rel="noreferrer">
                            <h4 className="text-white" rel="noreferrer">View Resume</h4>
                        </a>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <hr />
            <br />

        </>
    )
}

export default About;