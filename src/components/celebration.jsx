import React, { Component } from "react";
import Button from "antd/lib/button";
import { Row, Col } from "antd";
import history from "../history";
import cake from "../images/cake.svg";
import { Typography } from "antd";
const { Title } = Typography;
class Celebration extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toEntry = this.toEntry.bind(this);
    this.toGallary = this.toGallary.bind(this);
  }
  toEntry(e) {
    history.push("/");
  }
  toGallary(e) {
    history.push("/gallary");
  }
  render() {
    return (
      <div style={{ textAlign: "center", userSelect: "none" }}>
        <Row style={{marginTop:'30px'}} type="flex" justify="space-around" align="middle">
          <Col  xs={20} sm={16} md={12} lg={8} xl={8}>
            <Title style={{ color: "#595959" }}>老姐生日快乐</Title>
          </Col>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
          <Col xs={20} sm={16} md={12} lg={8} xl={8}>
            <img src="/images/cake.svg" />
          </Col>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
          <Col xs={20} sm={16} md={12} lg={8} xl={8}>
            <Title level={2} style={{ color: "#595959", position: "relative" }}>
              1993.3.10 ~{" "}
              <span
                style={{
                  fontSize: "45px",
                  fontWeight: 1000,
                  position: "relative",
                  top: "4px"
                }}
              >
                &#8734;
              </span>{" "}
            </Title>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }} type="flex" justify="space-around" align="middle">
          <Col xs={20} sm={16} md={12} lg={8} xl={8}>
            <Title level={2} style={{ color: "#595959", position: "relative" }}>
              永远年轻{" "}
            </Title>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }} type="flex" justify="space-around" align="middle">
          <Col xs={20} sm={16} md={12} lg={8} xl={8}>
            <Title level={2} style={{ color: "#595959", position: "relative" }}>
              永远热泪盈眶{" "}
            </Title>
          </Col>
        </Row>

        <Button style={{ marginTop: "30px",marginBottom:'30px' }} type={'primary'} onClick={e => this.toGallary(e)}>To gallary</Button>
      </div>
    );
  }
}

export default Celebration;
