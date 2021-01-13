import React from "react";
import { Link } from "react-router-dom";

function Main() {

    const styles = {
        heroContents: {
            paddingTop: "250px",
            textAlign: "center",
            color: "white"
        }
    }

    return(
        <>
            <div style={styles.heroContents}>
                <div className="col text-center">
                    <h1 className="mx-auto text-white">George Joseph Brown</h1>
                    <hr/>
                    <p className="lead mx-auto">I am a Full-Stack Developer</p>
                    <Link to="/About"><button className="btn btn-success button">About Me</button></Link>
                    
                    <Link to="/Portfolio"><button className="btn btn-success button">
                            Portfolio
                        </button></Link>
                    <Link to="/Contact"><button className="btn btn-success button">
                            Contact
                        </button></Link>
                </div>
            </div>
        </>
    )
}

export default Main;