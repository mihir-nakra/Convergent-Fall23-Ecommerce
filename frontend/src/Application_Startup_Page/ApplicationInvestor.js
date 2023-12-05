import React, { useState } from "react";
import { Text } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Alert,
    Grid,
    Paper,
    Card
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomTextField from "./CustomTextField";
import UploadForm from "./UploadForm";
//import { useAuth } from "../AuthContext";

export default function ApplicationInvestor() {
    const theme = useTheme();
    //const { apply , Error} = useAuth(); // Replace 'login' with 'apply'

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [dateFounded, setDateFounded] = useState("");
    const [location, setLocation] = useState("");
    const [industries, setIndustries] = useState("");
    const [fundingAmount, setFundingAmount] = useState("");
    const [equity, setEquity] = useState("");
    const [founders, setFounders] = useState("");
    const [numEmployees, setNumEmployees] = useState("");
    const [priorInvestments, setPriorInvestments] = useState("");
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
    };
    // return <div>Hello</div>;
    return <Container
      maxWidth="xl" // Adjust the maxWidth as needed
      sx={{
        backgroundColor: '#496E91', // Blue background color
        minHeight: '100vh', // Make the container fill the whole page
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      
    >
      <div
        style={{
          backgroundColor: '#F5F5F5', // White background color
          paddingLeft: '3em', 
          paddingRight: '3em', 
          // paddingTop: '30vh', 
          paddingBottom: '3em',
          height: '80%',
          width: '80%',
          // marginRight: 0,
          // position: 'fixed',
          display: 'block',
          borderRadius: '30px',
          flexDirection: 'column'
        }}
      >

        <h1 style={{
          textAlign: 'center',
          padding: '.25em',
          fontFamily: 'Libre Franklin'
        }}>Investor Application</h1>
        <Grid container spacing={4} style={{width: '100%', height: '100%'}}>
                    <Grid item xs={6}>
                    <CustomTextField 
                      label="Your Name"
                      placeholder="First & Last"
                      value={name}
                      stateFunc={setName}
                      required={true}

                    />
                    </Grid>
                    <Grid item xs={6}>
                    <CustomTextField 
                      label="Introduce Yourself"
                      placeholder="I am an angel investor interested in..."
                      value={description}
                      stateFunc={setDescription}
                      required={true}

                    />
                    </Grid>
                    <Grid item xs={6}>
                    <CustomTextField 
                      label="Industries"
                      placeholder="mm/yyyy"
                      value={industries}
                      stateFunc={setIndustries}
                      required={true}

                    />
                    </Grid>
                    <Grid item xs={3}>
                    <CustomTextField 
                      label="Location"
                      placeholder="City, State"
                      value={location}
                      stateFunc={setLocation}
                      required={true}

                    />
                    </Grid>
                    <Grid item xs={3} />

                    <Grid item xs={3}>
                    <CustomTextField 
                      label="Amount of Money"
                      placeholder="In USD"
                      value={fundingAmount}
                      stateFunc={setFundingAmount}
                      required={true}

                    />
                    </Grid>
                    <Grid item xs={3}>
                    <CustomTextField 
                      label="Equity Sought"
                      placeholder="In Percent (%)"
                      value={equity}
                      stateFunc={setEquity}
                      required={true}

                    />
                    </Grid>
                    <Grid item xs={6}>
                    <CustomTextField 
                      label="Prior Investments"
                      placeholder="Founder 1, Founder 2, ..."
                      value={founders}
                      stateFunc={setFounders}
                      required={true}

                    />
                    </Grid>
                    <Grid item xs={3}>
                    <CustomTextField 
                      label="Prior Investments"
                      placeholder="How much equity / value"
                      value={priorInvestments}
                      stateFunc={setPriorInvestments}
                      required={true}
                    />
                    </Grid>
                    <Grid item xs={3}>
                    <CustomTextField 
                      label="Credit Score"
                      placeholder="Optional"
                      value={creditScore}
                      stateFunc={setCreditScore}
                      required={false}
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <UploadForm></UploadForm>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center', marginTop: '2em' }}>
            <Button
            onClick={() => window.location.href = "/"}
              type="submit"
              variant="contained"
              style={{
                justifyContent: 'center',
                backgroundColor: '#496E91',
                borderRadius: '25px',
                paddingLeft: '3em',
                paddingRight: '3em',
                paddingTop: '1em',
                paddingBottom: '1em',
                fontFamily: 'Libre Franklin',
                textTransform: 'none',
                fontWeight: 'bold'
              }}
            >
              Submit Application
            </Button>
          </Grid>
               
      </div>
    </Container>
}
