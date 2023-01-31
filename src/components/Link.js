import React from "react";

class Link extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            textStyle: {
                textDecoration: "none",
                color: "skyblue"
            }
        };
    }

    onHover = () => {
        this.setState({
            textStyle: {
                textDecoration: "underlined",
                color: "#3389FF"
            }
        })
    }

    onLeave = () => {
        this.setState({
            textStyle: {
                textDecoration: "none",
                color: "skyblue"
            }
        })
    }

    render() {
        return (
            <a
                style={{
                    textDecoration: this.state.textStyle.textDecoration,
                    color: this.state.textStyle.color
                }}
                href={this.props.link}
                onMouseEnter={this.onHover}
                onMouseLeave={this.onLeave}>
                {this.props.text}
            </a>
        )
    }
}

export default Link