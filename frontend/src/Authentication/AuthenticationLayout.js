import React from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
// "radial-gradient(100% 100% at 0% 100%, #f1e8c4 0%,#e3e5e6 100%), radial-gradient(100% 100% at 120% 80%, #f1e8c4 0%,#e3e5e6 100%)",
export default function AuthenticationLayout(props) {
  const { children } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          borderRadius: "16px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          maxWidth: "800px",
          width: "100%",
          padding: "16px",
          backgroundImage:
            "radial-gradient(50% 60% at 0% 100%, #f1e8c4 10%, #e3e5e63d 120%), radial-gradient(50% 50% at 125% 0%, #fff2be 30%, #e3e5e63d 100%), radial-gradient(50% 100% at 100% 100%, #ffeeaa 30%, #e3e5e63d 100%)",
        }}
      >
        <Box width={{ xs: "90%", sm: "50%" }}>
          <Box p={2}>
            <Box sx={{ width: "100%" }}>
              <Box>
                <Box
                  px={2}
                  py={1}
                  sx={{
                    width: "fit-content",
                    border: "1.8px solid #999",
                    color: "#666",
                    borderRadius: "20px",
                  }}
                >
                  Social Circle
                </Box>
              </Box>
            </Box>
            {children}
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "24px",
              height: "100%",
              display: "block",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="/main_poster.jpg"
              alt={"main_poster"}
              loading="lazy"
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
