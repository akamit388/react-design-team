import React,{useEffect, useState} from "react";
import userImg from '../../assets/images/user-icon.jpg';
import {Card} from "react-bootstrap";
import axios from "axios";

export default function TeamCard({member}){
    const [post, setPost] = useState([]);

    const baseUrl = 'https://reqres.in/api/users?page=2';

    // const TeamCardFun = ()=>{
    //     axios.get(baseUrl)
    //     .then((res)=>{
    //         setPost(res.data.articles)
    //     })
    // }

    // useEffect(()=>{
    //     axios.get(baseUrl)
    //     .then((res)=>{
    //         setPost(res.data.post)
    //     })
    // }, []);

    console.log(member);

    return(
        <>
            
            {member ? <Card className="team-card">
                <Card.Img src={member.avatar} alt="Card image" />
                <Card.Body>
                    <Card.Title>
                        {`${member.first_name} ${member.last_name}`}
                    </Card.Title>
                    <Card.Text>
                        {member.email}
                    </Card.Text>
                </Card.Body>
            </Card> : <Card className="team-card">
                <Card.Img src={userImg} alt="Card image" />
                <Card.Body>
                    <Card.Title>
                        Jon Smith
                    </Card.Title>
                    <Card.Text>
                        UX Designer
                    </Card.Text>
                </Card.Body>
            </Card>}
            
        </>
    )
}