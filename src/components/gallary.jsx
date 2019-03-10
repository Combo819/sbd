import React, { Component } from "react";
import Button from "antd/lib/button";
import { Row, Col, Card } from "antd";
import history from "../history";
import zxx1 from '../images/zxx-1.jpg'
import zxx2 from '../images/zxx-2.jpg'
import zxx3 from '../images/zxx-3.jpg'
import zxx4 from '../images/zxx-4.jpg'
import zxx5 from '../images/zxx-5.jpg'
import zxx6 from '../images/zxx-6.jpg'
import zxx7 from '../images/zxx-7.jpg'
import zxx8 from '../images/zxx-8.jpg'
import zxx9 from '../images/zxx-9.jpg'
import { Typography } from "antd";
const { Title } = Typography;
const baseUrl = process.env.PUBLIC_URL;
const imageUrl = 'src'
class Gallary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toLiftTime = this.toLiftTime.bind(this)
  }
  toLiftTime(e){
    console.log('to');
    
    history.push(baseUrl+'/lifetime')
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
              <img style={{width:'100%'}} src={zxx1} alt="" />
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
              <img style={{width:'100%'}} src={zxx2} alt="" />
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
              <img style={{width:'100%'}} src={zxx3} alt="" />
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
              <img style={{width:'100%'}} src={zxx4} alt="" />
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
              <img style={{width:'100%'}} src={zxx5} alt="" />
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
              <img style={{width:'100%'}} src={zxx6} alt="" />
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
              <img style={{width:'100%'}} src={zxx7} alt="" />
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
              <img style={{width:'100%'}} src={zxx8} alt="" />
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
              <img style={{width:'100%'}} src={zxx9} alt="" />
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
