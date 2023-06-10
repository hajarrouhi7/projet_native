import React from "react";
import Container from "react-bootstrap/Container";
import NavBarAdd from "./NavBarAdd";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { AiOutlineSearch  } from 'react-icons/ai';
import FormCheck from "react-bootstrap/FormCheck";

const ListBook = () => {
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
                    <th>Date book</th>
                    <th>Time</th>
                    <th>Duration</th>
                    <th>Total price DH/30min</th>
                    <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <FormCheck label="Delete"/>    
                    </td>
                    </tr>
                </tbody>
            </Table>
            </Container>
        </div>
    );
}
export default ListBook;