import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import { Typography } from "antd";
import zxx12 from '../images/zxx-1-2.jpg'
const { Title } = Typography;

const imageUrl = 'src'

class LifeTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalTime: 0,
      birthTime: new Date("March 11, 1993 00:00:00"),
      days: 0,
      hours: 0,
      mins: 0,
      seconds: 0
    };
  }
  componentWillMount() {
    const currentTime = new Date();
    let totalTime = currentTime.getTime() - this.state.birthTime;

    this.setState({
      days: Math.floor(totalTime / 86400000),
      hours: Math.floor(totalTime / 3600000),
      mins: Math.floor(totalTime / 60000),
      seconds: Math.floor(totalTime / 1000)
    });
    setInterval(() => {
      let totalTime = new Date() - this.state.birthTime;
      this.setState({
        days: Math.floor(totalTime / 86400000),
        hours: Math.floor(totalTime / 3600000),
        mins: Math.floor(totalTime / 60000),
        seconds: Math.floor(totalTime / 1000)
      });
    }, 1000);
  }
  render() {
    return (
      <div style={{ userSelect: "none" }}>
        <Row
          style={{ marginTop: "30px" }}
          type="flex"
          justify="space-around"
          align="middle"
        >
          <Title level={3} style={{ color: "#595959" }}>
            你已在这个世界度过了：
          </Title>
        </Row>
        <Row
          style={{ marginTop: "30px" }}
          type="flex"
          justify="space-around"
          align="middle"
        >
          <Title level={3} style={{ color: "#595959" }}>
            {this.state.days} 天
          </Title>
        </Row>
        <Row
          style={{ marginTop: "30px" }}
          type="flex"
          justify="space-around"
          align="middle"
        >
          <Title level={3} style={{ color: "#595959" }}>
            {this.state.hours} 小时
          </Title>
        </Row>
        <Row
          style={{ marginTop: "30px" }}
          type="flex"
          justify="space-around"
          align="middle"
        >
          <Title level={3} style={{ color: "#595959" }}>
            {this.state.mins} 分
          </Title>
        </Row>
        <Row
          style={{ marginTop: "30px" }}
          type="flex"
          justify="space-around"
          align="middle"
        >
          <Title level={3} style={{ color: "#595959" }}>
            {this.state.seconds} 秒
          </Title>
        </Row>
        <Row
          style={{ marginTop: "30px" }}
          type="flex"
          justify="space-around"
          align="middle"
        >
          <Col
            type="flex"
            justify="space-around"
            align="middle"
            xs={20}
            sm={20}
            md={20}
            lg={20}
            xl={20}
          >
           <img style={{width:'100%'}}
           src={zxx12}
           >
           </img>
          </Col>
        </Row>
        <Row
          style={{ marginTop: "30px" }}
          type="flex"
          justify="space-around"
          align="middle"
        >
          <Title level={3} style={{ color: "#595959" }}>
           By Combo
          </Title>
        </Row>
        <Row
          style={{ marginTop: "30px" }}
          type="flex"
          justify="space-around"
          align="middle"
        >
          <Title level={2} style={{ color: "#595959" }}>
            完 ╰（￣▽￣）╭
          </Title>
        </Row>
      </div>
    );
  }
}

export default LifeTime;
