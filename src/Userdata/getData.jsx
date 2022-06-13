import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function GetData() {
    let [data1, setData1] = useState([]);
    // let[rescode, setRescode] = useState('0');

    useEffect(() => {
    async function dataFetch(){
           let response = await fetch("http://3.111.186.195:3000/user")
           let Udata = await response.json()
           setData1(Udata.response);
        //    console.log(Udata.response)
    }dataFetch();
},[]);
    // console.log(data1)
function deleteUser(uid){
    // alert(uid)
    fetch(`http://3.111.186.195:3000/user/${uid}`, {method: "DELETE"})
     .then((res) =>{
        if(res.status === 200)
        {
          alert("user deleted")
        }
     })
}
function Display(){
    return(
        <Table>
        <thead>
            <tr>
                <th>#Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Mobile_no</th>
                <th>Address</th>
                <th>Action</th>
                <th>Update</th>
            </tr>
        </thead>
        <tbody>
            {data1.map((User,index) => {
                return (
                    <tr key= {index}>
                        <td>{User._id}</td>
                        <td>{User.firstName}</td>
                        <td>{User.lastName}</td>
                        <td>{User.email}</td>
                        <td>{User.mobile_no}</td>
                        <td>{User.address}</td>
                        <td><button onClick={()=>deleteUser(User._id)} className="btn btn-danger">Delete</button></td>
                        <td><button className="btn btn-success">Update</button></td>
                    </tr>
                )
            }
            )}
        </tbody>
    </Table>
    )
}
        return (
        <>
          <h4>Registration users are</h4>
          <Display  />
        </>
    )
}
export default GetData;