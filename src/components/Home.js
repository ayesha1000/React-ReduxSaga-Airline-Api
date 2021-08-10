import React from 'react';
import './../css/Home.css';

class Home extends React.Component{
    render(){
        return(
        <div style={{ marginTop: "30vh" }}>

            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>We are an airline service providing booking for your flights</p>
            </div>
        </div>
        )
    }
}
export default Home;