import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Terms = ({ setProceed }) => {
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
        <Typography variant="h4" align="center">
          Terms & Conditions
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          iure aliquid debitis sunt molestiae, eligendi sit error cum id
          provident vero quia, laborum architecto illo cumque. Facere nostrum
          ducimus illo.
        </Typography>
        <FormControlLabel
          onChange={(e) => setAgreed(e.target.checked)}
          control={<Checkbox />}
          label="I agree to the terms & conditions"
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
