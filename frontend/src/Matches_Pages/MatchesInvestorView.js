import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function MatchesInvestorView(props) {
  const theme = useTheme();

  // Hardcoded startup information
  // Hardcoded startup information
  const startupMatches = [
    {
      id: 1,
      logo: "data:image/png;base64,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",
      name: "Elite Sweets",
      tagline: "Donuts made with your health in mind.",
      aboutUs:
        "Donuts made with your health in mind. Packed with protein to fuel your active lifestyle. Low in sugar, and gluten free so you can eat guilt free.",
    },
    {
      id: 2,
      logo: "https://media.licdn.com/dms/image/D560BAQFzRCGu769Flw/company-logo_200_200/0/1689286603560/florecruit_logo?e=2147483647&v=beta&t=gDhSsQzquMxDCSvgrS5mgPef30MkfTSII-Lzm6n0sqU",
      name: "Flo Recruit",
      tagline: "Your competitive edge in legal recruiting",
      aboutUs:
        "Your firm’s biggest cases and deals may be done in courtrooms and conference rooms, but they’re won in the interview room. Firms of all sizes trust Flo Recruit's technology to help them hire the best to be the best.",
    },
    {
      id: 3,
      logo: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/01c06505-26a3-4dc6-9f2e-f22377d27363.png",
      name: "Ordoro",
      tagline: "Conquer shipping, inventory, and dropshipping complexity.",
      aboutUs:
        "Ordoro enables you to focus on the work that is meaningful by automating the tasks that are menial. We offer an all-in-one, web-based platform that helps ecommerce sellers manage their inventory and order fulfillment.",
    },
    {
      id: 4,
      logo: "https://media.licdn.com/dms/image/D4E0BAQFj7MzFfR3d5Q/company-logo_200_200/0/1693550714922/environmental_quality_operations_logo?e=2147483647&v=beta&t=tFG4x2lMA9C56lBifWDBhM_wL4GFkZt-jxutKlG9wXw",
      name: "EQO",
      tagline: "Experts in environmental genomics.",
      aboutUs:
        "EQO's environmental laboratory specializes in eRNA and eDNA applications, offering advanced solutions that help our public and private sector clients safeguard and restore the well-being of surface water bodies. ",
    },
    {
      id: 5,
      logo: "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/r9h56ytrh9uj0uuqfljt",
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


        <Grid container>
            <Grid item xs={4}>
                <Grid container>
                    <Grid item xs={12}>
                        <div
                            style={{
                                marginLeft: '10px',
                                
                            }}
                        ></div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>

            </Grid>
        </Grid>

      <Grid container spacing={2}>
        {startupMatches.map((startup) => (
          <Grid item xs={12} key={startup.id} onClick={props.switchToProfile}>
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
                        left: "40px",
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