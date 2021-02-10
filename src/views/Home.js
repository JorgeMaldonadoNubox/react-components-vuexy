import React, { Component } from 'react';

import logo from '../logo.svg';
import { 
    Row,
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput,
    Button } from "reactstrap"


class Home extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Componentes de la plantilla vuexy</h2>
            </div>
        </div>
        <Row>
            <Col lg="6" md="12">
                <Card>
                    <CardHeader>
                        <CardTitle>Basic Checkboxes</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <CustomInput
                                inline
                                type="checkbox"
                                id="exampleCustomCheckbox"
                                label="Active"
                                defaultChecked
                            />  
                    </Form>
                    </CardBody>
                </Card>
                </Col> 
                <Col>
                <Card>
                    <CardHeader>
                        <CardTitle>Basic Input Text</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Form> 
                            <FormGroup>
                                <Label for="basicInput">Basic Input</Label>
                                <Input type="email" id="basicInput" placeholder="Enter Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="InputHelp">Input text with help</Label>{" "}
                                <small className="text-muted">
                                    eg. <i>someone@example.com</i>
                                </small>
                                <Input type="email" id="InputHelp" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row> 
        <Row>
            <Col  lg="6" md="12">
                <Card>
                    <CardHeader>
                        <CardTitle>Basic Buttons</CardTitle>
                    </CardHeader>
                    <CardBody> 
                        <Button.Ripple color="primary">Primary</Button.Ripple>  
                </CardBody> 
                </Card> 
            </Col>
        </Row>
        </React.Fragment>
    );
  }
}

export default Home;
