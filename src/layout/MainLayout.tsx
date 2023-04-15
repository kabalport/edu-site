import React from "react";
import MainHeaderContainer from "../containers/common/MainHeaderContainer";
import MenuBarContainer from "../containers/common/MenuBarContainer";
import Footer from "../components/common/Footer";
import {Box} from "@mui/material";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function MainLayout({ children }: Props) {
  return (
    <Box sx={{paddingX: 0, margin: 0}}>
      <MainHeaderContainer />
      <MenuBarContainer />
      {children}
      <Footer />
    </Box>
  );
}

export default MainLayout;
