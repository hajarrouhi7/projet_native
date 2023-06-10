import React,{useState,useEffect} from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import NavBarAdd from "./NavBarAdd";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { AiOutlineSearch  } from 'react-icons/ai';
import FormCheck from "react-bootstrap/FormCheck";

const ListBook = () => {
    const [book,setBook] =useState([])
    useEffect(() => {
        fetchBook();
       
    }, []);
    const fetchBook =async() =>{ // data from database
        await axios.get('http://127.0.0.1:8000/api/Reservation')
        .then(({data})=>{
            setBook(data) 
        })
    }
    const deleteBooked = async(id) =>{
        await axios.delete('http://127.0.0.1:8000/api/Reservation/'+ id)
        .then(({data})=>{
            alert(data.message)
            fetchBook();
        }).catch(({response: {data}}) => {
            alert(data.message)
        })
    }
    return(
        <div>
            <NavBarAdd/>
            <Container>
            <h3 className="mt-3">List Booked</h3>
            <InputGroup className="m-auto w-25 mt-3">
                <InputGroup.Text><AiOutlineSearch/></InputGroup.Text>
                <Form.Control placeholder="Search" />
            </InputGroup>
            <Table responsive bordered className="mt-3">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Number</th>
                    <th>Identifiant de stade</th>
                    <th>Date book</th>
                    <th>Time</th>
                    <th>Duration</th>
                    <th>Total price DH/30min</th>
                    <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {book.length > 0 && (
                    book.map((row) =>(
                    <tr>
                    <td>{row.LastName} {row.FirstName}</td>
                    <td>{row.Email}</td>
                    <td>{row.Number}</td>
                    <td>{row.infoTerrain_id}</td>
                    <td>{row.DateBook}</td>
                    <td>{row.BookTime}</td>
                    <td>{row.Duration}</td>
                    <td>{row.Price}</td>
                    <td>
                    <Button className="bg-danger" onClick={() => deleteBooked(row.id)}>Delete</Button>    
                    </td>
                    </tr>
                    ))
                    )}
                </tbody>
            </Table>
            </Container>
        </div>
    );
}
export default ListBook;