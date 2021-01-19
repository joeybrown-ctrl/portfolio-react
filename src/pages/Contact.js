import React from "react";
import pdf from "../ResumeUS.pdf";

function Contact() {

    const styles = {

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
                <div className="col text-center text-white">
                    <hr/>

                    <div><a href={pdf} className="btn-floating btn-lg" role="button" target="_blank" rel="noreferrer">
                            <h4 className="text-white">View Resume</h4>
                        </a>
                    </div>
                    <hr/>

                    <div><a href="https://www.linkedin.com/in/george-joseph-brown/"
                            className="btn-floating btn-lg btn-li text-white" role="button" target="_blank" rel="noreferrer"><i
                                className="fab fa-linkedin-in"></i> George Joseph Brown</a>
                    </div>
                    <hr/>

                    <div><a href="https://github.com/joeybrown-ctrl" className="btn-floating btn-lg btn-git text-white"
                            role="button" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> joeybrown-ctrl</a>
                    </div>
                    <hr/>

                    <div><a href="mailto:gjoey.brown@gmail.com" className="btn-floating btn-lg btn-email text-white"
                            role="button" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i> gjoey.brown@gmail.com</a>
                    </div>
                    <hr/>

                    <div><a href="tel: (206) 687-479" className="btn-floating btn-lg btn-email text-white" role="button"
                            target="_blank" rel="noreferrer"><i className="fa fa-phone" aria-hidden="true"></i> (206) 687-0479</a>
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

export default Contact;