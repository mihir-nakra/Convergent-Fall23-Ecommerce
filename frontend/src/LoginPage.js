import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "./AuthContext";
// Import styles from LoginPageStyling
// import styles from './LoginPage.module.css';

function LoginPage() {
  const [startupName, setStartupName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    // Login logic here
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <Typography component="h1" variant="h4" fontWeight="bold">
          Create Your Account
        </Typography>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="startupName"
          label="Company Name"
          placeholder="Your Company Name"
          autoFocus
          value={startupName}
          onChange={(e) => setStartupName(e.target.value)}
        />
        
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          placeholder="youremail@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />
        
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}

        />
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"

          onClick={handleLogin}
          style={styles.button}
        >
          Create Account
        </Button>

        {/* ... other components, if any ... */}
      </Box>
    </Container>
  );
}

const styles = {
  button: {
    backgroundColor:'#9ec1a3',
    borderRadius: '40px',
    height: '60px',
    position: 'relative',
    width: '475px'
  },

  
}


export default LoginPage;