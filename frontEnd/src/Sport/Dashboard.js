import React from "react";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { AiOutlineSearch  } from 'react-icons/ai';
import FormCheck from "react-bootstrap/FormCheck";
import NavBarAdd from "./NavBarAdd";

const Dashboard = () => {
    return(
        <div>
        <NavBarAdd />
        <Container>
        <h3 className="mt-3">Dashboard</h3>
        <InputGroup className="m-auto w-25 mt-3">
            <InputGroup.Text><AiOutlineSearch/></InputGroup.Text>
            <Form.Control placeholder="Search" />
        </InputGroup>
        <Table responsive bordered className="mt-3">
            <thead>
                <tr>
                <th>Name</th>
                <th>Booked</th>
                <th>E-mail</th>
                <th>Date booked</th>
                <th>Status</th>
                <th>Price</th>
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
export default Dashboard;