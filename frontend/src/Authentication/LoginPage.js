import React, { useState } from "react";
import Box from "@mui/material/Box";
import AuthenticationLayout from "./AuthenticationLayout";
import { Typography } from "@mui/material";
import CustomTextField from "../components/CustomTextField";
import { Link, Navigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../react_store/authSlice";

// "radial-gradient(100% 100% at 0% 100%, #f1e8c4 0%,#e3e5e6 100%), radial-gradient(100% 100% at 120% 80%, #f1e8c4 0%,#e3e5e6 100%)",
export default function LoginPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(isLoggedIn);

  return isLoggedIn ? (
    <Navigate to={"/"} />
  ) : (
    <AuthenticationLayout>
      <Box sx={{ width: "100%", margin: "60px 0px 20px 0px" }}>
        <Typography
          component={"p"}
          sx={{ fontSize: "20px", color: "#222", fontWeight: "300" }}
          align="center"
        >
          Welcome back
        </Typography>
        <Typography
          component={"p"}
          sx={{ fontSize: "12px", marginTop: "-4px", color: "#444" }}
          align="center"
        >
          Login here
        </Typography>
      </Box>

      <Box
        component={"form"}
        gap={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "24px 0px",
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <CustomTextField
          customStyle={{ border: "0.5px solid #e6ddb6" }}
          placeholder={"Password"}
          label={"Enter Password"}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box>
          <CustomButton
            variant="text"
            fullWidth
            sx={{
              background: "#fbd85f",
              color: "#000",
            }}
            onClick={() =>
              dispatch(login({ username: username, password: password }))
            }
          >
            Login
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
            to={"/signup"}
          >
            Create New Account
          </Link>
        </Box>
      </Box>
    </AuthenticationLayout>
  );
}
