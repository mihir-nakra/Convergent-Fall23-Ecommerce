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
  return <div>
    <a href="/startup-app">startup application</a>
    <br />
    <a href="/investor-app">investor application</a>
    <br />
    <a href="/dashboard">dashboard</a>
  </div>
}