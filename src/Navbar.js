import React from "react";
import styled from "styled-components";


// using styled components (css in js)
const Nav = styled.div`
        // width:100%;
        height:70px; 
        background-image : linear-gradient(red, yellow); 
        display:flex;
        justify-content:space-between;
        align-items: center;
        position: relative;
`;
const Title= styled.div`
        font-size:30px;
        color:#fff;
        font-weight: 600;
        font-family: 'Times New Roman', Times, serif;
        text-transform:uppercase;
        margin-left: 20px;
        &:hover{color: black};
`;
const CartContainer= styled.div`
    position: relative;
    cursor: pointer;
`;
const CartIcon= styled.img `
    height: 48px;
    margin-right: 20px;
`;
const CartItemCount= styled.div`
    background-color: ${(props) =>props.color};
    border-radius: 50%;
    padding: 4px 8px; 
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
    visibility: ${(props)=> props.show? 'visible' : 'hidden'};
`;
  
class Navbar extends React.Component{
    render(){
        return(
            <>
            <Nav>
                <Title>Codeflix</Title>
                <CartContainer>
                    <CartIcon src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png" alt="Cart Icon"/>
                    <CartItemCount color = "yellow" show={true} >3</CartItemCount>
                </CartContainer>
            </Nav>
            </>
        )
    }
}


export default Navbar;