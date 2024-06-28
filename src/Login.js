// import React, { useState } from 'react';
// import axios from '../src/axiosConfig'; // Import the configured axios instance

// function Login({ setIsAuthenticated }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/login', {
//         username,
//         password
//       });
//       if (response.status === 200) {
//         setIsAuthenticated(true);
//       }
//     } catch (error) {
//       console.error('Login failed', error);
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <div>
//         <label>Username</label>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </div>
//       <div>
//         <label>Password</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;
