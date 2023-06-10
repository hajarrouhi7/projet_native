import React,{useState,useEffect} from "react";
import NavBarAdd from "./NavBarAdd";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import { AiOutlineSearch  } from 'react-icons/ai';
import Container from "react-bootstrap/Container";

const Users = () => {
    const [user,setUser] =useState([])
    useEffect(() => {
        fetchUser();
       
    }, []);
    const fetchUser =async() =>{ // data from database
        await axios.get('http://127.0.0.1:8000/api/client')
        .then(({data})=>{
            setUser(data) 
        })
    }
    const deleteUser = async(id) =>{
        await axios.delete('http://127.0.0.1:8000/api/client/'+ id)
        .then(({data})=>{
            alert(data.message)
            fetchUser();
        }).catch(({response: {data}}) => {
            alert(data.message)
        })
    }
    return(
        <div className="">
            <NavBarAdd/>
            <Container>
            <h3 className="mt-3">List Users</h3>
            <InputGroup className="m-auto w-25 mt-3">
                <InputGroup.Text><AiOutlineSearch/></InputGroup.Text>
                <Form.Control placeholder="Search" />
            </InputGroup>
            <Table responsive bordered className="mt-3">
                <thead>
                    <tr>
                    <th>Identifiant</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>E-mail</th>
                    <th>Number</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {user.length > 0 && (
                    user.map((row) =>(
                    <tr>
                    <td>{row.id}</td>
                    <td>{row.LastName}</td>
                    <td>{row.FirstName}</td>
                    <td>{row.EmailAddress}</td>
                    <td>{row.NumberPhone}</td>
                    <td>
                    <Button className="bg-danger" onClick={() => deleteUser(row.id)}>Delete</Button>    
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
export default Users;