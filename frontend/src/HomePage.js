import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Box,
  Grid,
} from "@mui/material";
// import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'

export default function HomePage() {
  const navigate = useNavigate();

  const {currentUser} = useAuth();

  useEffect(() => {
    if (!currentUser) {
      //kick them out
      navigate("/login")
    }
  }, [currentUser])
}