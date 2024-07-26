import React from "react";
// import styled from "styled-components";
import styles from "./Navbar.module.css"



// using css modules
class Navbar extends React.Component{
    render(){
        return(
            <>
            <div className={styles.nav}>
                <div className={styles.title}>Codeflix</div>
                <div className={styles.cartContainer}>
                    <img className={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png" alt="Cart Icon"/>
                    <span className={styles.cartCount} >3</span>
                </div>
            </div>
            </>
        )
    }
}

// // using styled components (css in js)
// const Nav = styled.div`
//         // width:100%;
//         height:70px; 
//         background-image : linear-gradient(red, yellow); 
//         display:flex;
//         justify-content:space-between;
//         align-items: center;
//         position: relative;
// `;
// const Title= styled.div`
//         font-size:30px;
//         color:#fff;
//         font-weight: 600;
//         font-family: 'Times New Roman', Times, serif;
//         text-transform:uppercase;
//         margin-left: 20px;
//         &:hover{color: black};
// `;
// const CartContainer= styled.div`
//     position: relative;
//     cursor: pointer;
// `;
// const CartIcon= styled.img `
//     height: 48px;
//     margin-right: 20px;
// `;
// const CartCount= styled.div`
//     background-color: ${(props) =>props.color};
//     border-radius: 50%;
//     padding: 4px 8px; 
//     position: absolute;
//     right: 10px;
//     top: -5px;
//     font-size: 12px;
//     visibility: ${(props)=> props.show? 'visible' : 'hidden'};
// `;
  
// class Navbar extends React.Component{
//     render(){
//         return(
//             <>
//             <Nav>
//                 <Title>Codeflix</Title>
//                 <CartContainer>
//                     <CartIcon src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png" alt="Cart Icon"/>
//                     <CartCount color = "yellow" show={true} >3</CartCount>
//                 </CartContainer>
//             </Nav>
//             </>
//         )
//     }
// }



// using inline css in js
/* eg: <div style={StyleSheet.nav}></div> */
// const styles = {
//     nav:{width:"100%", 
//         height:"50px", 
//         backgroundImage:"linear-gradient(red, yellow)", 
//         display:"flex", 
//         justifyContent:"space-between"},
//     title:{
//         fontSize:"30px",
//         color:"#fff",
//         fontWeight: "600",
//         fontFamily:' "MontSerrat", sans-Serif',
//         textTransform:"upperCase",
//         marginLeft: "20px"
//     },
//     cartContainer:{
//         position:"relative",
//         cursor:"pointer"
//     },
//     cartIcon:{
//         height:"40px",
//         marginRight:"25px"
//     },
//     cartCount:{
//         backgroundColor:"hsla(0, 100%, 90%, 0.3)",
//         borderRadius:"48%",
//         padding:"4px,8px",
//         position:"absolute",
//         right:"18px",
//         top:"-5px",
//         fontSize:"15px",

//     }


    
// }

export default Navbar;