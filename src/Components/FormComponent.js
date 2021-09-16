import React , { useState } from "react";
import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Form,
  FormLabel,
  Button,
  Alert,
} from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const FormComponent = ({addData}) => {

  const [text, setText] = useState("");
  const [phone, setPhone] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [radio, setRadio] = useState("");
  const [isValid, setIsValid] = useState(false);

  const submit = (e)=>{
      e.preventDefault();
      if(!text){
      document.getElementById('txt').innerHTML="Error: This is a mandatory field!"
      console.log("This field is requird!");
      setIsValid(false)
      } 
          
      else if(!name){
        document.getElementById('nm').innerHTML="Error: This is a mandatory field!"
         console.log("Error: This is a mandatory field");
      } else if(!email){
        document.getElementById('eml').innerHTML="Error: This is a mandatory field!"
         console.log("This field is requird!");
         setIsValid(false)
      } 
      
      else if(!radio){
        document.getElementById('rd').innerHTML="Error: Must Select an Option!"
         console.log("Error: This field is requird!");
         setIsValid(false)
      }

      else{
      addData(text, phone, name, email,radio);
      setText("");
      setPhone(null);
      setName("");
      setEmail("");
      setRadio("");
      setIsValid(true)
      }
     

      
  }
 const handleOnChange = value => {
  setPhone(value)
    }

  return (
    <div style={{background:"#f0f0f0"}}>
      {isValid 
      ? <Alert variant="success"><Alert.Heading>Thank you !</Alert.Heading>for
      completing the informations. Click Table Tab to view your details</Alert>:<></>
      
}
      <div className="heading-box m-2">
        <h3 style={{color:"skyblue",fontSize:"1.25rem",fontWeight:"bold"}} className="m-2">Aromatic Bar</h3>
        <p style={{fontSize:"0.75rem"}}>We are commited to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionaire. Thank you</p>
      </div>
      <div style={{background:"white",border:"1px solid grey", margin:"2px",height:"600px"}}>
      <Form onSubmit={submit}>
      <Row className="m-2">
        <Col>
          <Form.Group className="mb-3" controlId="formBasicName">
            <FormLabel>Text Field <sup style={{color:"red"}}>*</sup></FormLabel>
           
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Hello</InputGroup.Text>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={text} onChange={(e)=>{setText(e.target.value)}}
                
              />
              
            </InputGroup>
            <span style={{color:"red"}} id="txt"></span>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <FormLabel>Phone Field</FormLabel>

           
            <PhoneInput value={phone} country={'in'}  onChange={handleOnChange} placeholder="123-456-789" name="phone" />
            <span style={{color:"red"}} id="phn"></span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>
              Name<sup style={{color:"red"}}>*</sup>
            </Form.Label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control"  />
            <span style={{color:"red"}} id="nm"></span>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Field <sup style={{color:"red"}}>*</sup></Form.Label>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control"  aria-describedby="emailHelp" />
            <span style={{color:"red"}} id="eml"></span>
          </Form.Group>

          <Form.Label>Radio Button <sup style={{color:"red"}}>*</sup></Form.Label> <tb/>
          <span style={{color:"red"}} id="rd"></span>
          <Form.Group className="mb-3 d-flex" controlId="formBasicName">
          
          <Form.Check
              type="radio"
              label="Excellent"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              value="excellent" onChange={(e)=>{setRadio(e.target.value)}}
            />
            <Form.Check
              type="radio"
              label="Good"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              value="Good" onChange={(e)=>{setRadio(e.target.value)}}
            />
            <Form.Check
              type="radio"
              label="Fair"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              value="Fair" onChange={(e)=>{setRadio(e.target.value)}}
            />
            <Form.Check
              type="radio"
              label="Bad"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              value="Bad" onChange={(e)=>{setRadio(e.target.value)}}
            />
          </Form.Group>
        </Col>
        
      </Row>
      <Button type="submit" variant="success" size="sm" className="btn-submit">
          Submit
        </Button>
        </Form>
        </div>
    </div>
  );
};

export default FormComponent;
