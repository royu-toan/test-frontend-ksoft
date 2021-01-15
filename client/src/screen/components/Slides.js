// Import react
import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const SLIDES = [
  {
    title: "Today's workout plan",
    text: "We're gonna do 3 fundamental exercises."
  },
  {
    title: "First, 10 push-ups",
    text: "Do 10 reps. Remember about full range of motion. Don't rush."
  },
  {
    title: "Next, 20 squats",
    text: "Squats are important. Remember to keep your back straight."
  },
  {
    title: "Finally, 15 sit-ups",
    text: "Slightly bend your knees. Remember about full range of motion."
  },
  {
    title: "Great job!",
    text: "You made it, have a nice day and see you next time!"
  }
];

const Slide = (props) => {
  return (
    <Card className="w-100">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const Control = (props) => {
  const controls = [
    {
      variant: "primary",
      text: "Previous",
      action: "previous"
    },
    {
      variant: "primary",
      text: "Next",
      action: "next"
    },
    {
      variant: "danger",
      text: "Restart",
      action: "restart"
    }
  ];

  return (
    <React.Fragment>
      {controls.map((item) => (
        <React.Fragment key={item.text}>
          <Button
            variant={item.variant}
            disabled={props.disable === item.action ? true : ""}
            onClick={(e) => {
              props.changeSlide(e, item.action);
            }}
          >
            {item.text}
          </Button>{" "}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

class Slides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: {
        title: "",
        text: ""
      },
      length: 0,
      current: 0,
      disable: ""
    };
  }

  componentDidMount() {
    this.setState({
      slide: this.setSlide(this.state.current),
      length: SLIDES.length,
      disable: this.setDisable(this.state.current)
    });
  }

  setSlide = (slide) => {
    return SLIDES.filter((item, index) => index === slide)[0];
  };

  setDisable = (current) => {
    if (current === 0) {
      return "previous";
    } else if (current === this.state.length - 1) {
      return "next";
    } else {
      return "";
    }
  };

  handleChangeSlide = (e, action) => {
    e.preventDefault();

    switch (action) {
      case "previous":
        if (this.state.current > 0) {
          this.setState((prevState) => ({
            slide: this.setSlide(prevState.current - 1),
            current: prevState.current - 1,
            disable: this.setDisable(prevState.current - 1)
          }));
        }
        break;

      case "next":
        if (this.state.current < this.state.length - 1) {
          this.setState((prevState) => ({
            slide: this.setSlide(prevState.current + 1),
            current: prevState.current + 1,
            disable: this.setDisable(prevState.current + 1)
          }));
        }
        break;

      case "restart":
        this.setState({
          slide: this.setSlide(0),
          current: 0,
          disable: this.setDisable(0)
        });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div className="App-Slides py-4">
        <Row>
          <Col>
            <Slide
              title={this.state.slide.title}
              text={this.state.slide.text}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Control
              changeSlide={this.handleChangeSlide}
              disable={this.state.disable}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Slides;
