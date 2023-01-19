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
import myAxios from "../utils/myAxios";

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
  const [currentAddress, setCurrentAddress] = React.useState(null);
  const [parmanentAddress, setParmanentAddress] = React.useState(null);
  const [currentZipcode, setCurrentZipcode] = React.useState(null);
  const [parmanentZipcode, setParmanentZipcode] = React.useState(null);
  const [currentArea, setCurrentArea] = React.useState(null);
  const [parmanentArea, setParmanentArea] = React.useState(null);
  const [currentCity, setCurrentCity] = React.useState(null);
  const [currentThana, setCurrentThana] = React.useState(null);
  const [parmanentCity, setParmanentCity] = React.useState(null);
  const [parmanentThana, setParmanentThana] = React.useState(null);
  const [birthDate, setBirthDate] = React.useState(null);
  const [sellerNID, setSellerNID] = React.useState(null);
  const [sellerDesignation, setSellerDesignation] = React.useState(null);
  const [sellerBank, setSellerBank] = React.useState(null);
  const [sellerBankNo, setSellerBankNo] = React.useState(null);
  const [sellerBankBranch, setSellerBankBranch] = React.useState(null);
  const [sellerBankRouting, setSellerBankRouting] = React.useState(null);
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
  const [delivery, setDelivery] = React.useState(null);
  const [sellerPhone, setSellerPhone] = React.useState(null);
  const [binNumber, setBinNumber] = React.useState(null);
  const [sellerPhoneOTP, setSellerPhoneOTP] = React.useState("");
  const [sellerEmail, setSellerEmail] = React.useState("");
  const [sellerEmailOTP, setSellerEmailOTP] = React.useState("");
  const [sellerPassword, setSellerPassword] = React.useState("");
  const [currentZipList, setCurrentZipList] = React.useState([]);
  const [currentAreaList, setCurrentAreaList] = React.useState([]);
  const [parmanentZipList, setParmanentZipList] = React.useState([]);
  const [parmanentAreaList, setParmanentAreaList] = React.useState([]);
  const { addressData, deliveryData } = useStateContext();

  const handleCurrentZipList = (city, thana) => {
    myAxios
      .post(
        "https://backoffice.ecourier.com.bd/api/postcode-list",
        {
          city: city.name,
          thana: thana.name,
        },
        {
          headers: {
            "API-SECRET": "EWMe0",
            "API-KEY": "HV9h",
            "USER-ID": "Q3116",
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => setCurrentZipList(data.data.message));
  };
  const handleCurrentAreaList = (zip) => {
    myAxios
      .post(
        "https://backoffice.ecourier.com.bd/api/area-list",
        {
          postcode: zip.value,
        },
        {
          headers: {
            "API-SECRET": "EWMe0",
            "API-KEY": "HV9h",
            "USER-ID": "Q3116",
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => setCurrentAreaList(data.data.message));
  };
  const handleParmanentZipList = (city, thana) => {
    myAxios
      .post(
        "https://backoffice.ecourier.com.bd/api/postcode-list",
        {
          city: city.name,
          thana: thana.name,
        },
        {
          headers: {
            "API-SECRET": "EWMe0",
            "API-KEY": "HV9h",
            "USER-ID": "Q3116",
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => setParmanentZipList(data.data.message));
  };
  const handleParmanentAreaList = (zip) => {
    myAxios
      .post(
        "https://backoffice.ecourier.com.bd/api/area-list",
        {
          postcode: zip.value,
        },
        {
          headers: {
            "API-SECRET": "EWMe0",
            "API-KEY": "HV9h",
            "USER-ID": "Q3116",
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => setParmanentAreaList(data.data.message));
  };

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
        !currentAddress ||
        !parmanentAddress ||
        !currentZipcode ||
        !parmanentZipcode ||
        !currentArea ||
        !parmanentArea ||
        !currentCity ||
        !currentThana ||
        !parmanentCity ||
        !parmanentThana ||
        !birthDate ||
        !sellerNID ||
        !sellerDesignation ||
        !sellerBank ||
        !sellerBankNo ||
        !sellerBankBranch ||
        !sellerBankRouting ||
        !sellerShopName ||
        !sellerShopAddress ||
        !delivery ||
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
      toast.error("Please fill up all input");
      return;
    } else if (activeStep === 1) {
      if (!sellerPhone) {
        toast.error("Please fill up all input");
        return;
      } else {
        myAxios
          .post("send-otp-to-phone", {
            phone_number: sellerPhone,
            sector: 2,
          })
          .then((data) => {
            toast.success(data.data.detail);
            hanglepageChange();
          })
          .catch((e) => {
            toast.error(
              e.response.data.detail || "OTP Send failed. Try again later"
            );
            return;
          });
      }
    } else if (activeStep === 2) {
      if (!sellerPhoneOTP) {
        toast.error("Please fill up all input");
        return;
      } else {
        myAxios
          .post("verify-otp", {
            phone_number: sellerPhone,
            otp: sellerPhoneOTP,
          })
          .then((data) => {
            if (data.data.status) {
              toast.success(data.data.detail);
              hanglepageChange();
            } else {
              toast.error(data.data.detail);
              hanglepageChange();
            }
          })
          .catch((e) => {
            toast.error("OTP failed. Try again later");
            return;
          });
      }
    } else if (activeStep === 3 && !sellerEmail) {
      toast.error("Please fill up all input");
      return;
    } else if (activeStep === 5) {
      if (!sellerPassword) {
        toast.error("Please fill up all input");
        return;
      } else {
        myAxios
          .postForm("seller-create", {
            seller_name: sellerName,
            signature: sellerSignature,
            current_address: currentAddress,
            current_city: currentCity.id,
            current_thana: currentThana.id,
            current_zip_code: currentZipcode.value,
            current_area: currentArea.value,
            parmanent_address: parmanentAddress,
            parmanent_city: parmanentCity.id,
            parmanent_thana: parmanentThana.id,
            parmanent_zip_code: parmanentZipcode.value,
            parmanent_area: parmanentArea.value,
            date_of_birth: birthDate.format("YYYY-MM-DD"),
            nid_number: sellerNID,
            phone_number: sellerPhone,
            email: sellerEmail,
            password: sellerPassword,
            nid_image: sellerNIDImage,
            designation: sellerDesignation,
            passport_image: sellerPassportImage,
            bank_name: sellerBank,
            bank_account_no: sellerBankNo,
            bank_branch_name: sellerBankBranch,
            bank_routing: sellerBankRouting,
            cheque: sellerShopCheck,
            shop_name: sellerShopName,
            delivery_service: delivery.id,
            shop_address: sellerShopAddress,
            shop_logo: sellerShopLogo,
            shop_cover: sellerShopCover,
            trade_licence: sellerShopLicense,
            witness_1_name: firstWitnessName,
            witness_1_phone: firstWitnessPhone,
            witness_1_nid: firstWitnessNID,
            witness_1_address: firstWitnessAddress,
            witness_1_signature: firstWitnessSignature,
          })
          .then((data) => {
            toast.success(data.data.detail);
            hanglepageChange();
          })
          .catch((e) => {
            toast.error(e.response.data.msg || "Please check all fields");
            return;
          });
      }
    } else {
      hanglepageChange();
    }
  };

  const hanglepageChange = () => {
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

  return (
    <Box sx={{ paddingX: { xs: 4, md: 8 }, paddingY: 4 }}>
      <Paper
        sx={{
          background: "#fff",
          p: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
        elevation={2}
      >
        <img src="/images/ula_2.png" alt="Ula Logo" width={80} />
        <Typography sx={{ typography: { xs: "h5", md: "h4" } }} color="#695da9">
          BECOME A SELLER
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Stepper
            activeStep={activeStep}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
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
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          ) : (
            <>
              <Box sx={{ mt: 2, mb: 1 }}>
                {activeStep === 0 ? (
                  <Grid container spacing={2}>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Typography fontWeight="bold">
                        SELLER PERSONAL INFORMATION
                      </Typography>
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
                      <DatePicker
                        label="Date of Birth"
                        value={birthDate}
                        inputFormat="DD/MM/YYYY"
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
                        onChange={(e) => setSellerNID(e.target.value)}
                        value={sellerNID}
                        size="small"
                        fullWidth
                        onKeyPress={(e) =>
                          !/^[0-9]+$/.test(e.key) && e.preventDefault()
                        }
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
                      <Typography fontWeight="bold">
                        SELLER ADDRESS INFORMATION
                      </Typography>

                      <Autocomplete
                        disablePortal
                        fullWidth
                        size="small"
                        options={addressData.data.city}
                        getOptionLabel={(option) => option.name}
                        onChange={(e, data) => setCurrentCity(data)}
                        value={currentCity}
                        renderInput={(params) => (
                          <TextField
                            required
                            {...params}
                            label="Current City"
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
                      {currentCity && (
                        <Autocomplete
                          disablePortal
                          fullWidth
                          size="small"
                          options={addressData.data.thana.filter(
                            (item) => item.city === currentCity.id
                          )}
                          getOptionLabel={(option) => option.name}
                          onChange={(e, data) => {
                            setCurrentThana(data);
                            handleCurrentZipList(currentCity, data);
                          }}
                          value={currentThana}
                          renderInput={(params) => (
                            <TextField
                              required
                              {...params}
                              label="Current Thana"
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
                      {Boolean(currentZipList.length) && (
                        <Autocomplete
                          disablePortal
                          fullWidth
                          size="small"
                          options={currentZipList}
                          getOptionLabel={(option) => option.name}
                          onChange={(e, data) => {
                            setCurrentZipcode(data);
                            handleCurrentAreaList(data);
                          }}
                          value={currentZipcode}
                          renderInput={(params) => (
                            <TextField
                              required
                              {...params}
                              label="Current Post Code"
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
                      {Boolean(currentAreaList.length) && (
                        <Autocomplete
                          disablePortal
                          fullWidth
                          size="small"
                          options={currentAreaList}
                          getOptionLabel={(option) => option.name}
                          onChange={(e, data) => setCurrentArea(data)}
                          value={currentArea}
                          renderInput={(params) => (
                            <TextField
                              required
                              {...params}
                              label="Current Area"
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
                      <TextField
                        required
                        onChange={(e) => setCurrentAddress(e.target.value)}
                        value={currentAddress}
                        size="small"
                        fullWidth
                        id="current_address"
                        label="Current Address"
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
                        options={addressData.data.city}
                        getOptionLabel={(option) => option.name}
                        onChange={(e, data) => setParmanentCity(data)}
                        value={parmanentCity}
                        renderInput={(params) => (
                          <TextField
                            required
                            {...params}
                            label="Parmanent City"
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
                      {parmanentCity && (
                        <Autocomplete
                          disablePortal
                          fullWidth
                          size="small"
                          options={addressData.data.thana.filter(
                            (item) => item.city === parmanentCity.id
                          )}
                          getOptionLabel={(option) => option.name}
                          onChange={(e, data) => {
                            setParmanentThana(data);
                            handleParmanentZipList(parmanentCity, data);
                          }}
                          value={parmanentThana}
                          renderInput={(params) => (
                            <TextField
                              required
                              {...params}
                              label="Parmanent Thana"
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
                      {Boolean(parmanentZipList.length) && (
                        <Autocomplete
                          disablePortal
                          fullWidth
                          size="small"
                          options={parmanentZipList}
                          getOptionLabel={(option) => option.name}
                          onChange={(e, data) => {
                            setParmanentZipcode(data);
                            handleParmanentAreaList(data);
                          }}
                          value={parmanentZipcode}
                          renderInput={(params) => (
                            <TextField
                              required
                              {...params}
                              label="Parmanent Post Code"
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
                      {Boolean(parmanentAreaList.length) && (
                        <Autocomplete
                          disablePortal
                          fullWidth
                          size="small"
                          options={parmanentAreaList}
                          getOptionLabel={(option) => option.name}
                          onChange={(e, data) => setParmanentArea(data)}
                          value={parmanentArea}
                          renderInput={(params) => (
                            <TextField
                              required
                              {...params}
                              label="Parmanent Area"
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
                      <TextField
                        required
                        onChange={(e) => setParmanentAddress(e.target.value)}
                        value={parmanentAddress}
                        size="small"
                        fullWidth
                        id="parmanent_address"
                        label="Parmanent Address"
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
                    <Grid
                      xs={12}
                      item
                      md={6}
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Typography fontWeight="bold">
                        SHOP INFORMATION
                      </Typography>
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
                      <TextField
                        onChange={(e) => setBinNumber(e.target.value)}
                        value={binNumber}
                        size="small"
                        fullWidth
                        id="bin_number"
                        label="BIN Number (If Any)"
                        variant="outlined"
                        onKeyPress={(e) =>
                          !/^[0-9]+$/.test(e.key) && e.preventDefault()
                        }
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
                        options={deliveryData.data.delivery_service}
                        getOptionLabel={(option) => option.name}
                        onChange={(e, data) => setDelivery(data)}
                        value={delivery}
                        renderInput={(params) => (
                          <TextField
                            required
                            {...params}
                            label="Select Delivery Service"
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
                        Upload Shop Cover (150px * 1440px){" "}
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

                      <Typography fontWeight="bold">
                        BANK INFORMATION
                      </Typography>

                      <TextField
                        required
                        onChange={(e) => setSellerBank(e.target.value)}
                        value={sellerBank}
                        size="small"
                        fullWidth
                        id="bank_name"
                        label="Bank Name"
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
                        onChange={(e) => setSellerBankNo(e.target.value)}
                        value={sellerBankNo}
                        size="small"
                        fullWidth
                        id="bank_no"
                        onKeyPress={(e) =>
                          !/^[0-9]+$/.test(e.key) && e.preventDefault()
                        }
                        label="Bank Account Number"
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
                        onChange={(e) => setSellerBankBranch(e.target.value)}
                        value={sellerBankBranch}
                        size="small"
                        fullWidth
                        id="bank_branch"
                        label="Branch Name"
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
                        onChange={(e) => setSellerBankRouting(e.target.value)}
                        value={sellerBankRouting}
                        size="small"
                        fullWidth
                        id="bank_routing"
                        onKeyPress={(e) =>
                          !/^[0-9]+$/.test(e.key) && e.preventDefault()
                        }
                        label="Routing Number"
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
                        Upload Cheque Image{" "}
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
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Typography fontWeight="bold">WITNESS</Typography>
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
                        onKeyPress={(e) =>
                          !/^[0-9\+]+$/.test(e.key) && e.preventDefault()
                        }
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
                        onKeyPress={(e) =>
                          !/^[0-9]+$/.test(e.key) && e.preventDefault()
                        }
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
                  </Grid>
                ) : activeStep === 1 ? (
                  <Box>
                    <TextField
                      required
                      onChange={(e) => setSellerPhone(e.target.value)}
                      value={sellerPhone}
                      size="small"
                      onKeyPress={(e) =>
                        !/^[0-9\+]+$/.test(e.key) && e.preventDefault()
                      }
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
                      required
                      onChange={(e) => setSellerPhoneOTP(e.target.value)}
                      value={sellerPhoneOTP}
                      size="small"
                      fullWidth
                      id="OTP"
                      label="OTP"
                      onKeyPress={(e) =>
                        !/^[0-9]+$/.test(e.key) && e.preventDefault()
                      }
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
                      required
                      onChange={(e) => setSellerEmail(e.target.value)}
                      value={sellerEmail}
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
                      onChange={(e) => setSellerEmailOTP(e.target.value)}
                      value={sellerEmailOTP}
                      size="small"
                      fullWidth
                      id="email_otp"
                      type="number"
                      label="OTP"
                      variant="outlined"
                      onKeyPress={(e) =>
                        !/^[0-9]+$/.test(e.key) && e.preventDefault()
                      }
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
                      required
                      onChange={(e) => setSellerPassword(e.target.value)}
                      value={sellerPassword}
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
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
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
