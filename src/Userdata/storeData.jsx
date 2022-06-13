import React, { useState } from "react";
import { Row, Col, Container} from "react-bootstrap";

function StoreData() {
    let [fname, setFname] = useState('');
    let [lname, setLname] = useState('');
    let [email, setEmail] = useState('');
    let [mobile, setMobile] = useState('');
    let [address, setAddress] = useState('');
    let [password, setPassword] = useState('');
    function submitData() {
        // alert("you are clicked")
        let userdata = {
            firstName : fname,
            lastName : lname,
            email : email,
            mobile_no : mobile,
            address : address,
            password : password
        };
        let reqData = {
            method : "POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userdata)
        }
        fetch('http://3.111.186.195:3000/register', reqData)
            .then(response => console.log(`Data Submitted ${response.status}`))
    }
    return (
        <>
            <Container flud="md" style={{backgroundColor:"black", color:"aqua"}}>
                <div><h1>Ragistration from</h1></div>
                <Row>
                    <Col>
                        <label>First Name</label>
                        <input className="form-control" placeholder="eg. kumar"
                            type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
                        <label>Last Name</label>
                        <input className="form-control" placeholder="eg. vishwas" type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
                        <label>Email</label>
                        <input className="form-control" placeholder="eg. kumarviswas@gmail.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Mobile_no</label>
                        <input className="form-control" placeholder="eg. **********" type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        <label>Address</label>
                        <textarea className="form-control" placeholder="eg. India" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                        <label>Password</label>
                        <input className="form-control" placeholder="eg. ********" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Col>
                </Row><br />
                <Row>
                    <Col>
                        <button onClick={submitData} className="btn btn-primary">Save</button>
                    </Col>
                    <Col>
                        <button className="btn btn-warning">Cancel</button>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default StoreData;