import React from "react";
import styles from "./Navbar.module.css"

// using css modules
class Navbar extends React.Component{
    render(){
        return(
            <>
            <div className={styles.nav}>
                <div className={styles.title}>Codeflix</div>
                <div className={styles.cartContainer}>
                    <img className={styles.cartIcon} alt="Cart Icon"
                    src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png" />
                    <span className={styles.cartCount} >3</span>
                </div>
            </div>
            </>
        )
    }
}

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