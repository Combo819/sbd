import React, { Component } from "react";
import Button from "antd/lib/button";
import logo from "../logo.svg";
import history from "../history";
import { Row, Col, Card, Progress } from "antd";

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touchStartTime: 0,
      duration: 0,
      cardVisible: true,
      timer: null
    };
    this.touch = this.touch.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
    
  }

  touch(e) {
    const startTime = Math.floor(Date.now());
    let duration = 0;
    this.setState({
      timer: setInterval(
        startTime => {
          duration = Math.floor(Date.now()) - startTime;

          this.setState({
            duration
          });
        },
        50,
        startTime
      ),
      timerout: setTimeout(() => {
        this.setState({
            duration: 0,
            cardVisible: true
        })
        history.push("/celebration");
        
      }, 3000)
    });
    setTimeout(
      timer => {
        clearInterval(timer);
      },
      2500,
      this.state.timer
    );

    this.setState({
      touchStartTime: startTime,
      cardVisible: false
    });
  }
  touchEnd(e) {
    clearInterval(this.state.timer);
    console.log(this.state.duration);
    if (this.state.duration < 2500) {
      clearTimeout(this.state.timerout);
    }

    this.setState({
      duration: this.state.duration<2500?0:2500,
      cardVisible: this.state.duration<2500?true:false
    });
  }

  render() {
    return (
      <div
        style={{
          border: "1px solid",
          height: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* <Button onClick={e => this.routerClick(e)}>To celebration</Button> */}

        <Row type="flex" justify="space-around" align="middle">
          <Col>
            <Card
              onTouchStart={e => this.touch(e)}
              onTouchEnd={e => this.touchEnd(e)}
              onMouseDown={e => this.touch(e)}
              onMouseUp={e=>this.touchEnd(e)}
              hoverable
              style={{
                width: 240,
                height: 300,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {this.state.cardVisible ? (
                <h1
                  style={{
                    color: "grey",
                    textAlign: "center",
                    border: "1px solid black",
                    userSelect: "none"
                  }}
                >
                  请长按此处
                </h1>
              ) : (
                <Progress
                  style={{ userSelect: "none" }}
                  type="circle"
                  percent={parseInt((100 * this.state.duration) / 2500)}
                />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Entry;
