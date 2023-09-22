import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import LoopOutlinedIcon from "@material-ui/icons/LoopOutlined";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
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

const Institute = () => {
    const [selectedCourse, setSelectedCourse] = useState(""); // State to track the selected course

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value); // Update the selected course when an option is selected
};
    return (
        <>
            <Grid container align="center" justify="center" alignItems="center">
              <Grid item xs={8} sm={8}>
                <Typography
                  variant="h4"
                  color="primary"
                  align="center"
                  style={{ marginTop: "30px" }}
                >
                  Welcome, Institute
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="secondary"
                  align="center"
                  style={{ marginTop: "30px" }}
                >
                  You may create a certificate on the Credentials
                   Blockchain below
                </Typography>
                <Paper style={{margin: "20px",
      padding: `20px`,
    minHeight: "75vh",
    maxWidth: "95%",
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",}}>
        <div style={{
    height: "100%",
    overflowY: "scroll",
    marginBottom: "2vh"}}>
                      <form
                        autoComplete="off"
                        style={{ marginTop: "3vh",display: "flex",
                        flexWrap: "wrap", }}
                      >
                        <Grid item xs={12} sm={12}>
                          <Typography variant="subtitle1">
                            Input the certificate details below to generate a
                            certificate
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <TextField
                            required
                            disabled
                            id="institute-name"
                            label="Institute Name"
                            style={{marginLeft:"20px",marginRight:"20px",width:520}}
                            defaultValue={"Gyan Ganga Institute of Technology and Sciences"}
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          <TextField
                            required
                            disabled
                            id="institute-acronym"
                            label="Institute Acronym"
                            style={{marginLeft:"20px",marginRight:"20px",width:520}}
                            defaultValue={"GGITS"}
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          <TextField
                            required
                            disabled
                            id="institute-website"
                            label="Institute Website"
                            style={{marginLeft:"20px",marginRight:"20px",width:520}}
                            defaultValue={"https://ggits.org/"}
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                          <TextField
                            required
                            id="firstname"
                            label="Full name"
                            style={{marginLeft:"20px",marginRight:"20px",width:250}}
                            margin="normal"
                            variant="outlined"
                          />
                          <TextField
                            required
                            id="lastname"
                            label="Grade"
                            style={{marginLeft:"1px",marginRight:"1px",width:250}}
                            margin="normal"
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <FormControl
                            required
                            variant="outlined"
                            style={{margin:"20px",minWidth:520}}
                          >
                            <InputLabel htmlFor="course-index">
                              Course
                            </InputLabel>
                            <Select
                              native
                              value={selectedCourse}
                            onChange={handleCourseChange}
                              label="Courses"
                            >
                            <option value={""}>Courses</option> {/* Default option */}
                            <option value={"Computer Science"}>Computer Science</option>
                            <option value={"Electrical"}>Electrical</option>
                            <option value={"Mechanics"}>Mechanics</option>
                            <option value={"Information Technology"}>Information Technology</option>
                            </Select>
                            </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} justifyContent>
                          <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                              <Button
                                type="submit"
                                style={{width:"400px"}}
                                variant="contained"
                                color="primary"
                                >
                        Generate Certificate
                    </Button>
                          </Box>
                          </Grid>
                        </form>
                        </div>

    </Paper>
                </Grid>
                </Grid>
                </>
    )
}

export default Institute