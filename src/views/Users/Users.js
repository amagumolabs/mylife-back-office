import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData';

import axios from 'axios';


function UserRow(props) {
  const user = props.user
  const userLink = `#/users/${user.id}`

  const getBadge = (status) => {
    return status === 'active' ? 'success' :
        status === 'ban' ? 'warning' :
          status === 'inactive' ? 'danger' :
            'primary'
  }

  const getBadgeRole = (role) => {
    return role === 'admin' ? 'primary' :
            'secondary'
  }

  const styleCap = {
    textTransform: 'capitalize'
  };

  return (
    <tr key={user.id.toString()}>
        <th scope="row"><a href={'#'}>{user.id}</a></th>
        <td style={styleCap} ><a href={'#'}>{user.profile.name}</a></td>
        <td>{user.email}</td>
        <td>{user.profile.gender}</td>
        <td>{user.profile.birthday}</td>
        <td>{user.profile.phone}</td>
        <td>{user.profile.nationality}</td>
        <td>{user.created_at.toString().split(" ").slice(0, 1).join(" ")}</td>
        <td style={styleCap} ><Badge href={'#'} color={getBadgeRole(user.role.name)}>{user.role.name}</Badge></td>
        <td style={styleCap} ><Badge href={'#'} color={getBadge(user.status)}>{user.status}</Badge></td>
    </tr>
  )
}

class Users extends Component {

  constructor(props) {
      super(props);

      this.state = {
          listUsers: []
      };
  }

  componentDidMount() {
    // get all user
    axios.get('http://mylifecompanyapp.amagumolabs.io/api/public/api/v1/admin/users',
    { 'headers': { 'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjY0LjJcL2FwaVwvcHVibGljXC9hcGlcL3YxXC9hdXRoXC9sb2dpbiIsImlhdCI6MTUzMTc5OTY0MSwiZXhwIjoxNjg3MzE5NjQxLCJuYmYiOjE1MzE3OTk2NDEsImp0aSI6IlBLSHgyekxlbHRyb2ZaOUkiLCJzdWIiOjEyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.gk_DXYXhsuDMdTzTSGHbYmpH9dBrXF2jIYvLcGPkFps' } })
      .then((response) => {
          this.setState({ listUsers: response.data.users });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">email</th>
                      <th scope="col">gender</th>
                      <th scope="col">birthday</th>
                      <th scope="col">phone</th>
                      <th scope="col">nationality</th>
                      <th scope="col">create date</th>
                      <th scope="col">role</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {this.state.listUsers.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;
