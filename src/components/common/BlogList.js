import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import BlogImg from "../../assets/images/blog-list.png";

const BlogList = () => {
    return(
        <>
        <Card className="blog-list">
            <Card.Img variant="top" src={BlogImg} />
            <Card.Body>
                <span className="blog-date">Mar 10, 2020</span>
                <Card.Link href="#">Full control and protection against fire</Card.Link>
                <Card.Text>
                    Nostra netus porttitor cursus Imperdiet proin. Vestibulum malesuada faucibus. Quam vivamus eu consectetuer.
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default BlogList;