// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { Employee } from "./Employee";
// import { signInWithGoogle } from "../../Firebase";
// import "./Login.css";
// import loginContext from "../../LoginContext";
// import SweetAlert from "react-bootstrap-sweetalert";

// export const Login = () => {
//   const [userList, setUserList] = useState([]);
//   const [clientEmail, setClientEmail] = useState("");
//   const { isLoggedIn, setIsLoggedIn } = useContext(loginContext);

//   useEffect(() => {
//     const getUsers = () => {
//       axios
//         .get("https://localhost:7261/api/User/GetAll")
//         .then((response) => {
//           setUserList(response.data);
//         })
//         .catch((error) => {
//           setAlertErrorMessage(error.message);
//           setShowAlertError(true);
//         });
//     };
//     getUsers();
//   }, []);

//   useEffect(() =>
//     setIsLoggedIn(userList.some((item) => item.email === clientEmail))
//   );

//   const handleClick = () => {
//     signInWithGoogle()
//       .then((result) => {
//         const email = result.user.email;
//         setClientEmail(email);
//         if(userList.some((item) => item.email !== clientEmail)){
//           setWrongUserAlert(true);
//         }
//       })
//       .catch((error) => {
//         setAlertErrorMessage(error.message);
//       });
//   };

//   const [wrongUserAlert, setWrongUserAlert] = useState(false);
//   const [alertErrorMessage, setAlertErrorMessage] = useState("");

//   return (
//     <div>
//       {isLoggedIn ? (
//         <Employee />
//       ) : (
//         <div className="text-center">
//           <h1>Welcome to Employee Information Management System</h1>
//           <hr></hr>
//           <br />
//           <button className="btn btn-google" onClick={handleClick}>
//             Click to sign in with Google
//           </button>
//           {wrongUserAlert && (
//             <SweetAlert
//               danger
//               confirmBtnText="Ok"
//               confirmBtnBsStyle="success"
//               title="You are not authorized user.."
//               onConfirm={() => setWrongUserAlert(false)}
//             >
//               {alertErrorMessage}
//             </SweetAlert>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };
