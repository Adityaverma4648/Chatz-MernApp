import React from "react";
import Container from "react-bootstrap/Container";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import { useState } from "react";


const Home = () => {
    const[checked,setChecked] =  useState(false);
    const [radioValue,setRadioValue] = useState(1);
   const radios = [
    { name: 'Login',value: 1, },
    { name: 'SignUp',value: 2,},
  ];

  return (
    <div className="Container bg-light border-end border-1 border-secondary">
          <Container class="bg-info d-flex justify-content-center">
                  <ButtonGroup>
                       {radios?.map((btn,index)=>{
                            return <ToggleButton 
                                key={index}
                                type="radio"
                                id={`radio-${index}`}
                                name={"radio"}
                                variant={index%2?'outline-success':'outline-danger'}
                                value={btn.value}
                                checked={radioValue === btn.value}
                                onChange={(e)=>{
                                    alert(e.target.value);
                                }}
                                >
                                {btn.name}
                            </ToggleButton>
                       })}
                  </ButtonGroup>
          </Container>
    </div>
  );
};

export default Home;
