import React from "react";
import Box from "@mui/material/Box";
import AuthenticationLayout from "./AuthenticationLayout";
import { Typography } from "@mui/material";
import CustomTextField from "../components/CustomTextField";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";

export default function SignupPage() {
  return (
    <AuthenticationLayout>
      <Box sx={{ width: "100%", margin: "40px 0px 0px 0px" }}>
        <Typography
          component={"p"}
          sx={{ fontSize: "20px", color: "#222", fontWeight: "300" }}
          align="center"
        >
          Create New Account
        </Typography>
        <Typography
          component={"p"}
          sx={{ fontSize: "12px", marginTop: "4px", color: "#444" }}
          align="center"
        >
          No subscription fee. Sign Up Now.
        </Typography>
      </Box>

      <Box
        component={"form"}
        gap={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px 0px",
          maxWidth: "300px",
          width: "100%",
          margin: "auto",
        }}
      >
        <CustomTextField
          customStyle={{ border: "0.5px solid #e6ddb6" }}
          placeholder={"Username"}
          label={"Enter Username"}
          type={"text"}
        />
        <CustomTextField
          customStyle={{ border: "0.5px solid #e6ddb6" }}
          placeholder={"Name"}
          label={"Enter Your Name"}
          type={"text"}
        />
        <CustomTextField
          customStyle={{ border: "0.5px solid #e6ddb6" }}
          placeholder={"Email Id"}
          label={"Enter Your Email Id"}
          type={"text"}
        />
        <CustomTextField
          customStyle={{ border: "0.5px solid #e6ddb6" }}
          placeholder={"Password"}
          label={"Enter Password"}
          type={"password"}
        />
        <Box>
          <CustomButton
            variant="text"
            fullWidth
            sx={{
              background: "#fbd85f",
              color: "#000",
            }}
          >
            Submit
          </CustomButton>
        </Box>
        <Typography align="center">OR</Typography>
        <Box>
          <Link
            style={{
              color: "#000",
              width: "100%",
              display: "block",
              textTransform: "none",
              textDecoration: "none",
              textAlign: "center",
            }}
            to={"/login"}
          >
            Go Back to Login
          </Link>
        </Box>
      </Box>
    </AuthenticationLayout>
  );
}
