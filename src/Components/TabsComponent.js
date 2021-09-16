import React, {useState, useEffect} from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormComponent from "./FormComponent";
import FormDatas from "./FormDatas";

const TabsComponent = () => {

  let initData;
  if( localStorage.getItem("formDatas")===null){
    initData = [];
  }
  else {
    initData =JSON.parse( localStorage.getItem("formDatas"));
  }

  const onDelete = (formData)=>{
    console.log("I am on delete of formData", formData);
    

    setFormDatas(formDatas.filter((e)=>{
      return e!==formData;
    }));
    localStorage.setItem("formDatas", JSON.stringify(formDatas));
  }

  const addData = (text,phone,name,email,radio)=>{
    console.log("I am adding this", text,phone,name,email,radio);
    let sno;
    if(formDatas.length===0){
      sno=0;
    }
    else{
       sno = formDatas[formDatas.length-1].sno+1;
    }
    
    const myData = {
      sno:sno,
      text:text,
      phone:phone,
      name:name,
      email:email,
      radio:radio,
    }
    setFormDatas([...formDatas, myData]);
    console.log(myData);
  }

  const [formDatas, setFormDatas] = useState(initData);
  useEffect(() => {
    localStorage.setItem("formDatas", JSON.stringify(formDatas));
    }, [formDatas])


  const  handleClick = event => event.target.classList.add('active');

  return (
    <div>
      <Router>
        <Nav variant="pills" defaultActiveKey="/">
          <Nav.Item>
            <Link className="active" id="lnk" onClick={handleClick} to="/">
              Form
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Link className="" id="lnk" onClick={handleClick} eventKey="table" to="/table">
              Table
            </Link>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route exact path="/">
            <FormComponent addData={addData} />
          </Route>
          <Route path="/table">
            <FormDatas formDatas={formDatas} onDelete={onDelete} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default TabsComponent;
