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

const Documents = ({ setNext, data }) => {
  const [document, setDocument] = useState(false);
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
          onChange={(e) => setDocument(e.target.checked)}
          control={<Checkbox />}
          label="I have all these Documents scanned copy"
          labelPlacement="end"
        />
        <Button
          sx={{ background: "#695da9", "&:hover": { background: "#494176" } }}
          variant="contained"
          disabled={!document}
          onClick={() => setNext(true)}
        >
          NEXT
        </Button>
      </Paper>
    </Box>
  );
};

export default Documents;
