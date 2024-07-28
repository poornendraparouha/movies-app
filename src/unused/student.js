// import React from "react";

// class Student extends React.Component {

//     render(){
//         const {name,age,grade,gender,address,phone,email} = this.props;

//         return(
//             <>
//             <h2>Student</h2>
//             <p>Student Name: {name}</p>
//             <p>Student Age: {age}</p>
//             <p>Student Grade: {grade}</p>
//             <p>Student Gender: {gender}</p>
//             <p>Student Address: {address}</p>
//             <p>Student Phone: {phone}</p>
//             <p>Student Email: {email}</p>
//             </>
//         )
//     }
// }

// Student.defaultProps = {
//     name: "student",
//     age: "NA",
//     grade: "NA",
//     gender: "M",
//     address: "PP",
//     phone: 9644841393,
//     email: "pk@gmail.com",
//   };


function Student(props){
    const {name,age,grade,gender,address,phone,email} = props;
    return(
        <>
        <h2>Student</h2>
        <p>Student Name: {name}</p>
        <p>Student Age: {age}</p>
        <p>Student Grade: {grade}</p>
        <p>Student Gender: {gender}</p>
        <p>Student Address: {address}</p>
        <p>Student Phone: {phone}</p>
        <p>Student Email: {email}</p>
        </>

    )
}
export default Student;