import React,{ useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import NavBarAdd from "./NavBarAdd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ModifyView =() => {
    const route = useNavigate();
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

    useEffect(() => {
        const ID = sessionStorage.getItem("ID")
        ID ?
            fetch(`http://127.0.0.1:8000/api/InfoTerrain/${ID}`)
            .then(({data})=>{
                const {img1,img2,img3,title,description,location,type,surface,ville,price} = data.message
                setImg1(img1)
                setImg2(img2)
                setImg3(img3)
                setTitle(title)
                setDescription(description)
                setLocation(location)
                setType(type)
                setSurface(surface)
                setVille(ville)
                setPrice(price)
    
            }).catch(({response: {data}}) => {
                    console.log(data.message)
            })
        :route("/ModifyView")
    }, []);
    
    const changeHandleImage1 = (e) => {
        setImg1(e.target.files[0]);
    }
    const changeHandleImage2 = (e) => {
        setImg2(e.target.files[0]);
    }
    const changeHandleImage3 = (e) => {
        setImg3(e.target.files[0]);
    }

    const modifyStade = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method','PATCH')
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
        const ID1 = sessionStorage.getItem("ID")
        ID1 ?
        fetch(`http://127.0.0.1:8000/api/InfoTerrain/${ID1}`,formData)
        .then(({data})=>{
            console.log(data.message)
            

        }).catch(({response}) => {
            if(response.status ===422){
            console.log(response.data.errors)
              
            }else{
                console.log(response.data.message)
            
            }
        })
        :route('/ListViewed')
    }

    return(
        <div>
            <NavBarAdd/>
            <Container>
                <h3 className="mt-3">Modify View</h3>
                <Form onSubmit={modifyStade}>
                <Row className="mt-3 mb-3">
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
                        <Button variant="secondary" type="submit">Modify</Button>
                    </Col>
                </Row>
                </Form>
            </Container>
        </div>
    );
}
export default ModifyView;