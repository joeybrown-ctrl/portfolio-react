import React from "react";

function About() {

    const styles = {
        img: {
            marginBottom: "70px",
            paddingBottom: "20px",
        },
        h2: {
            paddingBottom: "10px",
            paddingTop: "20px",
        }
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="text-white" style={styles.h2}>About Me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <img src="images/aboutPic.jpg" className="img-fluid rounded-circle" style={styles.img}
                            alt="A photograph of Joey Brown smiling in his living room" />
                    </div>

                    <div className="col-sm-12 col-md-6 text-white">
                        <p>
                            Kia Ora! I am a Full-Stack developer certified through the University of Arizona/Trilogy's
                            Coding Bootcamp. I am passionate about the
                            continual learning process that programming requires. My technical skills include HTML 5, CSS 3,
                            Bootstrap 4, Bulma, Git, GitHub, JavaScript,
                            jQuery, JSON/BSON, AJAX, REST APIs, Node.js, Express and Express-Handlebars, MySQL, Sequelize,
                            MVC, MongoDB/Mongoose and React.
                        </p>
                        <p>
                            Before my entrance into the tech field, I worked as a bartender and bar manager specializing in
                            craft cocktails in Seattle, San Francisco and
                            Tucson. I originally hail from Wellington, New Zealand and I've also lived and worked in London
                            and New York. I consider myself to be a
                            well-seasoned traveler and international man of mystery. I am always striving to better
                            understand both people and systems. In my spare time, I can
                            be found cooking delicious meals, working with plants, and writing songs on my guitar.
                        </p>
                        <p>
                            I will be relocating to Auckland, New Zealand in late February 2021, and am available for remote
                            work at this time.
                        </p>
                    </div>
                </div>
        </div>

        <br/>
        <hr/>
        <br/>
    
        </>
    )
}

export default About;