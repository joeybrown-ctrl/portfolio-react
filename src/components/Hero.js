import React from "react";

function Hero() {

    const styles = {
        heroImage: {
            background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url("../../public/assets/danny-strutt-w0XQM9X6uQc-unsplash.jpg")',
            minHeight: "1000px",
            minWidth: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative"
        }
    }

    return (
        <>
            <div className="hero text-center" style={styles.heroImage}>
                
            </div>
        </>
    )
}

export default Hero;