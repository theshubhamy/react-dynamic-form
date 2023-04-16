import React, { useState } from "react";
import { Box, TextField, Grid, Button, Typography } from "@mui/material";

const App = () => {
  const [formFields, setFormFields] = useState([
    { name: "", email: "", phone: "" },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      name: "",
      email: "",
      phone: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h3" textAlign={"center"} margin={3}>
        Dynamic Form
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        {formFields.map((form, index) => {
          return (
            <Grid container spacing={2} key={index} marginBottom={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  name="name"
                  label="Name"
                  size="small"
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.name}
                />
              </Grid>

              <Grid item xs={12} sm={3}>
                <TextField
                  name="email"
                  label="email"
                  size="small"
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.email}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  name="phone"
                  size="small"
                  label="Phone"
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.phone}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Button
                  sx={{ width: "100%" }}
                  onClick={() => removeFields(index)}
                  variant="contained"
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          );
        })}
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            marginTop: 3,
            gap: 1,
          }}
        >
          <Button variant="contained" onClick={addFields}>
            Add More
          </Button>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
      <Box>
        <pre>
          <code>{JSON.stringify(formFields)}</code>
        </pre>
      </Box>
    </Box>
  );
};

export default App;
