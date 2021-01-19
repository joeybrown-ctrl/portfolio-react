import React from "react";

function Hero(props) {

    const styles = {
        heroImage: {
            background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${process.env.PUBLIC_URL +"/assets/danny-strutt-w0XQM9X6uQc-unsplash.jpg"})`,
            minHeight: "calc(100vh - 90px)",
            minWidth: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            paddingTop: "50px"
        }
    }

    return (
        <>
            <div className="hero text-center" style={styles.heroImage}>
                {props.children}
            </div>
        </>
    )
}

export default Hero;