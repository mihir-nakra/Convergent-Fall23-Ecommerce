import React, { useState } from 'react'
import { startupData, investorData } from '../StartupData'
import { Avatar, Container, Grid, Typography, Paper } from '@mui/material'

export default function FeedPage() {

    const pageTypes = {
        investor: 0,
        startup: 1
    }

    const [pageType, setPageType] = useState(pageTypes.investor);

    const getFeatureDiv = () => {
        let item = {}
        if (pageType === pageTypes.investor) {
            item = investorData[0];
        } else {
            item = startupData[0];
        }

        return <div style={{
            width: '60rem', 
            height: '20rem', 
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            padding: '1.5rem',
            
            }}>
            <Grid container spacing={5}>
                <Grid item xs={5}>
                    <img 
                    style={{
                        
                        height: '20rem',
                        width: '20rem',
                        borderRadius: '10px',
                        // marginRight: '2rem'
                    }} src={item.logo} alt="" />
                </Grid>
                <Grid item xs={7}>
                    <h2 style={{
                        margin: 0,
                        fontFamily: 'Libre Franklin',
                    }}>{item.name}</h2>
                    <hr />
                    <em style={{fontFamily: 'Libre Franklin', color: 'gray'}}>{item.tagline}</em>
                    <p style={{fontFamily: 'Libre Franklin', fontSize: '1.2rem'}}>{item.aboutUs}</p>
                </Grid>
            </Grid>
        </div>
    }

    const getPosts = data => {
        return data.map(item => {
            return <Grid item xs={12} style={{marginLeft:'14rem'}}>
                <Paper style={{
                    width: '50%',
                    padding:'1rem'
                }}>
                    <Grid container>
                        <Grid item xs={4}>
                        <Avatar style={{
                            height: '50px',
                            width: '50px',
                            borderRadius: "50px"
                            
                        }} src={item.logo} />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography style={{
                                fontFamily: 'Libre Franklin',
                                fontWeight: 'bold',
                                fontSize: '2rem',
                                marginBottom: '1rem'
                            }}>{item.name}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <img style={{width: '100%', height: '400px'}} src={item.post} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography style={{
                            marginBottom: '1rem',
                            marginTop: '1rem'
                        }}>{item.aboutUs}</Typography>
                    </Grid>
                </Paper>
            </Grid>
        })
        
    }


  return (
    <div style={{
        paddingLeft: '4rem',
        paddingTop: '5rem',
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F5F5',
        right: 0,

        // position: 'fixed'
    }}>
        <h1 
        onClick={() => setPageType(old => {
            if (old === pageTypes.investor)  {
                return pageTypes.startup
            } else {
                return pageTypes.investor
            }
        })}
        style={{
            fontFamily: 'Libre Franklin',
            paddingBottom: '1.5rem'
        }}>
        {pageType === pageTypes.startup ? "Investor" : "Startup"} Home
        </h1>
{/* 
        <h3 style={{
            fontFamily: 'Libre Franklin',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            paddingBottom: '.25rem'
        }}
        >
        Featured {pageType === pageTypes.startup ? "Startup" : "Investor"}
        </h3> */}

        {/* {getFeatureDiv()} */}

        {/* <div style={{width: '1140px', height: '5rem'}}></div> */}


       {/* {makePosts()} */}

       <Grid container spacing={5} style={{
        
       }}>
            {getPosts(pageType === pageTypes.investor ? investorData : startupData)}
       </Grid>

    </div>
  )
}
