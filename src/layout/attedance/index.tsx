import * as React from 'react';
import { Row, Jumbotron } from 'react-bootstrap'
// nodejs library to set properties for components

// My components
import "../../assets/css/App.css"


const Attedance: React.FC<any> = () => {

    return (
        <div>
            <Row className="justify-content-center">
                <Jumbotron>
                    <h2>Attedance Page</h2>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
  </p>
                    <p>

                    </p>
                </Jumbotron>
            </Row>

        </div>
    );
};

export default Attedance;