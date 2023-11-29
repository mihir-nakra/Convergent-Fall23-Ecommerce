import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function MatchesInvestorView() {
  const theme = useTheme();

  // Hardcoded startup information
  const startupMatches = [
    {
      id: 1,
      logo: "https://example.com/logo1.png",
      name: "Elite Sweets",
      tagline: "Donuts made with your health in mind.",
      aboutUs:
        "Donuts made with your health in mind. Packed with protein to fuel your active lifestyle. Low in sugar, and gluten free so you can eat guilt free.",
    },
    {
      id: 2,
      logo: "https://example.com/logo2.png",
      name: "Flo Recruit",
      tagline: "Your competitive edge in legal recruiting",
      aboutUs:
        "Your firm’s biggest cases and deals may be done in courtrooms and conference rooms, but they’re won in the interview room. Firms of all sizes trust Flo Recruit's technology to help them hire the best to be the best.",
    },
    {
      id: 3,
      logo: "https://example.com/logo3.png",
      name: "Ordoro",
      tagline: "Conquer shipping, inventory, and dropshipping complexity.",
      aboutUs:
        "Ordoro enables you to focus on the work that is meaningful by automating the tasks that are menial. We offer an all-in-one, web-based platform that helps ecommerce sellers manage their inventory and order fulfillment.",
    },
    {
      id: 4,
      logo: "https://example.com/logo4.png",
      name: "EQO",
      tagline: "Experts in environmental genomics.",
      aboutUs:
        "EQO's environmental laboratory specializes in eRNA and eDNA applications, offering advanced solutions that help our public and private sector clients safeguard and restore the well-being of surface water bodies. ",
    },
    {
      id: 5,
      logo: "https://example.com/logo5.png",
      name: "Altect",
      tagline: "Protecting our clean energy future.",
      aboutUs:
        "Taking a battery-centric approach, Altect has re-imagined battery fire prevention solutions. Designed to seamlessly integrate into any energy storage asset, our fire safety systems provide better safety performance at a lower cost point compared to current solutions.",
    },
  ];

  return (
    <Container
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: '100vh',
      }}
      >
        
      <Typography 
      style={{ 
        variant:"h2",
        component:"h1", 
        padding: theme.spacing(2),
        color: "#000000",
        fontFamily: "Libre Franklin",
        fontSize: "38px",
        fontWeight: 600,
        left: "0px",
        top: "30px",
        letterSpacing: 0,
        lineHeight: "normal",
        position: "relative",
    }}
    gutterBottom
    >
        Matches
      </Typography>

      <Grid container spacing={2}>
        {startupMatches.map((startup) => (
          <Grid item xs={12} key={startup.id}>
            <Paper elevation={3} 
            style={{ 
                padding: theme.spacing(2),
                color: "#ffffff",
                radius: "13.34px",
                shadow: "0px 3.56px 3.56px #00000040",
                height: "140px",
                top: "20px",
                position: "relative",
                width: "892px"
            }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item >
                    <Typography
                    style={{
                        color: "#d9d9d9",
                        radius: "100px",
                        height: "100px",
                        left: "80px",
                        position: "absolute",
                        top: "33px",
                        width: "100px"
                      }}
                    >
                        <Avatar style={{
                            height: '90px',
                            width: '90px',
                            
                        }} alt={startup.name} src={startup.logo} />
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography 
                  style={{
                    variant: "h6",
                    color: "#000000",
                    fontFamily: "Libre Franklin",
                    fontSize: "36px",
                    fontWeight: 600,
                    left: "180px",
                    top: "30px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute",
                  }}
                  >{startup.name}</Typography>
                  <Typography 
                  style={{
                    color: "#000000",
                    fontFamily: "Libre Franklin",
                    fontSize: "17.8px",
                    fontWeight: 400,
                    left: "180px",
                    top: "70px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute",
                    width: "300px"
                  }}
                  >{startup.tagline}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                  style={{
                    color: "#000000",
                    fontFamily: "Libre Franklin",
                    fontSize: "17px",
                    fontWeight: 400,
                    left: "40px",
                    top: "10px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "relative",
                    width: "370px",
                  }}
                  >{startup.aboutUs}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}