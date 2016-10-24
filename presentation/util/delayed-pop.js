import React, { Component, PropTypes } from "react";

class DelayedPop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  setVisible(show) {
    this.setState({ show });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setVisible(true);
    }, 3000);
  }

  render() {
    const style = {
      opacity: this.state.show ? 1 : 0,
      transition: "opacity 0.7s"
    };

    return <div style={style}>{this.props.children}</div>;
  }
}

DelayedPop.propTypes = {
  children: PropTypes.element
};

export default DelayedPop;
