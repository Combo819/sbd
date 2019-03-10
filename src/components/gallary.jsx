import React, { Component } from "react";
import Button from "antd/lib/button";
import { Row, Col, Card } from "antd";
import history from "../history";
import cake from "../images/cake.svg";
import { Typography } from "antd";
const { Title } = Typography;
class Gallary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toLiftTime = this.toLiftTime.bind(this)
  }
  toLiftTime(e){
    console.log('to');
    
    history.push('/lifetime')
  }
  render() {
    return (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Title level={2} style={{ color: "#595959",marginTop:'35px'}}>March 3 2019</Title>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
          <Title  level={2} style={{ color: "#595959"}}>Harbour Square Park</Title>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
          <Title level={2} style={{ color: "#595959"}}>Toronto</Title>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
          <Col
            style={{ paddingTop: "30px" }}
            xs={20}
            sm={16}
            md={12}
            lg={6}
            xl={6}
          >
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img style={{width:'100%'}} src="/images/zxx-1.jpg" alt="" />
            </Card>
          </Col>
          <Col
            style={{ paddingTop: "30px" }}
            xs={20}
            sm={16}
            md={12}
            lg={6}
            xl={6}
          >
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img style={{width:'100%'}} src="/images/zxx-2.jpg" alt="" />
            </Card>
          </Col>

          <Col
            style={{ paddingTop: "30px" }}
            xs={20}
            sm={16}
            md={12}
            lg={6}
            xl={6}
          >
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img style={{width:'100%'}} src="/images/zxx-3.jpg" alt="" />
            </Card>
          </Col>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
          <Col
            style={{ paddingTop: "30px" }}
            xs={20}
            sm={16}
            md={12}
            lg={6}
            xl={6}
          >
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img style={{width:'100%'}} src="/images/zxx-4.jpg" alt="" />
            </Card>
          </Col>
          <Col
            style={{ paddingTop: "30px" }}
            xs={20}
            sm={16}
            md={12}
            lg={6}
            xl={6}
          >
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img style={{width:'100%'}} src="/images/zxx-5.jpg" alt="" />
            </Card>
          </Col>

          <Col
            style={{ paddingTop: "30px" }}
            xs={20}
            sm={16}
            md={12}
            lg={6}
            xl={6}
          >
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img style={{width:'100%'}} src="/images/zxx-6.jpg" alt="" />
            </Card>
          </Col>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
          <Col
            style={{ paddingTop: "30px" }}
            xs={20}
            sm={16}
            md={12}
            lg={6}
            xl={6}
          >
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img style={{width:'100%'}} src="/images/zxx-7.jpg" alt="" />
            </Card>
          </Col>
          <Col
            style={{ paddingTop: "30px" }}
            xs={20}
            sm={16}
            md={12}
            lg={6}
            xl={6}
          >
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img style={{width:'100%'}} src="/images/zxx-8.jpg" alt="" />
            </Card>
          </Col>

          <Col
            style={{ paddingTop: "30px" }}
            xs={20}
            sm={16}
            md={12}
            lg={6}
            xl={6}
          >
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img style={{width:'100%'}} src="/images/zxx-9.jpg" alt="" />
            </Card>
          </Col>
        </Row>
        <Row style={{marginTop:'45px',marginBottom:'45px'}} type="flex" justify="space-around" align="middle">
          <Button onClick={e=>this.toLiftTime(e)} size={'large'} type="primary" shape="round">
              My life time
          </Button>
        </Row>
      </div>
    );
  }
}

export default Gallary;
