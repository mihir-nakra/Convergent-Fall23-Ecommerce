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
//import { useAuth } from "../AuthContext";

export default function ApplicationStartup() {
  const theme = useTheme();
  //const { apply , Error} = useAuth(); // Replace 'login' with 'apply'

  const [startupName, setStartUpName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [dateFounded, setDateFounded] = useState("");
  const [location, setLocation] = useState("");
  const [industries, setIndustries] = useState("");
  const [fundingAmount, setFundingAmount] = useState("");
  const [equity, setEquity] = useState("");
  const [founders, setFounders] = useState("");
  const [numEmployees, setNumEmployees] = useState("");
  const [priorInvestors, setPriorInvestors] = useState("");
  const [creditScore, setCreditScore] = useState("");

  const handleApply = () => {

    /*apply({
      startupName,
      companyDescription,
      dateFounded,
      location,
      industries,
      fundingAmount,
      equity,
      founders,
      numEmployees,
      priorInvestors,
      creditScore,
    });
  };*/
  return <Typography component="h1" variant="h4" fontWeight="bold">
  Apply for Your Startup
</Typography>
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
          Apply for Your Startup
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
            id="companyDescription"
            label="Introduce Your Company"
            InputLabelProps={{ shrink: true }}
            placeholder="Briefly describe your company"
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Date Founded"
            id="dateFounded"
            InputLabelProps={{ shrink: true }}
            placeholder="YYYY"
            value={dateFounded}
            onChange={(e) => setDateFounded(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Location"
            id="location"
            InputLabelProps={{ shrink: true }}
            placeholder="City, State"
            value={dateFounded}
            onChange={(e) => setLocation(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Industries"
            id="industries"
            InputLabelProps={{ shrink: true }}
            placeholder="Industries"
            value={dateFounded}
            onChange={(e) => setIndustries(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Funding Amount"
            id="fundingAmount"
            InputLabelProps={{ shrink: true }}
            placeholder="Industries"
            value={dateFounded}
            onChange={(e) => setFundingAmount(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Equity"
            id="equity"
            InputLabelProps={{ shrink: true }}
            placeholder="Equity"
            value={dateFounded}
            onChange={(e) => setEquity(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Founders"
            id="founders"
            InputLabelProps={{ shrink: true }}
            placeholder="Founders"
            value={dateFounded}
            onChange={(e) => setFounders(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Number of Employees"
            id="numOfEmployees"
            InputLabelProps={{ shrink: true }}
            placeholder="Number of Employees"
            value={dateFounded}
            onChange={(e) => setNumEmployees(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Number of Employees"
            id="numOfEmployees"
            InputLabelProps={{ shrink: true }}
            placeholder="Number of Employees"
            value={dateFounded}
            onChange={(e) => setNumEmployees(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Prior Investors"
            id="priorInvestors"
            InputLabelProps={{ shrink: true }}
            placeholder="Prior Investors"
            value={dateFounded}
            onChange={(e) => setPriorInvestors(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Credit Score"
            id="creditScore"
            InputLabelProps={{ shrink: true }}
            placeholder="Credit Score"
            value={dateFounded}
            onChange={(e) => setCreditScore(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleApply}
          >
            Submit Application
          </Button>
        </Box>
        { Error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {Error}
          </Alert>
        ) }
      </Box>
    </Container>
  );
}
}
