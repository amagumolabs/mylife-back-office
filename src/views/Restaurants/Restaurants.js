import React, { Component } from 'react';
import { Badge, Card, CardBody, 
  CardHeader, Col, Row, Table, 
  Input, Label, FormGroup, Button, 
  Modal, ModalBody, ModalFooter, ModalHeader,
  Form, FormText } from 'reactstrap';
import ModalShop from './ModalShop';

import axios from 'axios';


function ShopRow(props) {
  const shop = props.shop
  const shopLink = `#/shops/${shop.id}`

  const getBadgeType = (type) => {
    return type === 'coffee' ? 'secondary' :
          type === 'sushi' ? 'warning' :
          type === 'premium' ? 'info' :
            'danger'
  }

  const styleCap = {
    textTransform: 'capitalize'
  };

  const styleButton = {
    padding: '0px 5px',
    background: 'primary'
  }

  return (
      <tr key={shop.id.toString()}>
          <th scope="row">{shop.id}</th>
          <td>{shop.name}</td>
          <td>{shop.phone}</td>
          <td>{shop.address}</td>
          <td>{shop.district}</td>
          <td>{shop.lat}</td>
          <td>{shop.lng}</td>
          <td style={styleCap} ><Badge color={getBadgeType(shop.type)}>{shop.type}</Badge></td>
          <td>
              <Button onClick={(e) => props.editShowModal(shop)} style={styleButton} block color="primary">Edit</Button>
          </td>
      </tr>
  )
}


class Restaurants extends Component {

  constructor(props) {
      super(props);

      this.state = {
          listShops: [],
          listCompanies: [],
          showModal: false,
          objModal: null
      };
  }

  componentDidMount() {
    // get all shops
    let urlShop = 'http://mylifecompanyapp.amagumolabs.io/api/public/api/v1/shop';

    axios.get(urlShop,
    { 'headers': { 'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjY0LjJcL2FwaVwvcHVibGljXC9hcGlcL3YxXC9hdXRoXC9sb2dpbiIsImlhdCI6MTUzMTc5OTY0MSwiZXhwIjoxNjg3MzE5NjQxLCJuYmYiOjE1MzE3OTk2NDEsImp0aSI6IlBLSHgyekxlbHRyb2ZaOUkiLCJzdWIiOjEyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.gk_DXYXhsuDMdTzTSGHbYmpH9dBrXF2jIYvLcGPkFps' } })
      .then((response) => {
          this.setState({ listShops: response.data.shops });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    
      // get all companies
      axios.get('http://mylifecompanyapp.amagumolabs.io/api/public/api/v1/companies',
      { 'headers': { 'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjY0LjJcL2FwaVwvcHVibGljXC9hcGlcL3YxXC9hdXRoXC9sb2dpbiIsImlhdCI6MTUzMTc5OTY0MSwiZXhwIjoxNjg3MzE5NjQxLCJuYmYiOjE1MzE3OTk2NDEsImp0aSI6IlBLSHgyekxlbHRyb2ZaOUkiLCJzdWIiOjEyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.gk_DXYXhsuDMdTzTSGHbYmpH9dBrXF2jIYvLcGPkFps' } })
        .then((response) => {
            this.setState({ listCompanies: response.data.companies });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
  }

  // function change companies
  onChangeCompanies = () => {
    let e = document.getElementById("select");
    let type = e.options[e.selectedIndex].value;
    let urlShop = 'http://mylifecompanyapp.amagumolabs.io/api/public/api/v1/shop';
    let token = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjY0LjJcL2FwaVwvcHVibGljXC9hcGlcL3YxXC9hdXRoXC9sb2dpbiIsImlhdCI6MTUzMTc5OTY0MSwiZXhwIjoxNjg3MzE5NjQxLCJuYmYiOjE1MzE3OTk2NDEsImp0aSI6IlBLSHgyekxlbHRyb2ZaOUkiLCJzdWIiOjEyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.gk_DXYXhsuDMdTzTSGHbYmpH9dBrXF2jIYvLcGPkFps';

    if (type === 'coffee') {
      axios.get(urlShop+'?type=coffee',
      { 'headers': { 'Authorization': token } })
        .then((response) => {
            this.setState({ listShops: response.data.shops });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    } else if (type === 'sushi') {
      axios.get(urlShop+'?type=sushi',
      { 'headers': { 'Authorization': token } })
        .then((response) => {
            this.setState({ listShops: response.data.shops });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    } else if (type === 'premium') {
      axios.get(urlShop+'?type=premium',
      { 'headers': { 'Authorization': token } })
        .then((response) => {
            this.setState({ listShops: response.data.shops });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    } else {
      axios.get(urlShop,
      { 'headers': { 'Authorization': token } })
        .then((response) => {
            this.setState({ listShops: response.data.shops });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
  }

  showModalEditShop = (dataModal) => {
    this.setState({
      showModal: true,
      objModal: dataModal
    });
  }

  closeModalEditShop = () => {
    this.setState({showModal: false});
  }

  render() {

    const styleCap = {
      textTransform: 'capitalize'
    };

    const styleSelect = {
      maxWidth: '60px', 
      paddingTop: '6px'
    };

    let Modal = null;
    if (this.state.objModal != null) {
      Modal = <ModalShop show_Modal={this.state.showModal} close_ModalEditShop={this.closeModalEditShop} obj_Modal={this.state.objModal} list_Companies={this.state.listCompanies} />;
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Restaurants
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col md="3" style={styleSelect} >
                    <Label htmlFor="select">Select</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <Input type="select" name="select" id="select" style={styleCap} onChange={this.onChangeCompanies} >
                      <option defaultValue="selected" value="all">All</option>
                      {this.state.listCompanies.map((companies, index) =>
                      <option key={index} value={companies.type}>{companies.type}</option>
                      )}
                    </Input>
                  </Col>
                </FormGroup>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">phone</th>
                      <th scope="col">address</th>
                      <th scope="col">district</th>
                      <th scope="col">lat</th>
                      <th scope="col">lng</th>
                      <th scope="col">type</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.listShops.map((shop, index) =>
                      <ShopRow key={index} shop={shop} editShowModal={this.showModalEditShop} oneObj={this.state.objModal} />)
                    }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {Modal}
        
      </div>
    )
  }
}

export default Restaurants;
