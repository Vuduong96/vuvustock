import React, {useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";

function Search() {

    const[input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    };

  return (
    <FormStyle  onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        </div>
    </FormStyle>
   
  )
}

const FormStyle = styled.form`
    
    div{
        width:100%;
        position:relative;
    }
    input{
       width: 634px;
       height: 40px;
       margin-left: 281px;
       margin-top: 26px;
       background: #313139;
       box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
       border-radius: 12px;
       color: white;
       front-size: 2rem;
       padding-left:50px;

    }

    svg{
        position:absolute;
        width: 24px;
        height:24px;
        margin-left:18%;
        transform: translate(100%, -50%);
        color:white;
        margin-top:3rem;
    }

`;

export default Search;