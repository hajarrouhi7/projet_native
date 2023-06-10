import React,{useState,useEffect} from 'react';
import axios from "axios";
import "./Info.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import {useNavigate } from "react-router-dom";
const InfoView = () => {
    const route = useNavigate()
    // const [id, setId] = useState(null);
    // const [terrain,setTerrain] =useState([])
    // useEffect(() => {
    // if (id !== null) {
    //     fetch(`http://127.0.0.1:8000/api/InfoTerrain/${id}`)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error));
    // }
    // }, [id]);

    //const [id, setId] = useState(); // initialize the ID to 1
    const [terrain,setTerrain] =useState([])
    useEffect(() => {
        const ID = sessionStorage.getItem("ID")
        ID ? 
            fetch(`http://127.0.0.1:8000/api/InfoTerrain/${ID}`)
        .then(response => response.json())
        .then(data => setTerrain(data))
        .catch(error => console.error(error))
        
        : route("/View");
    

    },[]);
    // const [terrain,setTerrain] =useState([])
    // useEffect(() => {
    //     fetchTerrain();
       
    // }, [id]);
//     const fetchTerrain =async() =>{ // data from database
//         await axios.get(`http://127.0.0.1:8000/api/InfoView/${id}`)
//         .then(({data})=>{
//             setTerrain(data) 
//         })
//     }
    // const fetchTerrain =async() =>{ // data from database
    //     await axios.get(`http://127.0.0.1:8000/api/InfoTerrain/${id}`)
    //     .then(({data})=>{
    //         setTerrain(data.terrain) 
    //     })
    // }
    // const [terrain,setTerrain] =useState([])
    
    // const fetchTerrain = async () => {
    //     await axios.get(`http://127.0.0.1:8000/api/InfoView/${id}`)
    //       .then(({ data }) => {
    //         setTerrain(data) 
    //       })
    //   }
      
    //   useEffect(() => {
    //     fetchTerrain()
    //   }, [id])

    // useEffect(() => {
    //     fetchTerrain();
       
    // }, [id]);
    // const fetchTerrain =async() =>{ // data from database
    //     await axios.get(`/InfoView/${id}`)
    //     .then(({data})=>{
    //         setTerrain(data.terrain) 
    //     })
    // }

    if (!terrain) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg'>
             <NavBar/>
        <div className='d-flex'>
        {/* {terrain.length > 0 && (
        terrain.map((row,key) =>( */}
            <div className='container'>
            {/* <div key={key}> */}
            <div >
            <Carousel>
            <Carousel.Item>
            {/* <img className="d-block img-fluid img" src={(`http://127.0.0.1:8000/img1/${row.img1}`)} alt="First slide"/> */}
            <img className="d-block img-fluid img"  src={(`http://127.0.0.1:8000/img1/${terrain.img1}`)} alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
            {/* <img className="d-block img-fluid img" src={(`http://127.0.0.1:8000/img2/${row.img2}`)} alt="First slide"/> */}
            <img className="d-block img-fluid img" src={(`http://127.0.0.1:8000/img2/${terrain.img2}`)} alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
            {/* <img className="d-block img-fluid img" src={(`http://127.0.0.1:8000/img3/${row.img3}`)} alt="First slide"/> */}
            <img className="d-block img-fluid img" src={(`http://127.0.0.1:8000/img3/${terrain.img3}`)} alt="First slide"/>
            </Carousel.Item>
            </Carousel>
            </div>
            <div>
                {/* <h2>{row.title}</h2> */}
                <h2>{terrain.title}</h2>
            </div>
            <div>
                <Row>
                    <Col sm={8}>
                        <h5>Description</h5>
                        {/* <p>{row.description}</p> */}
                        <p>{terrain.description}</p>
                        <ul>
                            <li>Capacity: 45 000 places</li>
                            {/* <li>type: {row.type}</li> */}
                            <li>type: {terrain.type}</li>
                            {/* <li>surface: {row.surface}</li> */}
                            <li>surface: {terrain.surface}</li>
                            {/* <li>price: {row.price} Mad/30min</li> */}
                            <li>price: {terrain.price} Mad/30min</li>
                        </ul>
                    </Col>
                    <Col sm={4}>
                        <h5>Location</h5>
                        {/* <span style={{marginBottom:'10px'}}>{row.location}</span> */}
                        <span style={{marginBottom:'10px'}}>{terrain.location}</span>
                        <h5>Opening Hour</h5>
                        <Card style={{ width: '18rem',marginBottom:'10px' }}>
                        <Card.Header>Opening time</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item><Row><Col>Monday</Col><Col>10:30-23:30</Col></Row></ListGroup.Item>
                            <ListGroup.Item><Row><Col>Tuesday</Col><Col>10:30-23:30</Col></Row></ListGroup.Item>
                            <ListGroup.Item><Row><Col>Wednesday</Col><Col>10:30-23:30</Col></Row></ListGroup.Item>
                            <ListGroup.Item><Row><Col>Tuesday</Col><Col>10:30-23:30</Col></Row></ListGroup.Item>
                            <ListGroup.Item><Row><Col>Friday</Col><Col>10:30-23:30</Col></Row></ListGroup.Item>
                            <ListGroup.Item><Row><Col>Saturday</Col><Col>10:30-23:30</Col></Row></ListGroup.Item>
                            <ListGroup.Item><Row><Col>Sunday</Col><Col>10:30-23:30</Col></Row></ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Col>
                </Row>
                <Card body className='mb-2 card'><Row><Col sm={10} className="m-auto cardFooter">If you want to book this stade click on book</Col><Col sm={2}><Button href="./BookDetails" style={{width:'90px'}}>Book</Button></Col></Row></Card>
            </div>
            </div>
        {/* ))
        )} */}
        </div>
        <Footer/>
        </div>
    )
}

export default InfoView;