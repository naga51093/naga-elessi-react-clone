import React from "react";
import { CSSTransition } from "react-transition-group";

class TestPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fade: true,
    };
  }

  render() {
    const { fade } = this.state;
    return (
      <div>
        <CSSTransition in={fade} timeout={10000} classNames={"toggle-heading"}>
          <h1 onClick={() => this.setState({ fade: !fade })}>Toggle Me</h1>
        </CSSTransition>
      </div>
    );
  }
}

export default TestPage;
