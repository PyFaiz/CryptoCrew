import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
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

const ListText = withStyles({
  primary: {
    fontSize: "1.5vh",
    padding: "0.5vh",
    margin: 0,
    width: "90%",
  },
})(ListItemText);


const CAP = () => {
    return (
      <>
        <Typography
          variant="h4"
          color="primary"
          align="center"
          style={{ marginTop: "30px" }}
        >
          Welcome,Authority
        </Typography>
        
      <div>
          <Grid
            container
            style={{ height: "100%", justifyContent: "center" }}
          >
            <Paper style={{borderRadius: "5%",marginRight: 10,marginLeft: 10,
      width: 500,height: "100%",
      marginTop: "20px",
      marginBottom: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px"
      }}>
              <Card
                style={{
                  border: "1px solid #363b98",
                  minWidth: "250px",
                  minHeight: "70px",
                }}
              >
                <CardContent style={{ textAlign: "center" }}>
                  <Typography variant="h5" color="primary">
                    Institute Registration
                  </Typography>
                </CardContent>
              </Card>
              <Box m={1} />
                  <Typography
                    variant="h6"
                    style={{ alignSelf: "flex-start", marginBottom: "4px",marginTop:"10px" }}
                  >
                    Details
                  </Typography>
                  <form
                    style={{width: "100%",}}
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="email">
                        Institute Account Address
                      </InputLabel>
                      <Input
                        id="address"
                        label="Institute Account Address"
                        type="name"
                        autoFocus
                      />
                      </FormControl>
                      <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="email">Institute Name</InputLabel>
                      <Input
                        id="address"
                        label="Institute Name"
                        type="name"
                        autoFocus
                      />
                      </FormControl>
                      <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="email">Institute Acronym</InputLabel>
                      <Input
                        id="address"
                        label="Institute Acronym"
                        type="name"
                        autoFocus
                      />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="email">
                        Institute Website Link
                      </InputLabel>
                      <Input
                        id="address"
                        label="Institute Website"
                        type="name"
                        autoFocus
                      />
                    </FormControl>
                    <Box m={3} />
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignContent="center"
                    >
                      <Typography
                        variant="h6"
                        style={{
                          alignSelf: "flex-start",
                          marginBottom: "0px",
                        }}
                      >
                        Courses
                        <IconButton
                        color="primary"
                        style={{
                          alignSelf: "flex-end"
                        }}  
                      >
                        <AddCircleOutlineIcon />
                      </IconButton>
                      </Typography>
                      
                      <Button
                      onClick={() => this.openDialog()}
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Add Institute
                    </Button>
                    </Box>
                  </form>
            </Paper>
          </Grid>
        </div></>
    );
    }
  export default CAP;