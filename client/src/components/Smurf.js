import React from "react";
import Card from "react-bootstrap/Card";

class Smurf extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const { smurf } = this.props;

    return (
      <Card data-testid="smurf">
        <Card.Body>
          <Card.Title>
            '{smurf.nickname}' - {smurf.name}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {smurf.position}
          </Card.Subtitle>
          <Card.Body>{smurf.description}</Card.Body>
        </Card.Body>
      </Card>
    );
  }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
