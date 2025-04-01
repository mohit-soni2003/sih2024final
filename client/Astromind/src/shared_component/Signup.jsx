import { React, useState, useEffect } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';


// import signupimage from "../img/signup.png"
import "./signup.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Signup() {
//   const navigate = useNavigate();
  // --------HANDLING USESTATE VARIABLES AND FUNCTION----------

  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [mobilenumber, setmobilenumber] = useState()
  const [password, setpassword] = useState()
  const [checkstate, setcheckstate] = useState(false);

  const handlenamechange = (event) => {
    console.log(event.target);
    setname(event.target.value);
  }
  const handleemailchange = (event) => {
    console.log(event.target);
    setemail(event.target.value);
  }
  const handlemobilenumberchange = (event) => {
    console.log(event.target);
    setmobilenumber(event.target.value);
  }
  const handlepasswordchange = (event) => {
    console.log(event.target);
    setpassword(event.target.value);
  }
  const handlecheckstate = (event) => {
    console.log(event.target.checked);
    setcheckstate(event.target.checked);
  }
  // -------------------------HANDLING POST DATA----------------------------

//     const postdata =(event)=>{
//       event.preventDefault();
//         if(!name || !email || !password || !password ){
//             notifyE("Please Enter all Fields")
//             return console.log("Please Enter all Fields");
//         }
//         if(checkstate==false){
//             notifyE("Please accept terms and condition")
//             return console.log("Please accept terms and condition");
//         }
//         else{
//             console.log("Registration Scuccessful")
//             notifyS(name + "successfuly Registered")
//             navigate("/signin")
//         }
//     }
//   const notifyS = (msg) => toast.success(msg)
//   const notifyE = (msg) => toast.error(msg)
  return (
    <>
      <div className="signup-container">
        {/* -----------------------item1------------------------- */}
        <div className="signup-item1">
          <div className="signup-l1">The Next Generation</div>
          <div className="signup-l2">Of Any Space Innovation</div>
          <div className="signup-potrait"><img src="/image.png" alt="" /></div>
        </div>
        {/* -----------------------item2------------------------- */}
        <div className="signup-item2">
          <div style={{ fontSize: "2.2rem", fontWeight: "bold" }}>Create an Account</div>
          <div style={{ fontSize: "1rem", fontWeight: "400", margin: "2%" }}>Create account today and start using ClinicHub</div>
          <Form>

            {/* ----- --------name------ ------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "600" }}>Name</Form.Label>
              <Form.Control style={{ width: "300px" }} type='text' onChange={handlenamechange} placeholder="Enter email" />
            </Form.Group>
            {/* ----- --------Email------ ------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "600" }}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={handleemailchange} />
            </Form.Group>
            {/* ----- --------Mobile Number------ ------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "600" }}>Mobile Number</Form.Label>
              <Form.Control type="phone" placeholder="Enter email" onChange={handlemobilenumberchange} />
            </Form.Group>

            {/* ----- --------Password------ ------ */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ fontWeight: "600" }}  >Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handlepasswordchange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" onChange={handlecheckstate} />
              {/* ----- --------Check Button------ ------ */}
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}