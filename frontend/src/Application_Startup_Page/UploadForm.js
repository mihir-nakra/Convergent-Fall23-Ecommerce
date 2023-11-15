import React from 'react';
import {
  TextField,
  Button,
} from "@mui/material";

export default function UploadForm() {


    return (
      // <form>
        <TextField style={{
          marginTop: 15,
          backgroundColor: '#FFFFFF',
          width: '100%'
        }}
        type="file"> 
        </TextField>
      // </form>
    );
  }