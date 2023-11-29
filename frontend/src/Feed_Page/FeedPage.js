import React from 'react'
import { startupData } from '../StartupData'
import { Container, Grid } from '@mui/material'

export default function FeedPage() {


    const startupDivs = () => {
        return startupData.map(startup => {
            return  ( <div style={{
            width: '38rem', 
            height: '10rem', 
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            paddingLeft: '2rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            marginBottom: '3rem',
            paddingRight: '2rem'
            }}>
            <Grid container>
            <Grid item xs={2}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    height: '120px',
                    width: '100px',
                    borderRadius: '10px',
                    marginTop: '1.3rem',

                }}>
                    <img style={{
                        height: '200px',
                        width: '200px',
                        borderRadius: '10px',
                        // marginRight: '2rem'
                    }} src="https://sugargeekshow.com/wp-content/uploads/2020/10/baked_donut_recipe_featured.jpg" alt="" />
                </div>
                    
                </Grid>
                <Grid item xs={9} style={{
                    marginLeft: '2rem'
                }}>
                     <h2 style={{fontFamily: 'Libre Franklin'}}>{startup.name}</h2>
                     <p style={{fontFamily: 'Libre Franklin', paddingRight: '1rem'}}>{startup.aboutUs}</p>
                </Grid>
            </Grid>
            
            {/* <img src="https://sugargeekshow.com/wp-content/uploads/2020/10/baked_donut_recipe_featured.jpg" alt="" /> */}
        </div> )
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
        <h1 style={{
            fontFamily: 'Libre Franklin',
            paddingBottom: '1.5rem'
        }}>
        Home
        </h1>

        <h3 style={{
            fontFamily: 'Libre Franklin',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            paddingBottom: '.25rem'
        }}
        >
        Featured Startup
        </h3>

        <div style={{
            width: '40rem', 
            height: '20rem', 
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
            }}>
        </div>

        <div style={{width: '1140px', height: '5rem'}}></div>


       {startupDivs()}

    </div>
  )
}
