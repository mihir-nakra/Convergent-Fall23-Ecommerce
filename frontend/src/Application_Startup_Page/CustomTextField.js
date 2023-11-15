import React from "react";
import { TextField } from "@mui/material";

export default function CustomTextField(props) {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required={props.required}
            fullWidth
            id={props.id}
            label={props.label}
            InputLabelProps={{ shrink: true }}
            placeholder={props.placeholder}
            autoFocus
            value={props.value}
            style={{
                backgroundColor: '#FFFFFF'
            }}
            onChange={(e) => props.stateFunc(e.target.value)}
        />
    );
}
