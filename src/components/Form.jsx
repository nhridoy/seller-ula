import { Box, Grid, TextField } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import img from "../assets/ula_2.png";

export default function Form() {
  const [value, setValue] = useState(new Date());
  return (
    <div
      style={{
        background: "#dddddd30",
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "auto",
          // height: "500px",
          border: "1px solid #00000030",
          background: "#ffffff",
          padding: "10px",
        }}
      >
        {/* <div style={{ width: "45%", marginRight: "5%" }}>
          <TextField
            id="standard-basic"
            label=" Seller Name"
            variant="standard"
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
            }}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label="Date of Birth"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{
                    width: "100%",
                    outline: "none",
                    borderColor: "red",
                    margin: "20px 0",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none",
                        borderRadius: "0",
                        borderBottom: "2px solid #00000040 ",
                      },
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>

          <TextField
            id="standard-basic"
            label="NID Number"
            variant="standard"
            type={"number"}
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
            }}
          />
          <TextField
            id="standard-basic"
            label="Designation"
            variant="standard"
            type={"number"}
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
            }}
          />
          <TextField
            id="standard-basic"
            label="Permanent Address"
            variant="standard"
            type={"number"}
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
            }}
          />
          <TextField
            id="standard-basic"
            label="Present Address"
            variant="standard"
            type={"number"}
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
            }}
          />
          <TextField
            id="standard-basic"
            label="Bank Account"
            variant="standard"
            type={"number"}
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
            }}
          />
          <TextField
            id="standard-basic"
            label="Shop Name"
            variant="standard"
            type={"number"}
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
            }}
          />
          <TextField
            id="standard-basic"
            label="Shop Addresss"
            variant="standard"
            type={"number"}
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
            }}
          />
          <TextField
            id="standard-basic"
            label="City"
            variant="standard"
            type={"number"}
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
            }}
          />
        </div>
        <div style={{ width: "45%", marginLeft: "5px" }}>
          <TextField
            id="standard-basic"
            label="Upload NID Copy"
            variant="standard"
            type={"file"}
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
              margin: "10px 0",
            }}
          />
          <TextField
            id="standard-basic"
            label="Photo"
            variant="standard"
            type={"file"}
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
              margin: "10px 0 0 0",
            }}
          />
          <TextField
            id="standard-basic"
            label="Cheque Copy"
            variant="standard"
            type={"file"}
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
              margin: "10px 0 0 0",
            }}
          />
          <TextField
            id="standard-basic"
            label="Shop Logo"
            variant="standard"
            type={"file"}
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
              margin: "10px 0 0 0",
            }}
          />
          <TextField
            id="standard-basic"
            label="Trade License"
            variant="standard"
            type={"file"}
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
              margin: "10px 0 0 0",
            }}
          />
          <TextField
            id="standard-basic"
            label="Upload NID Copy"
            variant="standard"
            type={"file"}
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
              margin: "10px 0 0 0",
            }}
          />
          <TextField
            id="standard-basic"
            label="Upload NID Copy"
            variant="standard"
            type={"file"}
            required
            sx={{
              width: "100%",
              padding: "2px 4px",
              margin: "10px 0 0 0",
            }}
          />
        </div> */}
        <Box
          style={{
            width: "max-content",
            margin: "20px auto",
            textAlign: "center",
          }}
        >
          <img
            src={img}
            alt=""
            srcset=""
            style={{
              width: "100px",
              height: "100px",
              margin: "10px auto",
            }}
          />
          <h2>BECOME A SELLER</h2>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            margin: "auto",
          }}
        >
          <Grid item xs={6}>
            <TextField
              id="standard-basic"
              label=" Seller Name"
              variant="standard"
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
              }}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label="Date of Birth"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      width: "100%",
                      outline: "none",
                      borderColor: "red",
                      margin: "20px 0",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none",
                          borderRadius: "0",
                          borderBottom: "2px solid #00000040 ",
                        },
                      },
                    }}
                  />
                )}
              />
            </LocalizationProvider>

            <TextField
              id="standard-basic"
              label="NID Number"
              variant="standard"
              type={"number"}
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
              }}
            />
            <TextField
              id="standard-basic"
              label="Designation"
              variant="standard"
              type={"number"}
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
              }}
            />
            <TextField
              id="standard-basic"
              label="Permanent Address"
              variant="standard"
              type={"number"}
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
              }}
            />
            <TextField
              id="standard-basic"
              label="Present Address"
              variant="standard"
              type={"number"}
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
              }}
            />
            <TextField
              id="standard-basic"
              label="Bank Account"
              variant="standard"
              type={"number"}
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
              }}
            />
            <TextField
              id="standard-basic"
              label="Shop Name"
              variant="standard"
              type={"number"}
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
              }}
            />
            <TextField
              id="standard-basic"
              label="Shop Addresss"
              variant="standard"
              type={"number"}
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
              }}
            />
            <TextField
              id="standard-basic"
              label="City"
              variant="standard"
              type={"number"}
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-basic"
              label="Upload NID Copy"
              variant="standard"
              type={"file"}
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
                margin: "10px 0",
              }}
            />
            <TextField
              id="standard-basic"
              label="Photo"
              variant="standard"
              type={"file"}
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
                margin: "10px 0 0 0",
              }}
            />
            <TextField
              id="standard-basic"
              label="Cheque Copy"
              variant="standard"
              type={"file"}
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
                margin: "10px 0 0 0",
              }}
            />
            <TextField
              id="standard-basic"
              label="Shop Logo"
              variant="standard"
              type={"file"}
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
                margin: "10px 0 0 0",
              }}
            />
            <TextField
              id="standard-basic"
              label="Trade License"
              variant="standard"
              type={"file"}
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
                margin: "10px 0 0 0",
              }}
            />
            <TextField
              id="standard-basic"
              label="Upload NID Copy"
              variant="standard"
              type={"file"}
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
                margin: "10px 0 0 0",
              }}
            />
            <TextField
              id="standard-basic"
              label="Upload NID Copy"
              variant="standard"
              type={"file"}
              required
              sx={{
                width: "100%",
                padding: "2px 4px",
                margin: "10px 0 0 0",
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
