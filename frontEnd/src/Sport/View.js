import React,{useState,useEffect}  from "react";
import axios from "axios";
import { Link, Route} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "./NavBar";
import Footer from "./Footer";
import './View.css';
import InfoView from "./InfoView";
import {useNavigate } from "react-router-dom";



const View = () => {
    const [terrain, setTerrain] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const route = useNavigate()
  

    useEffect(() => {
      fetchTerrain();
    }, []);
  
    const fetchTerrain =  () => {
      
      try {
        const Infos = JSON.parse(sessionStorage.getItem("Infos"))
        Infos ? setTerrain(Infos) : route("/Search")
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch terrain data");
        setLoading(false);
      }
    };
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div style={{ backgroundColor: "#d0ffb7" }}>
        <div>
          <NavBar />
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ paddingTop: "10vh" }}
          >
            <Row className="container text-center">
              {terrain.map((row, key) => (
                <Col key={key} className="">
                  <Card
                    style={{ width: "15rem", backgroundColor: "white" }}
                    className="mb-5"
                  >
                    <Card.Img
                      variant="top"
                      src={`http://127.0.0.1:8000/img1/${row.img1}`}
                      style={{ height: "20vh" }}
                    />
                    <Card.Body>
                      <Card.Title>{row.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {row.location}
                      </Card.Subtitle>
                      <Card.Text>Price: {row.price} DH/30 min</Card.Text>
                      <Button
                        className="me-2 btn"
                        variant="dark"
                        href="./BookDetails"
                        style={{ width: "90px" }}
                      >
                        Book
                      </Button>
            
                        <Button
                        onClick={()=>{    sessionStorage.setItem("ID", row.id) ; route("/InfoView") }}
                          variant="dark"
                          className="btn"
                          style={{ width: "90px" }}
                        >
                          View
                        </Button>
             
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <Footer />
        </div>
      </div>
    );
  };
  
  export default View;