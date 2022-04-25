import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import team1 from "../assets/3747.png";
import team2 from "../assets/4715.png";
import team3 from "../assets/9315.png";
export const Team = () => {
    return (<div id="team" className="team">
    <Container>
        <Row>
            <Col className='head'>
                <h1>Team</h1>
            </Col>
        </Row>
        <Row>
            <Col className='box' sm={12} md={4} lg={4}>
                <div className="member">
                    <img src={team1} alt="" />
                    <h3>Andrew</h3>
                    <span>Co-Founder</span>
                </div>
            </Col>
            <Col className='box' sm={12} md={4} lg={4}>
            <div className="member">
                    <img src={team2} alt="" />
                    <h3>Franc</h3>
                    <span>Co-Founder</span>
                </div>
            </Col>
            <Col className='box' sm={12} md={4} lg={4}>
            <div className="member">
                    <img src={team3} alt="" />
                    <h3>Teena</h3>
                    <span>Co-Founder</span>
                </div>
            </Col>
        </Row>
    </Container>
</div>)
}