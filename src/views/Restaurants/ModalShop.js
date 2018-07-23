import React, { Component } from 'react';
import { Badge, Card, CardBody, 
  CardHeader, Col, Row, Table, 
  Input, Label, FormGroup, Button, 
  Modal, ModalBody, ModalFooter, ModalHeader,
  Form, FormText } from 'reactstrap';

import axios from 'axios';


const ModalShop = (props) => {

    // props.list_Companies.map((companies, index) => {
    //     let selected = '';
    //     if(props.obj_Modal.type == companies.type){
    //         selected = 'selected';
    //         console.log(selected)     
    //     }
    // })

    return (
    
    <Modal isOpen={props.show_Modal} className={'modal-primary '}>
        <ModalHeader>Edit shop</ModalHeader>
        <ModalBody>
        <Form action="" method="post" className="form-horizontal">
        <FormGroup row>
            <Col md="3">
                <Label htmlFor="hf-email">Name</Label>
            </Col>
            <Col xs="12" md="9">
                <Input type="text" id="hf-name" name="hf-name" defaultValue={props.obj_Modal.name}  />
            </Col>
            </FormGroup>

            <FormGroup row>
            <Col md="3">
                <Label htmlFor="hf-email">Address</Label>
            </Col>
            <Col xs="12" md="9">
                <Input type="text" id="hf-address" name="hf-address" defaultValue={props.obj_Modal.address} />
            </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3">
                <Label htmlFor="hf-email">District</Label>
            </Col>
            <Col xs="12" md="9">
                <Input type="text" id="hf-district" name="hf-district" defaultValue={props.obj_Modal.district} />
            </Col>
            </FormGroup>

            <FormGroup row>
            <Col md="3">
                <Label htmlFor="hf-email">Phone</Label>
            </Col>
            <Col xs="12" md="9">
                <Input type="text" id="hf-phone" name="hf-phone" defaultValue={props.obj_Modal.phone} />
            </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3">
                <Label htmlFor="select">Type</Label>
            </Col>
            
            <Col xs="12" md="6">
                <Input type="select" name="select" id="select" >
                    {
                        props.list_Companies.map((companies, index) =>
                        <option key={index} selected={props.obj_Modal.type == companies.type} value={companies.type}>{companies.type}</option>
                        )
                    }
                </Input>
                </Col>
            </FormGroup>

            <FormGroup row>
            <Col md="3">
                <Label htmlFor="hf-email">Lat</Label>
            </Col>
            <Col xs="12" md="9">
                <Input type="text" id="hf-lat" name="hf-lat" defaultValue={props.obj_Modal.lat} />
            </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3">
                <Label htmlFor="hf-email">Lng</Label>
            </Col>
            <Col xs="12" md="9">
                <Input type="text" id="hf-lng" name="hf-lng" defaultValue={props.obj_Modal.lng} />
            </Col>
            </FormGroup>
            
        </Form>
        </ModalBody>
        <ModalFooter>
        <Button color="primary">Save</Button>{' '}
        <Button color="secondary" onClick={props.close_ModalEditShop} >Cancel</Button>
        </ModalFooter>
    </Modal>
    )
}

export default ModalShop;