import React from "react";
import { Link } from "react-router-dom";

function Contact() {

    const styles = {
        container: {
            paddingBottom: "50px"
        }
    }

    return(
        <>
        <div className="container" style={styles.container}>
            <div className="row justify-content-center">
                <div className="col text-center text-white">
                    <hr/>

                    <div><Link to="../../public/assets/Resume.pdf" className="btn-floating btn-lg" role="button" target="_blank">
                            <h4 className="text-white">View Resume</h4>
                        </Link>
                    </div>
                    <hr/>

                    <div><Link to="https://www.linkedin.com/in/george-joseph-brown/"
                            className="btn-floating btn-lg btn-li text-white" role="button" target="_blank"><i
                                className="fab fa-linkedin-in"></i> George Joseph Brown</Link>
                    </div>
                    <hr/>

                    <div><Link to="https://github.com/joeybrown-ctrl" className="btn-floating btn-lg btn-git text-white"
                            role="button" target="_blank"><i className="fab fa-github"></i> joeybrown-ctrl</Link>
                    </div>
                    <hr/>

                    <div><Link to="mailto:gjoey.brown@gmail.com" className="btn-floating btn-lg btn-email text-white"
                            role="button" target="_blank"><i className="fas fa-envelope"></i> gjoey.brown@gmail.com</Link>
                    </div>
                    <hr/>

                    <div><Link to="tel: (206) 687-479" className="btn-floating btn-lg btn-email text-white" role="button"
                            target="_blank"><i className="fa fa-phone" aria-hidden="true"></i> (206) 687-0479</Link>
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