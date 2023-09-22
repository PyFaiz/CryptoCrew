import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  Box,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from "@material-ui/core";
const Cert = () => {
    const DetailGroup = (props) => {
        return (
          <>
            <Box>
              <Box fontSize={15} fontWeight={500} color="#363b98" marginBottom="40px">
                {props.label}
              </Box>
              <Box m={1} />
              <Box fontSize={18} fontWeight={600} color="#3a3a3a">
                {props.content}
              </Box>
              <Box m={3} />
            </Box>
          </>
        );
      };
      
    return (
        <>
          <Paper style={{marginTop: "20px",
    flexDirection: "column",
    alignItems: "center",   
    padding: "20px",
    borderRadius: "10px",}}>
            <Grid container>
              <Grid item xs={12} style={{backgroundColor: "white",
    background: "linear-gradient(109.96deg,#363e98,#8ac6ff),#fff",
    padding: "24px",
    borderRadius: "10px 10px 0 0 ",
    fontSize: "24px",
    fontWeight: "400",
    color: "white",}}>
                Certificate Information
              </Grid>
    
              <Grid item xs={12} style={{backgroundColor: "white",
    padding: "24px",}}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  marginBottom = "40px"
                >
                  <Grid item>
                    <DetailGroup label="Student Name (Grade) : " content={"Nitin Sharma 9.3"} />
                  </Grid>
                </Grid>
              </Grid>
    
              <Grid item xs={12} style={{backgroundColor: "white",
    padding: "24px",
    borderTop: "1px solid #6066af",
    borderBottom: "1px solid #6066af",}}>
                <Grid container>
                  <Grid item xs={12} lg={6}>
                    <DetailGroup label="Course Name" content={"CCNA"} />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <DetailGroup label="Institute Name" content={"Gyan Ganga Institute of Technology and Sciences"} />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <DetailGroup
                      label="Institute Acronym"
                      content={"GGITS"}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <DetailGroup label="Institute Link" content={"https://ggits.org/"} />
                  </Grid>
                </Grid>
              </Grid>
    
              <Grid item sm={12} style={{backgroundColor: "white",
    padding: "24px",
    borderRadius: "0 0 10px 10px",}}>
                <DetailGroup label="Issuance Date" content={"16/03/2003"} />
              </Grid>
            </Grid>
          </Paper>
        </>
      );
  }
  
  export default Cert;