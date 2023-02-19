import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
        <div>
            <div className="title">
                <h2>Education</h2>
            </div>

            <div className="container">
                <h3>Diplomas:</h3>
                
                <p>
                    <ul>
                        <li>Highschool Diploma - 2017</li>
                        <li>Fullstack Web Developer Diploma - 2023</li>
                    </ul>
                </p>

                <h3>Certificates:</h3>

                <p>
                    <ul>
                        <li>Class 5 Drivers License - 2015</li>
                        <li>Sell Safe - 2020 to 2025</li>
                    </ul>
                </p>

            </div>
        </div>

    );
  }
}

export default Education