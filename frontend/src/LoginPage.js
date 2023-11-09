import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "./AuthContext";
import LoginPageStyling from "./LoginPageStyling";

function LoginPage() {
  // Access the MUI theme for potential theme-related functionalities.
  const theme = useTheme();

  // TODO: Extract login function and error from our authentication context.
  //const { loginError, login} = useAuth()


  // State to hold the username and password entered by the user.
  const [startupName, setStartUpName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // TODO: Handle login function.
  const handleLogin = () => {
    //login(startupName, email, password)
  };


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }} 
      className="create-account"
      >
        <Box
          component="img"
          sx={{
            marginBottom: 2,
            height: 200,
            width: 200, 
          }}
        ></Box>
        <Typography component="h1" variant="h4" fontWeight="bold">
          Create Your Account
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="startupName"
            label="Company Name"
            InputLabelProps={{ shrink: true }}
            placeholder="Your Company Name"
            autoFocus
            value={startupName}
            onChange={(e) => setStartUpName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            InputLabelProps={{ shrink: true }}
            placeholder="youremail@example.com"
            autoFocus
            value={startupName}
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
            InputLabelProps={{ shrink: true }}
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
            InputLabelProps={{ shrink: true }}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Create Account
          </Button>
        </Box>
        {/* TODO: Display Login Error if it exists */}
        {/*{ loginError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {loginError}
          </Alert>
        ) */}
      </Box>
    </Container>
  );
}

export default LoginPage;
