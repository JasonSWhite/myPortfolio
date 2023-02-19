import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
        <div>
            <div className="title">
                <h2>Skills</h2>
            </div>
            <div className="container">
                <h3>Development & Computer Skills:</h3>
                <p>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>C#</li>
                        <li>SQL Server</li>
                        <li>Database Management</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>JSX</li>
                    </ul>
                </p>

                <h3>General Skills:</h3>
                <p>
                    <ul>
                        <li>Speaking, Reading & Writing in English</li>
                        <li>Cash Handling</li>
                        <li>Punctuality</li>
                        <li>Organization</li>
                        <li>Pallet Jack Knowledge</li>
                        <li>Retail Sales</li>
                    </ul>
                </p>
            </div>
        </div>

    );
  }
}

export default Skills