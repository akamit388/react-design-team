import React, { useEffect,useState } from "react";
import {Container, Row, Col, Carousel} from "react-bootstrap";
import TeamCard from "./TeamCard";
import axios from "axios";

export default function Team(){
    const [team,setTeam] = useState([]);
    const [team2,setTeam2] = useState([]);

    useEffect(()=>{
        axios.get('https://reqres.in/api/users?page=1').then(res=>setTeam(res.data.data)).catch(err=>console.log(err));

        axios.get('https://reqres.in/api/users?page=2').then(res=>setTeam2(res.data.data)).catch(err=>console.log(err));
    },[]);
    return(
        <>
            <section className="team-sec">
                <Container>
                    <Row>
                        <Col xs={4}>
                            <h2 className="team-heading"><span>Our Team</span>Best Of Efficient Team Leaders</h2>
                            <p className="team-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et commodo mi, ut sodales purus. Etiam at mauris non lorem tempus cursus at quis metus. Donec venenatis in eros vitae accumsan. Nulla cursus lacinia lacinia. Donec accumsan, magna sed dictum rhoncus, eros odio dapibus enim.</p>
                            <p className="team-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et commodo mi, ut sodales purus. Etiam at mauris non lorem tempus cursus at quis metus. Donec venenatis in eros vitae accumsan. Nulla cursus lacinia lacinia.</p>
                        </Col>
                        <Col xs={8}>
                            <Carousel fade>
                                <Carousel.Item className="d-flex flex-wrap">
                                    {team.map((member,index)=>(
                                        <TeamCard member={member} key={index} />
                                    ))}
                                </Carousel.Item>
                                <Carousel.Item className="d-flex flex-wrap">
                                {team2.map((member,index)=>(
                                        <TeamCard member={member} key={index} />
                                    ))}
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}