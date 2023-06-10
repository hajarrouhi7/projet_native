import React,{ useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import NavBarAdd from "./NavBarAdd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddView =() => {
    const navigate = useNavigate();

    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [surface, setSurface] = useState('');
    const [ville, setVille] = useState('');
    const [price, setPrice] = useState(0.00);

    const changeHandleImage1 = (e) => {
        setImg1(e.target.files[0]);
    }
    const changeHandleImage2 = (e) => {
        setImg2(e.target.files[0]);
    }
    const changeHandleImage3 = (e) => {
        setImg3(e.target.files[0]);
    }

    const createStade = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('img1',img1)
        formData.append('img2',img2)
        formData.append('img3',img3)
        formData.append('title',title)
        formData.append('description',description)
        formData.append('location',location)
        formData.append('type',type)
        formData.append('surface',surface)
        formData.append('ville',ville)
        formData.append('price',price)

        await axios.post('http://127.0.0.1:8000/api/InfoTerrain',formData)
        .then(({data})=>{
            console.log(data.message)
            navigate('/ListViewed')

        }).catch(({response}) => {
            if(response.status ===422){
            console.log(response.data.errors)
              
            }else{
                console.log(response.data.message)
            
            }
        })

    }

    return(
        <div>
            <NavBarAdd/>
            <Container>
                <h3 className="mt-3">Add View</h3>
                <Form onSubmit={createStade}>
                <Row className="mt-3 mb-3">
                    {/* <Col>
                        <Form.Label>Imgage</Form.Label>
                        <Form.Control type="file"/>
                    </Col> */}
                    <Col>
                        <Form.Label>Imgage1</Form.Label>
                        <Form.Control type="file" name="img1" onChange={changeHandleImage1}/>
                    </Col>
                    <Col>
                        <Form.Label>Imgage2</Form.Label>
                        <Form.Control type="file" name="img2" onChange={changeHandleImage2}/>
                    </Col>
                    <Col>
                        <Form.Label>Imgage3</Form.Label>
                        <Form.Control type="file" name="img3" onChange={changeHandleImage3}/>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title"/>
                    </Col>
                    <Col>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" name="location" value={location} onChange={(e)=>{setLocation(e.target.value)}} placeholder="Location"/>
                    </Col>
                    <Col>
                        <Form.Label>Surface</Form.Label>
                        <Form.Control type="text" name="surface" value={surface} onChange={(e)=>{setSurface(e.target.value)}} placeholder="Surface"/>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" name="type" value={type} onChange={(e)=>{setType(e.target.value)}} placeholder="Type"/>
                    </Col>
                    <Col>
                        <Form.Label>Ville</Form.Label>
                        <Form.Control type="text" name="ville" value={ville} onChange={(e)=>{setVille(e.target.value)}} placeholder="ville"/>
                    </Col>
                    <Col>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Price"/>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description" style={{ height: '100px' }}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="secondary" type="submit">Add</Button>
                    </Col>
                </Row>
                </Form>
            </Container>
        </div>
    );
}
export default AddView;