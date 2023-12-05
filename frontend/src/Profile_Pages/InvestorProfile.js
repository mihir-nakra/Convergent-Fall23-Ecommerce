import { imageListClasses, requirePropFactory } from '@mui/material'
import React from 'react'
import {
    Container,
    Typography,
    Grid,
    Paper,
    Avatar,
  } from "@mui/material";
import { ClassNames } from '@emotion/react';
import { startupData } from '../StartupData'
export default function InvestorProfile() {
    const imageStyle = {
        width: '1140px',
        height: '285px',
        position: 'relative',
        right: '1px',
      };
    const imageStyle1={
        width: '225px',
        height: '225px',
        position: 'relative',
        right: '1050px',
        top:'50px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };
    const imageStyle2 = {
        width: '1140px',
        position: 'relative',
        bottom: '4px',
        boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)'
      };
    const boxStyleUpdates={
        width: '300px',
        height: '100px',
        padding: 16,
        textAlign: 'center',
        color: 'white',
        backgroundColor:'#FFFFFF',
        borderRadius: 10
    };
    const boxStyleAbout={
        width: '500px',
        height: '300px',
        padding: 16,
        textAlign: 'center',
        color: 'white',
        backgroundColor:'#FFFFFF',
        borderRadius: 10
    };
    const pageStyle = {
        backgroundColor: '#f0f0f0', // Replace with your desired color
        minHeight: '100vh', // Ensure the container takes up at least the full viewport height
        padding: '20px', // Add padding for better visibility
      };
  return (
      <div style={pageStyle}>
        <img 
            src={require("./image3.png")}
            style={imageStyle}
        />
        
        <img 
            src="https://dstudiosphotography.com/wp-content/uploads/2019/01/Corporate-Headshots-3-square.jpg"
            style={imageStyle1}
        />
        <img 
            src={require("./image4.png")}
            style={imageStyle2}
        />
        <Typography>
            
        </Typography>
        <Typography style={{transform: 'translate(30px, 20px)', font:"T", fontWeight: 'bold' }} variant="h4">
            Latest Updates
        </Typography>
        <Grid container direction="column" spacing={2} style={{transform: 'translate(30px, 50px)'}}>
            <Grid item xs={6} style={{}}>
                <Paper elevation={7} style={{...boxStyleUpdates}}>
                    <Typography variant="h5" style={{color:"#000000", textAlign: 'left'}}>New Investment</Typography>
                    <Typography style={{color:"#000000", textAlign: 'left'}}>I invested $5,000 in a company called Elite Sweets today, they'd love for any more investors to jump on.</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6} style={{}}>
                <Paper elevation={7} style={{...boxStyleUpdates}}>
                    <Typography style={{color:"#000000", textAlign: 'left'}} variant="h6">Open for more</Typography>
                    <Typography style={{color:"#000000", textAlign: 'left'}}>I'm looking to get more involved in the sustainability sector</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6} style={{}}>
                <Paper elevation={7} style={{...boxStyleUpdates}}>
                    <Typography style={{color:"#000000", textAlign: 'left'}} variant="h6" >New Partnership</Typography>
                    <Typography style={{color:"#000000", textAlign: 'left'}}>My new investment partner James Miller and I are looking to invest in new tech startups</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6} style={{}}>
                <Paper elevation={7} style={{...boxStyleUpdates}}>
                    <Typography style={{color:"#000000", textAlign: 'left'}} variant="h6">New Acquisition</Typography>
                    <Typography style={{color:"#000000", textAlign: 'left'}}>I've acquired Ordoro today, and I'm looking forward to working with them!</Typography>
                </Paper>
            </Grid>
        </Grid>
        <Typography style={{transform: 'translate(600px, -600px)', font:"T", fontWeight: 'bold'}} variant="h4">
            About Us
        </Typography>
        <Grid container direction="column" spacing={2} style={{transform: 'translate(600px, -575px)'}}>
            <Grid item xs={12} style={{}}>
                <Paper elevation={7} style={{...boxStyleAbout}}>
                    <Typography variant="h5" style={{color:"#000000", textAlign: 'left', font:"T", fontWeight: 'bold'}}>Donuts don't have be bad for you anymore!</Typography>
                    <Typography variant="h6" style={{color:"#000000", textAlign: 'left'}}>This was a personal mission of ours inspired by family history of diabetes and obesity. Thus, The Elite Donut was born: a protein packed (10g to be exact), gluten-free, naturally sweetened donut. We've satisfied our sweet tooth and created the anytime donut, perfect for any occasion. Now we want to share our secret with you!</Typography>
                </Paper>
            </Grid>
        </Grid>
    </div>
  )
}
