import React from "react";
import { TextField, FormControl, InputLabel, Box } from "@mui/material";
export default function CustomTextField(props) {
  const { value, onChange, customStyle, placeholder, label, type } = props;
  return (
    <Box>
      <InputLabel sx={{ fontSize: "12px", color: "#999", paddingLeft: "16px" }}>
        {label}
      </InputLabel>
      <FormControl
        variant="filled"
        sx={{
          ...customStyle,
          backgroundColor: "#fff",
          display: "block",
          padding: "8px 16px",
          borderRadius: "20px !important",
        }}
      >
        <TextField
          fullWidth
          slotProps={{
            input: {
              type: type,
              disableUnderline: true,
            },
          }}
          onChange={onChange}
          value={value}
          variant="standard"
          placeholder={placeholder}
        />
      </FormControl>
    </Box>
  );
}
