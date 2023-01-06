import React from "react";
import Box from "@mui/material/Box";
import { FaHome } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { SiPivotaltracker } from "react-icons/si";
import { Link } from "@mui/material";
import { SHOP_URL } from "../utils/constants";

const Header = () => {
  return (
    <Box
      sx={{
        background: "#695da9",
        p: 1,
        fontWeight: "bold",
        fontSize: { xs: "12px", md: "14px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
      }}
    >
      <Link
        href={SHOP_URL + "home"}
        color="#fff"
        underline="none"
        display="flex"
        alignItems="center"
        gap={1}
        target="_blank"
      >
        <FaHome /> Home
      </Link>
      <Link
        href={SHOP_URL + "campaign"}
        color="#fff"
        underline="none"
        display="flex"
        alignItems="center"
        gap={1}
        target="_blank"
      >
        <MdCampaign />
        Campaign
      </Link>
      <Link
        href={SHOP_URL + "account/orders"}
        color="#fff"
        underline="none"
        display="flex"
        alignItems="center"
        gap={1}
        target="_blank"
      >
        <SiPivotaltracker />
        Track my order
      </Link>
    </Box>
  );
};

export default Header;
