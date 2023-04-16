import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    AppBar,
    Tabs,
    Tab,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
    Button,
    Popover,
    IconButton,
    Box
} from "@mui/material";
import { Search } from "@mui/icons-material";

interface Props {
    readonly isAuthorized: boolean;
    readonly isAdmin: boolean;
}

function MenuBar({ isAuthorized, isAdmin }: Props) {
    return (
        <AppBar position="static" style={{ backgroundColor: "#937e7e" }}>
            <Toolbar>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Link to="/">
                        <img
                            src="./logo192.png"
                            alt="Logo"
                            style={{ marginRight: "16px" }}
                        />
                    </Link>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ color: "black" }}
                    >
                        교육 사이트
                    </Typography>

                </Box>

                <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
                <Tabs sx={{ justifyContent: "center" }}>
                    <Tab label="메뉴1" component={Link} to="/menu1" />
                    <Tab label="메뉴2" component={Link} to="/menu2" />
                    <Tab label="메뉴3" component={Link} to="/menu3" />
                </Tabs>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto", backgroundColor:"blue" }}>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="search"
                        sx={{ color: "white" }}
                    >
                        <Search />
                    </IconButton>
                </Box>

            </Toolbar>
        </AppBar>
    );
}

export default MenuBar;
