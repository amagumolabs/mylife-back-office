import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData';

import axios from 'axios';

function UserRow(props) {
  const user = props.user
  const userLink = `#/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
        <th scope="row"><a href={'#'}>{user.id}</a></th>
        <td><a href={'#'}>{user.profile.name}</a></td>
        <td>{user.email}</td>
        <td>{user.profile.gender}</td>
        <td>{user.profile.birthday}</td>
        <td>{user.profile.phone}</td>
        <td>{user.profile.nationality}</td>
        <td>{user.created_at.toString().split(" ").slice(0, 1).join(" ")}</td>
        <td>{user.role.name}</td>
        <td><Badge href={'#'} color={getBadge(user.status)}>{user.status}</Badge></td>
    </tr>
  )
}


class Users extends Component {

  render() {

    
    // // Make a request for a user with a given ID
    // axios.get('http://mylifecompanyapp.amagumolabs.io/api/public/api/v1')
    //   .then(function (response) {
    //     // handle success
    //     console.log("Dinh Van");
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });

    const listUser = {
      "users": [
          {
              "id": 12,
              "email": "ltdai91@gmail.com",
              "needChangePassword": 1,
              "status": "Active",
              "roleId": 1,
              "created_at": "2018-07-13 10:16:55",
              "updated_at": "2018-07-13 10:16:55",
              "deleted_at": null,
              "role": {
                  "id": 1,
                  "name": "user",
                  "description": "Normal user",
                  "created_at": "2018-07-13 08:44:24",
                  "updated_at": "2018-07-13 08:44:24",
                  "deleted_at": null
              },
              "profile": {
                  "id": 12,
                  "memberCode": "KtoqqR6v75",
                  "userId": 12,
                  "name": "Danh Nguyeeen",
                  "avatar": "",
                  "gender": "male",
                  "birthday": "1991-01-05",
                  "phone": "+84947021591",
                  "nationality": "vietnam",
                  "created_at": "2018-07-13 10:16:55",
                  "updated_at": "2018-07-13 10:16:55",
                  "deleted_at": null
              }
          },
          {
              "id": 13,
              "email": "ltdai.91@gmail.com",
              "needChangePassword": 1,
              "status": "Active",
              "roleId": 1,
              "created_at": "2018-07-16 09:25:09",
              "updated_at": "2018-07-16 09:25:09",
              "deleted_at": null,
              "role": {
                  "id": 1,
                  "name": "user",
                  "description": "Normal user",
                  "created_at": "2018-07-13 08:44:24",
                  "updated_at": "2018-07-13 08:44:24",
                  "deleted_at": null
              },
              "profile": {
                  "id": 13,
                  "memberCode": "P0SLyeZhpK",
                  "userId": 13,
                  "name": "Dai Luog",
                  "avatar": "",
                  "gender": null,
                  "birthday": "1991-01-01",
                  "phone": "ltdai.91@gmail.com",
                  "nationality": "vietnam",
                  "created_at": "2018-07-16 09:25:09",
                  "updated_at": "2018-07-16 09:25:09",
                  "deleted_at": null
              }
          },
          {
              "id": 14,
              "email": "ltdai91@gmail.com.vn",
              "needChangePassword": 1,
              "status": "Active",
              "roleId": 1,
              "created_at": "2018-07-16 10:14:53",
              "updated_at": "2018-07-16 10:14:53",
              "deleted_at": null,
              "role": {
                  "id": 1,
                  "name": "user",
                  "description": "Normal user",
                  "created_at": "2018-07-13 08:44:24",
                  "updated_at": "2018-07-13 08:44:24",
                  "deleted_at": null
              },
              "profile": {
                  "id": 14,
                  "memberCode": "3uawdAXiFQ",
                  "userId": 14,
                  "name": "dai",
                  "avatar": "",
                  "gender": null,
                  "birthday": "2018-07-16",
                  "phone": "ltdai91@gmail.com.vn",
                  "nationality": "vietnam",
                  "created_at": "2018-07-16 10:14:53",
                  "updated_at": "2018-07-16 10:14:53",
                  "deleted_at": null
              }
          }
      ]
    }

    const userList = usersData.filter((user) => user.id < 10)

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
                    {listUser.users.map((user, index) =>
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
