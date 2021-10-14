import React, { useState, useEffect, Fragment } from "react";
import Layout from "../Components/Layout";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SpidSelect from "./SpidSelect";
import "typeface-titillium-web";
//import ClearIcon from '@mui/icons-material/Clear';
import { IDPS } from "../IDPS";
import { getJSDocImplementsTags } from "typescript";
import SpidIcon from "../Icons/SpidIcon.svg";
import CIEIcon from "../Icons/CIEIcon.svg";
interface LoginProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
}

export const spidIcon = () => {
  return (
    <Icon sx={{ width: "25px", height: "25px" }}>
      <img src={SpidIcon} width="25" height="25" />
    </Icon>
  );
};

export const cieIcon = () => {
  return (
    <Icon sx={{ width: "25px", height: "25px" }}>
      <img src={CIEIcon} width="25" height="25" />
    </Icon>
  );
};

const Login = ({
  primary = false,
  size = "medium",
  backgroundColor,
  ...props
}: LoginProps) => {
  const [showIDPS, setShowIDPS] = useState(false);

  const goCIE = () => {
    window.location.replace(`localhost`);
  };

  useEffect(() => {}, []);

  if (showIDPS) {
    return <SpidSelect onBack={() => setShowIDPS(false)} />;
  }

  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <Layout>
      <Box style={{ marginTop: "80px", marginBottom: "80px", width: "100%" }}>
        <Typography
          component="h1"
          variant="h5"
          style={{
            padding: "10px 0px",
            fontFamily: "Titillium Web",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "32px",
            lineHeight: "48px",
            textAlign: "center",
            color: "#17324D",
          }}
        >
          Accedi con SPID/CIE
        </Typography>
        <Typography
          style={{
            marginBottom: "60px",
            fontFamily: "Titillium Web",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "24px",
            textAlign: "center",
            color: "#17324D",
          }}
        >
          Seleziona la modalità di autenticazione che preferisci e inizia il
          processo di adesione
        </Typography>

        <Grid
          container
          style={{ flexGrow: 1, width: "100%" }}
          justifyContent={"center"}
        >
          <Grid item xs={12} md={6} lg={5}>
            <Paper elevation={16}>
              <Typography
                style={{
                  padding: "40px 0px",
                  fontFamily: "Titillium Web",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "24px",
                  textAlign: "center",
                  color: "#17324D",
                }}
                component="div"
              >
                Login
              </Typography>

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{
                  padding: "16px 0px",
                }}
              >
                <Button
                  style={{
                    background: "#0073E6",
                    borderRadius: "4px",
                    width: "70%",
                    height: "50px",
                  }}
                  onClick={() => setShowIDPS(true)}
                  variant="contained"
                  startIcon={spidIcon()}
                >
                  <div
                    style={{
                      fontFamily: "Titillium Web",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "16px",
                      lineHeight: "18px",
                      color: "#FFFFFF",
                      flex: "none",
                      margin: "0px 8px",
                    }}
                  >
                    {" "}
                    Autenticati con SPID
                  </div>
                </Button>
              </Box>

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{
                  padding: "16px 0px",
                }}
              >
                <Button
                  style={{
                    background: "#0073E6",
                    borderRadius: "4px",
                    width: "70%",
                    height: "50px",
                  }}
                  variant="contained"
                  startIcon={cieIcon()}
                >
                  <div
                    style={{
                      fontFamily: "Titillium Web",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "16px",
                      lineHeight: "18px",
                      color: "#FFFFFF",
                      flex: "none",
                      margin: "0px 8px",
                    }}
                  >
                    {" "}
                    Autenticati con CIE
                  </div>
                </Button>
              </Box>

              <Divider variant="middle" />

              <Typography
                style={{
                  fontFamily: "Titillium Web",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "24px",
                  textAlign: "center",
                  color: "#17324D",
                  padding: "24px 0px",
                }}
                component="div"
              >
                Non hai SPID?
                <Link href={IDPS.richiediSpid}>{" Scopri di più"}</Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Typography
          style={{
            fontFamily: "Titillium Web",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "24px",
            textAlign: "center",
            color: "#17324D",
            padding: "24px 0px",
          }}
          component="div"
        >
          Prima di proseguire prendi visione dell'{" "}
          <Link href="#">{" Informativa sulla Privacy"}</Link>
        </Typography>
      </Box>
    </Layout>
  );
};

export default Login;
