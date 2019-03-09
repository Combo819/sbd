import React, { Component } from "react";
import Button from "antd/lib/button";
import {Row,Col} from 'antd'
import history from "../history";
import cake from '../images/cake.svg'
import { Typography } from 'antd';
const { Title } = Typography;
class Celebration extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.routerClick = this.routerClick.bind(this);
    }
    routerClick(e) {
        history.push("/");
      }
    render() { 
        return ( <div style={{textAlign:'center',userSelect: "none"}}>
            <Row type="flex" justify="space-around" align="middle">
                <Col xs={20} sm={16} md={12} lg={8} xl={8}>
                <Title style={{color:'#595959'}}>中国有句话叫！</Title>
                </Col>
            </Row>
            <Row type="flex" justify="space-around" align="middle">
            <Col xs={20} sm={16} md={12} lg={8} xl={8}>
            <img src={cake} ></img>
            </Col>
            </Row>
            <Row type="flex" justify="space-around" align="middle">
                <Col xs={20} sm={16} md={12} lg={8} xl={8}>
                <Title level={2} style={{color:'#595959',position:'relative'}}>1993.3.10 ~ <span style={{fontSize:'45px',fontWeight:1000,position:'relative',top:'4px'}}>&#8734;</span> </Title>
                </Col>
            </Row>
            <Row type="flex" justify="space-around" align="middle">
                <Col xs={20} sm={16} md={12} lg={8} xl={8}>
                <Title level={2} style={{color:'#595959',position:'relative'}}>永远年轻 </Title>
                </Col>
            </Row>
            <Row type="flex" justify="space-around" align="middle">
                <Col xs={20} sm={16} md={12} lg={8} xl={8}>
                <Title level={2} style={{color:'#595959',position:'relative'}}>永远热泪盈眶 </Title>
                </Col>
            </Row>
            <h1>Celebration</h1>
            
            <Button onClick={e => this.routerClick(e)}>To celebration</Button> 
        </div> );
    }
}
 
export default Celebration;