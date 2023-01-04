import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { SHOP_URL } from "../utils/constants";

const Footer = () => {
  const { footerData } = useStateContext();
  console.log(footerData?.data);
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ background: "#171616", px: 2, py: 5, color: "#fff", mt: 0 }}
      >
        {footerData?.data?.map((item, index) => (
          <Grid item md={3} key={index}>
            <Typography fontWeight="bold" sx={{ marginBottom: 2 }}>
              {item.title}
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              {item?.footer?.map((footerLink, i) => (
                <Link
                  color="#fff"
                  underline="none"
                  href={SHOP_URL + footerLink.slug}
                  key={i}
                  target="_blank"
                >
                  {footerLink.page_name}
                </Link>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography textAlign="center" p={1}>
        Copyright {new Date().getFullYear()} ©All Rights Reserved | ULA Limited.
      </Typography>
    </>
  );
};

export default Footer;
