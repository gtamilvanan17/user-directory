import { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function AddUser(props) {   
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDOB] = useState(null);
    const [address, setAddress] = useState("");
    const [comments, setComments] = useState("");
    const addUserButtonPressed = () => {
        props.AddUser({
            firstname: firstname,
            lastname: lastname,
            email: email,
            dob: dob,
            address: address,
            comments: comments,
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setDOB(null);
        setAddress("");
        setComments("");
    };

    return (
        <div className='infoform'>
            <Form>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="firstname">
                                First Name
                            </Label>
                            <Input
                                id="firstname"
                                name="firstname"
                                placeholder="firstname"
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="lastname">
                                Last Name
                            </Label>
                            <Input
                                id="lastname"
                                name="lastname"
                                placeholder="lastname"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="dob">Date of Birth</Label>
                            <Datepicker
                                selected={dob}
                                onChange={date => { setDOB(date) }}
                                dateFormat='dd/MM/yyyy'
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="address">
                        Address
                    </Label>
                    <Input
                        id="address"
                        name="address"
                        placeholder="1234 Main St"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <label >Comments</label>
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}></textarea>

                </FormGroup>
                <Button outline color="primary" onClick={addUserButtonPressed}>
                    ADD USER
                </Button>
            </Form>
        </div>
    );

}


export default AddUser;