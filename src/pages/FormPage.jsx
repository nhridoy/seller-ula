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
import { toast } from "react-toastify";
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
  const [skipped, setSkipped] = React.useState(new Set());
  const [sellerName, setSellerName] = React.useState(null);
  const [sellerAddress, setSellerAddress] = React.useState(null);
  const [birthDate, setBirthDate] = React.useState(null);
  const [sellerNID, setSellerNID] = React.useState(null);
  const [sellerDesignation, setSellerDesignation] = React.useState(null);
  const [sellerBank, setSellerBank] = React.useState(null);
  const [sellerShopName, setSellerShopName] = React.useState(null);
  const [sellerShopAddress, setSellerShopAddress] = React.useState(null);
  const [sellerSignature, setSellerSignature] = React.useState(null);
  const [sellerNIDImage, setSellerNIDImage] = React.useState(null);
  const [sellerPassportImage, setSellerPassportImage] = React.useState(null);
  const [sellerShopLogo, setSellerShopLogo] = React.useState(null);
  const [sellerShopCover, setSellerShopCover] = React.useState(null);
  const [sellerShopCheck, setSellerShopCheck] = React.useState(null);
  const [sellerShopLicense, setSellerShopLicense] = React.useState(null);
  const [firstWitnessName, setFirstWitnessName] = React.useState(null);
  const [firstWitnessPhone, setFirstWitnessPhone] = React.useState(null);
  const [firstWitnessNID, setFirstWitnessNID] = React.useState(null);
  const [firstWitnessAddress, setFirstWitnessAddress] = React.useState(null);
  const [firstWitnessSignature, setFirstWitnessSignature] =
    React.useState(null);
  const [city, setCity] = React.useState(null);
  const [thana, setThana] = React.useState(null);
  const { addressData } = useStateContext(null);

  const isStepOptional = (step) => {
    return step === 4;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = (e) => {
    if (
      activeStep === 0 &&
      (!sellerName ||
        !sellerAddress ||
        !birthDate ||
        !sellerNID ||
        !sellerDesignation ||
        !sellerBank ||
        !sellerShopName ||
        !sellerShopAddress ||
        !city ||
        !thana ||
        !sellerSignature ||
        !sellerNIDImage ||
        !sellerPassportImage ||
        !sellerShopLogo ||
        !sellerShopCover ||
        !sellerShopCheck ||
        !sellerShopLicense ||
        !firstWitnessName ||
        !firstWitnessPhone ||
        !firstWitnessNID ||
        !firstWitnessAddress ||
        !firstWitnessSignature)
    ) {
      toast.error("Please fill up all filled");
      return;
    } else {
      toast.success("hello");
      console.log({
        seller_name: sellerName,
        signature: sellerSignature,
        seller_address: sellerAddress,
        date_of_birth: birthDate,
        nid_number: sellerNID,
        phone_number: "",
        password: "",
        nid_image: sellerNIDImage,
        designation: sellerDesignation,
        passport_image: sellerPassportImage,
        bank_account: sellerBank,
        cheque: sellerShopCheck,
        shop_name: sellerShopName,
        city: city.id,
        shop_address: sellerShopAddress,
        shop_logo: sellerShopLogo,
        shop_cover: sellerShopCover,
        trade_licence: sellerShopLicense,
        witness_1_name: firstWitnessName,
        witness_1_phone: firstWitnessPhone,
        witness_1_nid: firstWitnessNID,
        witness_1_address: firstWitnessAddress,
        witness_1_signature: firstWitnessSignature,
      });
      return;
    }
    toast.success("Next");
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
                        required
                        onChange={(e) => setSellerName(e.target.value)}
                        value={sellerName}
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
                        required
                        onChange={(e) => setSellerAddress(e.target.value)}
                        value={sellerAddress}
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
                            required
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
                        required
                        onChange={(e) => setSellerNID(e.target.value)}
                        value={sellerNID}
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
                        required
                        onChange={(e) => setSellerDesignation(e.target.value)}
                        value={sellerDesignation}
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
                        required
                        onChange={(e) => setSellerBank(e.target.value)}
                        value={sellerBank}
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
                        required
                        onChange={(e) => setSellerShopName(e.target.value)}
                        value={sellerShopName}
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
                        required
                        onChange={(e) => setSellerShopAddress(e.target.value)}
                        value={sellerShopAddress}
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
                            required
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
                              required
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
                        sx={{
                          p: 0.85,
                          color: "#7155e5",
                          borderColor: "#7155e5",
                          "&:hover": {
                            backgroundColor: "#7155e510",
                            borderColor: "#7155e5",
                            boxShadow: "none",
                          },
                        }}
                        variant="outlined"
                        fullWidth
                        component="label"
                      >
                        Upload Seller Signature{" "}
                        {sellerSignature ? "(Selected)" : "(Required)"}
                        <input
                          required
                          accept="image/*"
                          onChange={(e) =>
                            setSellerSignature(e.target.files[0])
                          }
                          onClick={(event) => {
                            event.target.value = null;
                          }}
                          //   value={sellerSignature}
                          type="file"
                          hidden
                        />
                      </Button>
                      <Button
                        sx={{
                          p: 0.85,
                          color: "#7155e5",
                          borderColor: "#7155e5",
                          "&:hover": {
                            backgroundColor: "#7155e510",
                            borderColor: "#7155e5",
                            boxShadow: "none",
                          },
                        }}
                        variant="outlined"
                        fullWidth
                        component="label"
                      >
                        Upload NID Image{" "}
                        {sellerNIDImage ? "(Selected)" : "(Required)"}
                        <input
                          required
                          accept="image/*"
                          onChange={(e) => setSellerNIDImage(e.target.files[0])}
                          onClick={(event) => {
                            event.target.value = null;
                          }}
                          //   value={sellerNIDImage}
                          type="file"
                          hidden
                        />
                      </Button>
                      <Button
                        sx={{
                          p: 0.85,
                          color: "#7155e5",
                          borderColor: "#7155e5",
                          "&:hover": {
                            backgroundColor: "#7155e510",
                            borderColor: "#7155e5",
                            boxShadow: "none",
                          },
                        }}
                        variant="outlined"
                        fullWidth
                        component="label"
                      >
                        Upload Passport Size Image{" "}
                        {sellerPassportImage ? "(Selected)" : "(Required)"}
                        <input
                          required
                          accept="image/*"
                          onChange={(e) =>
                            setSellerPassportImage(e.target.files[0])
                          }
                          onClick={(event) => {
                            event.target.value = null;
                          }}
                          //   value={sellerPassportImage}
                          type="file"
                          hidden
                        />
                      </Button>
                      <Button
                        sx={{
                          p: 0.85,
                          color: "#7155e5",
                          borderColor: "#7155e5",
                          "&:hover": {
                            backgroundColor: "#7155e510",
                            borderColor: "#7155e5",
                            boxShadow: "none",
                          },
                        }}
                        variant="outlined"
                        fullWidth
                        component="label"
                      >
                        Upload Shop Logo{" "}
                        {sellerShopLogo ? "(Selected)" : "(Required)"}
                        <input
                          required
                          accept="image/*"
                          onChange={(e) => setSellerShopLogo(e.target.files[0])}
                          onClick={(event) => {
                            event.target.value = null;
                          }}
                          //   value={sellerShopLogo}
                          type="file"
                          hidden
                        />
                      </Button>
                      <Button
                        sx={{
                          p: 0.85,
                          color: "#7155e5",
                          borderColor: "#7155e5",
                          "&:hover": {
                            backgroundColor: "#7155e510",
                            borderColor: "#7155e5",
                            boxShadow: "none",
                          },
                        }}
                        variant="outlined"
                        fullWidth
                        component="label"
                      >
                        Upload Shop Cover Photo{" "}
                        {sellerShopCover ? "(Selected)" : "(Required)"}
                        <input
                          required
                          accept="image/*"
                          onChange={(e) =>
                            setSellerShopCover(e.target.files[0])
                          }
                          onClick={(event) => {
                            event.target.value = null;
                          }}
                          //   value={sellerShopCover}
                          type="file"
                          hidden
                        />
                      </Button>
                      <Button
                        sx={{
                          p: 0.85,
                          color: "#7155e5",
                          borderColor: "#7155e5",
                          "&:hover": {
                            backgroundColor: "#7155e510",
                            borderColor: "#7155e5",
                            boxShadow: "none",
                          },
                        }}
                        variant="outlined"
                        fullWidth
                        component="label"
                      >
                        Upload Check Image{" "}
                        {sellerShopCheck ? "(Selected)" : "(Required)"}
                        <input
                          required
                          accept="image/*"
                          onChange={(e) =>
                            setSellerShopCheck(e.target.files[0])
                          }
                          onClick={(event) => {
                            event.target.value = null;
                          }}
                          //   value={sellerShopCheck}
                          type="file"
                          hidden
                        />
                      </Button>
                      <Button
                        sx={{
                          p: 0.85,
                          color: "#7155e5",
                          borderColor: "#7155e5",
                          "&:hover": {
                            backgroundColor: "#7155e510",
                            borderColor: "#7155e5",
                            boxShadow: "none",
                          },
                        }}
                        variant="outlined"
                        fullWidth
                        component="label"
                      >
                        Upload Trade License{" "}
                        {sellerShopLicense ? "(Selected)" : "(Required)"}
                        <input
                          required
                          accept="image/*"
                          onChange={(e) =>
                            setSellerShopLicense(e.target.files[0])
                          }
                          onClick={(event) => {
                            event.target.value = null;
                          }}
                          //   value={sellerShopLicense}
                          type="file"
                          hidden
                        />
                      </Button>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Typography fontWeight="bold">FIRST WITNESS</Typography>
                      <TextField
                        required
                        onChange={(e) => setFirstWitnessName(e.target.value)}
                        value={firstWitnessName}
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
                        required
                        onChange={(e) => setFirstWitnessPhone(e.target.value)}
                        value={firstWitnessPhone}
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
                        required
                        onChange={(e) => setFirstWitnessNID(e.target.value)}
                        value={firstWitnessNID}
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
                        required
                        onChange={(e) => setFirstWitnessAddress(e.target.value)}
                        value={firstWitnessAddress}
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
                        sx={{
                          p: 0.85,
                          color: "#7155e5",
                          borderColor: "#7155e5",
                          "&:hover": {
                            backgroundColor: "#7155e510",
                            borderColor: "#7155e5",
                            boxShadow: "none",
                          },
                        }}
                        variant="outlined"
                        fullWidth
                        component="label"
                      >
                        Upload Signature{" "}
                        {firstWitnessSignature ? "(Selected)" : "(Required)"}
                        <input
                          required
                          accept="image/*"
                          onChange={(e) =>
                            setFirstWitnessSignature(e.target.files[0])
                          }
                          onClick={(event) => {
                            event.target.value = null;
                          }}
                          //   value={firstWitnessSignature}
                          type="file"
                          hidden
                        />
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
