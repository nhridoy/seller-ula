import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const steps = [
  "Seller Info",
  "Phone Number",
  "Phone Verify",
  "Email",
  "Email Verify",
  "Password",
];

const FormPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [birthDate, setBirthDate] = React.useState(null);
  const [skipped, setSkipped] = React.useState(new Set());
  const [city, setCity] = React.useState(null);
  const [thana, setThana] = React.useState(null);
  const { addressData } = useStateContext();
  console.log(addressData.data.thana);
  const isStepOptional = (step) => {
    return step === 4;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box py={4} px={8}>
      <Paper
        sx={{
          background: "#fff",
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
        elevation={2}
      >
        <img src="/images/ula_2.png" alt="Ula Logo" width={80} />
        <Typography variant="h4" color="#695da9">
          BECOME A SELLER
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
                {activeStep === 0 ? (
                  <Grid container spacing={2}>
                    <Grid
                      item
                      md={6}
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <TextField
                        size="small"
                        fullWidth
                        id="seller_name"
                        label="Seller Name"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                      <TextField
                        size="small"
                        fullWidth
                        id="seller_address"
                        label="Seller Address"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                      <DatePicker
                        label="Date of Birth"
                        value={birthDate}
                        onChange={(newValue) => {
                          setBirthDate(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            size="small"
                            {...params}
                            sx={{
                              "& label.Mui-focused": {
                                color: "#695da9",
                              },
                              "& .MuiInput-underline:after": {
                                borderBottomColor: "#695da9",
                              },
                              "& .MuiOutlinedInput-root": {
                                //   "& fieldset": {
                                //     borderColor: "red",
                                //   },
                                //   "&:hover fieldset": {
                                //     borderColor: "yellow",
                                //   },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#695da9",
                                },
                              },
                            }}
                          />
                        )}
                      />
                      <TextField
                        size="small"
                        fullWidth
                        type="number"
                        id="nid_number"
                        label="NID Number"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                      <TextField
                        size="small"
                        fullWidth
                        id="phone_number"
                        label="Phone Number"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                      <TextField
                        size="small"
                        fullWidth
                        id="designation"
                        label="Designation"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                      <TextField
                        size="small"
                        fullWidth
                        id="bank_account"
                        label="Bank Account"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                      <TextField
                        size="small"
                        fullWidth
                        id="shop_name"
                        label="Shop Name"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                      <TextField
                        size="small"
                        fullWidth
                        id="shop_address"
                        label="Shop Address"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                      <Autocomplete
                        disablePortal
                        fullWidth
                        size="small"
                        id="combo-box-demo"
                        options={addressData.data.city}
                        getOptionLabel={(option) => option.name}
                        onChange={(e, data) => setCity(data)}
                        value={city}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="City"
                            sx={{
                              "& label.Mui-focused": {
                                color: "#695da9",
                              },
                              "& .MuiInput-underline:after": {
                                borderBottomColor: "#695da9",
                              },
                              "& .MuiOutlinedInput-root": {
                                //   "& fieldset": {
                                //     borderColor: "red",
                                //   },
                                //   "&:hover fieldset": {
                                //     borderColor: "yellow",
                                //   },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#695da9",
                                },
                              },
                            }}
                          />
                        )}
                      />
                      {city && (
                        <Autocomplete
                          disablePortal
                          fullWidth
                          size="small"
                          id="combo-box-demo"
                          options={addressData.data.thana.filter(
                            (item) => item.city === city.id
                          )}
                          getOptionLabel={(option) => option.name}
                          onChange={(e, data) => setThana(data)}
                          value={thana}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="City"
                              sx={{
                                "& label.Mui-focused": {
                                  color: "#695da9",
                                },
                                "& .MuiInput-underline:after": {
                                  borderBottomColor: "#695da9",
                                },
                                "& .MuiOutlinedInput-root": {
                                  //   "& fieldset": {
                                  //     borderColor: "red",
                                  //   },
                                  //   "&:hover fieldset": {
                                  //     borderColor: "yellow",
                                  //   },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "#695da9",
                                  },
                                },
                              }}
                            />
                          )}
                        />
                      )}
                    </Grid>
                    <Grid
                      item
                      md={6}
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Button
                        sx={{ p: 0.85 }}
                        variant="outlined"
                        fullWidth
                        component="label"
                      >
                        Upload Seller Signeture
                        <input type="file" hidden />
                      </Button>
                      <Button
                        sx={{ p: 0.85 }}
                        variant="outlined"
                        fullWidth
                        component="label"
                      >
                        Upload NID Image
                        <input type="file" hidden />
                      </Button>
                      <Button
                        sx={{ p: 0.85 }}
                        variant="outlined"
                        fullWidth
                        component="label"
                      >
                        Upload Passport Size Image
                        <input type="file" hidden />
                      </Button>
                      <Button
                        sx={{ p: 0.85 }}
                        variant="outlined"
                        fullWidth
                        component="label"
                      >
                        Upload Shop Logo
                        <input type="file" hidden />
                      </Button>
                      <Button
                        sx={{ p: 0.85 }}
                        variant="outlined"
                        fullWidth
                        component="label"
                      >
                        Upload Shop Cover Photo
                        <input type="file" hidden />
                      </Button>
                      <Button
                        sx={{ p: 0.85 }}
                        variant="outlined"
                        fullWidth
                        component="label"
                      >
                        Upload Trade License
                        <input type="file" hidden />
                      </Button>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Typography fontWeight="bold">FIRST WITNESS</Typography>
                      <TextField
                        size="small"
                        fullWidth
                        id="first_witness_name"
                        label="Name"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                      <TextField
                        size="small"
                        fullWidth
                        id="first_witness_phone"
                        label="Phone"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                      <TextField
                        size="small"
                        fullWidth
                        id="first_witness_nid"
                        label="NID"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                      <TextField
                        size="small"
                        fullWidth
                        id="first_witness_address"
                        label="Address"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                      <Button
                        sx={{ p: 0.85 }}
                        variant="outlined"
                        fullWidth
                        component="label"
                      >
                        Upload Signeture
                        <input type="file" hidden />
                      </Button>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Typography fontWeight="bold">SECOND WITNESS</Typography>
                      <TextField
                        disabled
                        defaultValue="Md. Rafiqul Islam"
                        size="small"
                        fullWidth
                        id="second_witness_name"
                        label="Name"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                      <TextField
                        disabled
                        defaultValue="01710069741"
                        size="small"
                        fullWidth
                        id="second_witness_phone"
                        label="Phone"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                      <TextField
                        disabled
                        defaultValue="7339927266"
                        size="small"
                        fullWidth
                        id="second_witness_nid"
                        label="NID"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                      <TextField
                        disabled
                        defaultValue="264/B, West 
                      Manikdi, Dhaka Cantonment, Dhaka-1206"
                        size="small"
                        fullWidth
                        id="second_witness_address"
                        label="Address"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#695da9",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#695da9",
                          },
                          "& .MuiOutlinedInput-root": {
                            //   "& fieldset": {
                            //     borderColor: "red",
                            //   },
                            //   "&:hover fieldset": {
                            //     borderColor: "yellow",
                            //   },
                            "&.Mui-focused fieldset": {
                              borderColor: "#695da9",
                            },
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                ) : activeStep === 1 ? (
                  <Box>
                    <TextField
                      size="small"
                      fullWidth
                      id="seller_phone"
                      label="Phone"
                      variant="outlined"
                      sx={{
                        "& label.Mui-focused": {
                          color: "#695da9",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "#695da9",
                        },
                        "& .MuiOutlinedInput-root": {
                          //   "& fieldset": {
                          //     borderColor: "red",
                          //   },
                          //   "&:hover fieldset": {
                          //     borderColor: "yellow",
                          //   },
                          "&.Mui-focused fieldset": {
                            borderColor: "#695da9",
                          },
                        },
                      }}
                    />
                  </Box>
                ) : activeStep === 2 ? (
                  <Box>
                    <TextField
                      size="small"
                      fullWidth
                      id="OTP"
                      label="OTP"
                      variant="outlined"
                      sx={{
                        "& label.Mui-focused": {
                          color: "#695da9",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "#695da9",
                        },
                        "& .MuiOutlinedInput-root": {
                          //   "& fieldset": {
                          //     borderColor: "red",
                          //   },
                          //   "&:hover fieldset": {
                          //     borderColor: "yellow",
                          //   },
                          "&.Mui-focused fieldset": {
                            borderColor: "#695da9",
                          },
                        },
                      }}
                    />
                  </Box>
                ) : activeStep === 3 ? (
                  <Box>
                    <TextField
                      size="small"
                      fullWidth
                      id="email"
                      type="email"
                      label="Email"
                      variant="outlined"
                      sx={{
                        "& label.Mui-focused": {
                          color: "#695da9",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "#695da9",
                        },
                        "& .MuiOutlinedInput-root": {
                          //   "& fieldset": {
                          //     borderColor: "red",
                          //   },
                          //   "&:hover fieldset": {
                          //     borderColor: "yellow",
                          //   },
                          "&.Mui-focused fieldset": {
                            borderColor: "#695da9",
                          },
                        },
                      }}
                    />
                  </Box>
                ) : activeStep === 4 ? (
                  <Box>
                    <TextField
                      size="small"
                      fullWidth
                      id="email_otp"
                      type="number"
                      label="OTP"
                      variant="outlined"
                      sx={{
                        "& label.Mui-focused": {
                          color: "#695da9",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "#695da9",
                        },
                        "& .MuiOutlinedInput-root": {
                          //   "& fieldset": {
                          //     borderColor: "red",
                          //   },
                          //   "&:hover fieldset": {
                          //     borderColor: "yellow",
                          //   },
                          "&.Mui-focused fieldset": {
                            borderColor: "#695da9",
                          },
                        },
                      }}
                    />
                  </Box>
                ) : (
                  <Box>
                    <TextField
                      size="small"
                      fullWidth
                      id="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      sx={{
                        "& label.Mui-focused": {
                          color: "#695da9",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "#695da9",
                        },
                        "& .MuiOutlinedInput-root": {
                          //   "& fieldset": {
                          //     borderColor: "red",
                          //   },
                          //   "&:hover fieldset": {
                          //     borderColor: "yellow",
                          //   },
                          "&.Mui-focused fieldset": {
                            borderColor: "#695da9",
                          },
                        },
                      }}
                    />
                  </Box>
                )}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default FormPage;
