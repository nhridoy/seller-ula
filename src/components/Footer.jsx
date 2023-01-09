import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { AiFillInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { SHOP_URL } from "../utils/constants";

const Footer = () => {
  const { footerData } = useStateContext();

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ background: "#171616", px: 2, py: 5, color: "#fff", mt: 0 }}
      >
        {footerData?.data?.slice(0, 3)?.map((item, index) => (
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
        <Grid
          item
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Typography textAlign="center" fontSize="26px" fontWeight="bold">
            Address
          </Typography>
          <Typography align="center">
            264/B, West Manikdi, Dhaka Cantonment, Dhaka-1206
          </Typography>

          <a
            href="tel:09613825401"
            lowercase="true"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Phone : 09613825401
          </a>
          <br />
          <a
            href="mailto:support@ula.com.bd"
            lowercase="true"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Email: support@ula.com.bd
          </a>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <a
              target="_blank"
              href="https://www.facebook.com/ula.com.bd"
              rel="noreferrer"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <MdFacebook fontSize="32px" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@ulaltd"
              rel="noreferrer"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <YouTubeIcon fontSize="large" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/ula.com.bd"
              rel="noreferrer"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <AiFillInstagram fontSize="32px" />
            </a>
          </Box>
        </Grid>
      </Grid>
      <Typography textAlign="center" p={1}>
        Copyright {new Date().getFullYear()} ©All Rights Reserved | ULA Limited.
      </Typography>
    </>
  );
};

export default Footer;
