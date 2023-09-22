import React, { useState } from "react";

// External Components
import {
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Fade,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OpenInNewOutlinedIcon from "@material-ui/icons/OpenInNewOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px",
    minHeight: "91.5vh",
    lineHeight: "1.5",
  },
  paper: {
    [theme.breakpoints.up("sm")]: {
      borderRadius: "5%",
      marginRight: 30,
    },
    [theme.breakpoints.up(1150)]: {
      marginLeft: 50,
      width: 500,
    },
    height: "100%",
    marginTop: theme.spacing.unit * 6,
    marginBottom: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
}));

function ViewCert() {
  const [certId, setCertId] = useState("");
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h4"
        color="primary"
        align="center"
        style={{ marginTop: "30px" }}
      >
        Welcome User
      </Typography>
      <Typography
        variant="subtitle2"
        color="secondary"
        align="center"
        style={{ marginTop: "30px" }}
      >
        Enter Your Certificate URL
      </Typography>
      <Grid
        container
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: " center",
        }}
        direction="column"
        align
      >
        <Paper className={classes.paper} style={{ borderRadius: "10px" }}>
          <Card
            style={{
              border: "1px solid #363b98",
              minWidth: "250px",
              minHeight: "70px",
              marginBottom: "40px"
            }}
          >
            <CardContent style={{ textAlign: "center" }}>
              <Typography variant="h5" color="primary">
                Enter Certificate ID
              </Typography>
            </CardContent>
          </Card>
          <Box m={4} />
          <TextField
            id="outlined-basic"
            label="Certificate ID"
            variant="outlined"
            onChange={(e) => {
              setCertId(e.target.value);
            }}
            style={{ width: "400px" }}
          />
          <Box m={2} />
          {certId && (
            <>
              <Fade in={certId ? true : false} timeout={700}>
                <Box display="flex">
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${window.location.href.slice(
                          0,
                          -window.location.pathname.length
                        )}/certificate/${certId}`
                      );
                    }}
                    style={{ marginRight: "10px" }}
                  >
                    Copy link
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<OpenInNewOutlinedIcon />}
                    onClick={() => {
                      window.open(
                        `${window.location.href.slice(
                          0,
                          -window.location.pathname.length
                        )}/certificate/${certId}`
                      );
                    }}
                  >
                    Open link
                  </Button>
                </Box>
              </Fade>
            </>
          )}
        </Paper>
        <Box>
          <Typography variant="subtitle1" style={{ fontWeight: "900",textAlign:"center" }}>
            {" "}
            Example Certificates:
          </Typography>
          <Typography style={{ textAlign: "center" }}>
          c16a1b9c1596de6de71b20d9362490f8
          </Typography>
          <Typography style={{ textAlign: "center" }}>
          8112b1974c3750f78d1ef7830372d49a
          </Typography>
        </Box>
      </Grid>
    </>
  );
}

export default ViewCert;
