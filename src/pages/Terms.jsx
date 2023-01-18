import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import parse from "html-react-parser";

const Terms = ({ setProceed, data }) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <Box sx={{ paddingX: { xs: 4, md: 8 }, paddingY: 4 }}>
      <Paper
        sx={{
          background: "#fff",
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
        elevation={2}
      >
        <Box px={4}>{parse(data)}</Box>

        <FormControlLabel
          onChange={(e) => setAgreed(e.target.checked)}
          control={<Checkbox />}
          label={
            <div>
              By selecting proceed I agree to the Terms & Conditions of ULA.
            </div>
          }
          labelPlacement="end"
        />
        <Button
          sx={{ background: "#695da9", "&:hover": { background: "#494176" } }}
          variant="contained"
          disabled={!agreed}
          onClick={() => setProceed(true)}
        >
          PROCEED
        </Button>
      </Paper>
    </Box>
  );
};

export default Terms;
