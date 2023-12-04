import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Messages() {
  const theme = useTheme();

  // Hardcoded contact  information
  const Contacts = [
    {
      id: 1,
      //logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      logo: "https://tinypic.host/image/pexels-andrea-piacquadio-762020.XJwcx",
      name: "Franklin Marshall",
      tagline: "Your customers. Your values.",
      aboutUs:
        "I would like to invest!",
    },
    {
      id: 2,
      logo: "https://images.squarespace-cdn.com/content/v1/54693b1ee4b07c8a3da7b6d0/1492201646122-7CCYPRAF33QU2MGPW8YJ/Headshot-by-Lamonte-G-Photography-Baltimore-Corporate-Headshot-Photographer-IMG_6763-Edit.JPG?format=1500w",
      name: "Bob Jones",
      tagline: "We transform companies into the most valuable versions of themselves.",
      aboutUs:
        "Definitely interested in learning m...",
    },
    {
      id: 3,
      logo: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-1052.jpeg?ssl=1",
      name: "Amanda Wright",
      tagline: "Investing in Gender Matters.",
      aboutUs:
        "What is your expected revenue gr...",
    },
    {
      id: 4,
      logo: "https://toietmoiphotography.com/wp-content/uploads/2019/02/Calgary-Student-Headshots-1.jpg",
      name: "James Miller",
      tagline: "Guiding startups through unventured territory.",
      aboutUs:
        "Are you free to meet over coffee?",
    },
    {
      id: 5,
      logo: "https://images.squarespace-cdn.com/content/v1/56ac1b617da24fafb23b8a3c/1612488831769-06RCMVUHQ6MYSJBRVZ2J/0C4A1104-Edit.jpg",
      name: "Katie Ellison",
      tagline: "Transitional capital. Transformational expertise. Success on your terms.",
      aboutUs:
        "Great!",
    },
    {
      id: 6,
      logo: "https://images.squarespace-cdn.com/content/v1/56afe99501dbae95e8b43b5f/1504825058548-HVSHRGD8IOYNVYE8E6WV/Red_Pump_Summer_Soiree_2017-499-Headshots-Washington-DC-Lenzy-Ruffin-Photography.jpg",
      name: "Rhonda Bush",
      tagline: "Transitional capital. Transformational expertise. Success on your terms.",
      aboutUs:
        "Can you please send me your proj...",
    },
    {
      id: 7,
      logo: "https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg",
      name: "Jay Hilton",
      tagline: "Transitional capital. Transformational expertise. Success on your terms.",
      aboutUs:
        "Let's keep talking!",
    },
  ];

    // Hardcoded contact  information
    const Contacts2 = [
      {
        id: 1,
        logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
        name: "Franklin Marshall",
        tagline: "Your customers. Your values.",
        aboutUs:
          "I would like to invest!",
      },
      {
        id: 2,
        logo: "https://images.squarespace-cdn.com/content/v1/54693b1ee4b07c8a3da7b6d0/1492201646122-7CCYPRAF33QU2MGPW8YJ/Headshot-by-Lamonte-G-Photography-Baltimore-Corporate-Headshot-Photographer-IMG_6763-Edit.JPG?format=1500w",
        name: "Bob Jones",
        tagline: "We transform companies into the most valuable versions of themselves.",
        aboutUs:
          "Definitely interested in learning m...",
      },
      {
        id: 3,
        logo: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-1052.jpeg?ssl=1",
        name: "Amanda Wright",
        tagline: "Investing in Gender Matters.",
        aboutUs:
          "What is your expected revenue gr...",
      },
      {
        id: 4,
        logo: "https://toietmoiphotography.com/wp-content/uploads/2019/02/Calgary-Student-Headshots-1.jpg",
        name: "James Miller",
        tagline: "Guiding startups through unventured territory.",
        aboutUs:
          "Are you free to meet over coffee?",
      },
      {
        id: 5,
        logo: "https://images.squarespace-cdn.com/content/v1/56ac1b617da24fafb23b8a3c/1612488831769-06RCMVUHQ6MYSJBRVZ2J/0C4A1104-Edit.jpg",
        name: "Katie Ellison",
        tagline: "Transitional capital. Transformational expertise. Success on your terms.",
        aboutUs:
          "Great!",
      },
      {
        id: 6,
        logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
        name: "Franklin Marshall",
        tagline: "Transitional capital. Transformational expertise. Success on your terms.",
        aboutUs:
          "I would love to invest!",
      },
    ];

  const Box = [
    {
      id: 1,
      logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      name: "Franklin Marshall",
      tagline: "Your customers. Your values.",
      aboutUs:
        "Venture Capitalist | Technology Industry | Austin, TX",
    },
  ];

  const Box2 = [
    {
      id: 1,
      //logo: "https://lh5.googleusercontent.com/npXw6SvsTaTxZMwmBJkNCz8DLM6mECOtrDYWOnryCT37UVK6uxhHm3LMkk3pM7yoXZM0XVlnH_XRxzIR0siO5QVCZtaDlA6bncrdMEOFAJAwhOCmm_w3T_hb73JFNr8T=w1280",
      logo: "https://lh6.googleusercontent.com/Hlp2LIOayAtZK0Ph3RDo4t5TOegmsyfw7dKg3gSIHPhquftmGOSBfITKNDeGMJ4v5Z4M6rLwDAd9Hjo3Zz5dkkUaISJNCJ6-x9RndB40bF9akcdcydJ6bXz3isQWXMoOuQ=w1280",
      name: "",
      tagline: "",
      aboutUs: ""
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
        fontFamily: "Libre Franklin-SemiBold, Helvetica",
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
        Messages
      </Typography>

      <Grid container spacing={2}>
        {Contacts.map((contact) => (
          <Grid item xs={12} key={contact.id}>
            <Paper elevation={3} 
            style={{ 
                padding: theme.spacing(2),
                color: "#ffffff",
                radius: "13.34px",
                shadow: "0px 3.56px 3.56px #00000040",
                height: "50px",
                top: "30px",
                position: "relative",
                width: "350px"
            }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Typography
                    style={{
                        color: "#d9d9d9",
                        radius: "100px",
                        height: "100px",
                        left: "20px",
                        position: "absolute",
                        top: "15px",
                        width: "100px"
                      }}
                    >
                        <Avatar style={{
                            height: '50px',
                            width: '50px',
                            
                        }} alt={contact.name} src={contact.logo} />
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography 
                  style={{ // names
                    variant: "h6",
                    color: "#000000",
                    fontFamily: "Libre Franklin-SemiBold, Helvetica",
                    fontSize: "20px",
                    fontWeight: 600,
                    left: "100px",
                    top: "12px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute"
                  }}
                  >{contact.name}</Typography>
                  <Typography 
                  style={{
                    color: "#000000",
                    fontFamily: "Libre Franklin-Regular, Helvetica",
                    fontSize: "0px",
                    fontWeight: 400,
                    left: "100",
                    top: "70px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute",
                    width: "300px"
                  }}
                  >{contact.tagline}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                  style={{
                    color: "#000000",
                    fontFamily: "Libre Franklin-Regular, Helvetica",
                    fontSize: "17px",
                    fontWeight: 400,
                    left: "100px",
                    top: "44px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute",
                    width: "370px",
                  }}
                  >{contact.aboutUs}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2}>
        {Contacts2.map((contact) => (
          <Grid item xs={12} key={contact.id}>
            <Paper elevation={3} 
            style={{ 
                padding: theme.spacing(2),
                color: "#ffffff",
                bgcolor: "#ffffff",
                radius: "13.34px",
                shadow: "0px 3.56px 3.56px #00000040",
                height: "50px",
                top: "130px",
                position: "absolute",
                width: "350px"
            }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Typography
                    style={{
                        color: "#d9d9d9",
                        bgcolor: "#ffffff",
                        radius: "100px",
                        height: "100px",
                        left: "20px",
                        position: "absolute",
                        top: "15px",
                        width: "100px"
                      }}
                    >
                        <Avatar style={{
                            height: '50px',
                            width: '50px',
                            
                        }} alt={contact.name} src={contact.logo} />
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography 
                  style={{ // names
                    variant: "h6",
                    color: "#000000",
                    fontFamily: "Libre Franklin-SemiBold, Helvetica",
                    fontSize: "20px",
                    fontWeight: 600,
                    left: "100px",
                    top: "12px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute"
                  }}
                  >{contact.name}</Typography>
                  <Typography 
                  style={{
                    color: "#000000",
                    fontFamily: "Libre Franklin-Regular, Helvetica",
                    fontSize: "0px",
                    fontWeight: 400,
                    left: "100",
                    top: "70px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute",
                    width: "300px"
                  }}
                  >{contact.tagline}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                  style={{
                    color: "#000000",
                    fontFamily: "Libre Franklin-Regular, Helvetica",
                    fontSize: "17px",
                    fontWeight: 400,
                    left: "100px",
                    top: "44px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute",
                    width: "370px",
                  }}
                  >{contact.aboutUs}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2}>
        {Box.map((box) => (
          <Grid item xs={12} key={box.id}>
            <Paper elevation={3} 
            style={{ 
                padding: theme.spacing(2),
                color: "#ffffff",
                radius: "13.34px",
                //shadow: "0px 3.56px 3.56px #00000040",
                height: "600px",
                left: "700px",
                top: "68px",
                position: "absolute",
                width: "600px"
            }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Typography
                    style={{
                        color: "#d9d9d9",
                        radius: "100px",
                        height: "100px",
                        left: "20px",
                        position: "absolute",
                        top: "15px",
                        width: "100px"
                      }}
                    >
                        <Avatar style={{
                            height: '50px',
                            width: '50px',
                            
                        }} alt={box.name} src={box.logo} />
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography 
                  style={{ // names
                    variant: "h6",
                    color: "#000000",
                    fontFamily: "Libre Franklin-SemiBold, Helvetica",
                    fontSize: "20px",
                    fontWeight: 600,
                    left: "100px",
                    top: "12px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute"
                  }}
                  >{box.name}</Typography>
                  <Typography 
                  style={{
                    color: "#000000",
                    fontFamily: "Libre Franklin-Regular, Helvetica",
                    fontSize: "0px",
                    fontWeight: 400,
                    left: "100",
                    top: "70px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute",
                    width: "300px"
                  }}
                  >{box.tagline}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                  style={{
                    color: "#000000",
                    fontFamily: "Libre Franklin-Regular, Helvetica",
                    fontSize: "17px",
                    fontWeight: 400,
                    left: "100px",
                    top: "44px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute",
                    width: "500px",
                  }}
                  >{box.aboutUs}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2}>
        {Box.map((box) => (
          <Grid item xs={12} key={box.id}>
            <Paper elevation={3} 
            style={{ 
                padding: theme.spacing(2),
                color: "#a6f5f5",
                radius: "13.34px",
                shadow: "0px 3.56px 3.56px #00000040",
                height: "80px",
                left: "700px",
                top: "68px",
                position: "absolute",
                width: "600px"
            }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Typography
                    style={{
                        color: "#a6f5f5",
                        radius: "100px",
                        height: "100px",
                        left: "20px",
                        position: "absolute",
                        top: "40px",
                        width: "200px"
                      }}
                    >
                        <Avatar style={{
                            height: '50px',
                            width: '50px',
                            
                        }} alt={box.name} src={box.logo} />
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography 
                  style={{ // names
                    variant: "h6",
                    color: "#000000",
                    fontFamily: "Libre Franklin-SemiBold, Helvetica",
                    fontSize: "20px",
                    fontWeight: 600,
                    left: "100px",
                    top: "39px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute"
                  }}
                  >{box.name}</Typography>
                  <Typography 
                  style={{
                    color: "#000000",
                    fontFamily: "Libre Franklin-Regular, Helvetica",
                    fontSize: "0px",
                    fontWeight: 400,
                    left: "100",
                    top: "70px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute",
                    width: "350px"
                  }}
                  >{box.tagline}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                  style={{
                    color: "#abcabc",
                    fontFamily: "Libre Franklin-Regular, Helvetica",
                    fontSize: "17px",
                    fontWeight: 400,
                    left: "100px",
                    top: "64px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute",
                    width: "600px",
                  }}
                  >{box.aboutUs}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          
        ))
        }
        </Grid>

        <Grid container spacing={2}>
        {Box.map((box) => (
          <Grid item xs={12} key={box.id}>
            <Paper elevation={3} 
            style={{ 
                padding: theme.spacing(2),
                color: "#ffffff",
                radius: "13.34px",
                //shadow: "0px 3.56px 3.56px #00000040",
                height: "600px",
                left: "700px",
                top: "68px",
                position: "absolute",
                width: "600px"
            }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Typography
                    style={{
                        color: "#d9d9d9",
                        radius: "100px",
                        height: "100px",
                        left: "20px",
                        position: "absolute",
                        top: "20px",
                        width: "100px"
                      }}
                    >
                        <Avatar style={{
                            height: '50px',
                            width: '50px',
                            
                        }} alt={box.name} src={box.logo} />
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography 
                  style={{ // names
                    variant: "h6",
                    color: "#000000",
                    fontFamily: "Libre Franklin-SemiBold, Helvetica",
                    fontSize: "20px",
                    fontWeight: 600,
                    left: "100px",
                    top: "20px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute"
                  }}
                  >{box.name}</Typography>
                  <Typography 
                  style={{
                    color: "#abcabc",
                    fontFamily: "Libre Franklin-Regular, Helvetica",
                    fontSize: "0px",
                    fontWeight: 400,
                    left: "100",
                    top: "80px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute",
                    width: "350px"
                  }}
                  >{box.tagline}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                  style={{
                    color: "#000000",
                    fontFamily: "Libre Franklin-Regular, Helvetica",
                    fontSize: "17px",
                    fontWeight: 400,
                    left: "100px",
                    top: "52px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute",
                    width: "400px",
                  }}
                  >{box.aboutUs}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>      <Grid container spacing={2}>
        {Box2.map((box) => (
          <Grid item xs={12} key={box.id}>
            <Paper elevation={3} 
            style={{ 
                padding: theme.spacing(2),
                color: "#ffffff",
                radius: "13.34px",
                //shadow: "0px 3.56px 3.56px #00000040",
                height: "600px",
                left: "700px",
                top: "168px",
                position: "absolute",
                width: "600px"
            }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Typography
                    style={{
                        color: "#d9d9d9",
                        //radius: "100px",
                        height: "100px",
                        left: "20px",
                        position: "absolute",
                        top: "0px",
                        width: "100px"
                      }}
                    >
                        <Avatar style={{
                            shape: 'parallelogram',
                            height: '575px',
                            width: '600px',
                            
                        }} alt={box.name} src={box.logo} />
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography 
                  style={{ // names
                    variant: "h6",
                    color: "#000000",
                    fontFamily: "Libre Franklin-SemiBold, Helvetica",
                    fontSize: "20px",
                    fontWeight: 600,
                    left: "100px",
                    top: "12px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute"
                  }}
                  >{box.name}</Typography>
                  <Typography 
                  style={{
                    color: "#000000",
                    fontFamily: "Libre Franklin-Regular, Helvetica",
                    fontSize: "0px",
                    fontWeight: 400,
                    left: "100",
                    top: "70px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute",
                    width: "300px"
                  }}
                  >{box.tagline}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                  style={{
                    color: "#000000",
                    fontFamily: "Libre Franklin-Regular, Helvetica",
                    fontSize: "17px",
                    fontWeight: 400,
                    left: "100px",
                    top: "44px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute",
                    width: "500px",
                  }}
                  >{box.aboutUs}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}