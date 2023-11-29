import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, MenuItemStyles } from "react-pro-sidebar";
import { Button, Grid } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedPage from "./Feed_Page/FeedPage";
import MatchesInvestorView from "./Matches_Pages/MatchesInvestorView";
import MatchesStartupView from "./Matches_Pages/MatchesStartupView";


export default function Dashboard() {

    const pages = {
      Home: 0,
      Profile: 1,
      Messages: 2,
      Matches: 3,
      Settings: 4
    }

    const [page, setPage] = useState(pages.Home);

    const getPage = () => {
      if (page === pages.Home) {
        return <FeedPage />
      } else if (page === pages.Profile) {
        return <h1>Profile Page</h1>
      } else if (page === pages.Messages) {
        return <h1>Messages Page</h1>
      } else if (page === pages.Matches) {
        return <MatchesStartupView />
      } else if (page === pages.Settings) {
        return <h1>Settings Page</h1>
      }
    }


    const menuItemStyles = {
      button: {
        '&:hover': {
          backgroundColor: '#6d8ba7'
        },
        justifySelf: 'center',
        paddingLeft: '3.2rem',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem'
      },

      label: {
        color: "#ffffff",
        fontFamily: "Nunito",
        fontSize: '1.3rem',
        opacity: ".7",
      }
    }

    return <Grid container style={{marginLeft: '14.5rem'}}>
      <Grid item spacing={2}>
        <Sidebar 
        width="15rem"
        rootStyles={{
          justifyContent: 'center',
          position: 'fixed',
          left: '0'
            }}
        backgroundColor="#496E91">
            <Menu menuItemStyles={menuItemStyles}>
              <div style={{height: '10rem'}}></div>
              <MenuItem onClick={() => setPage(pages.Home)} icon={<HomeIcon style={{color: "#ffffff"}}/>}> Home </MenuItem>
              <MenuItem onClick={() => setPage(pages.Profile)} icon={<PersonIcon style={{color: "#ffffff"}}/>}> Profile </MenuItem>
              <MenuItem onClick={() => setPage(pages.Messages)} icon={<MessageIcon style={{color: "#ffffff"}} />}> Messages </MenuItem>
              <MenuItem onClick={() => setPage(pages.Matches)} icon={<ArticleIcon style={{color: "#ffffff"}} />}> Matches </MenuItem>
              <MenuItem onClick={() => setPage(pages.Settings)} icon={<SettingsIcon style={{color: "#ffffff"}} />}> Settings </MenuItem>
              <div style={{height: '20rem'}}></div>
            </Menu>
          </Sidebar>
      </Grid>
      <Grid item spacing={10}>
            {getPage()}
      </Grid>
      
    </Grid>;
}
