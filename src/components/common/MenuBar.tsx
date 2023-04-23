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
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleMenu1MouseEnter = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverMouseEnter = () => {
        setAnchorEl(anchorEl);
    };

    const handlePopoverMouseLeave = () => {
        setAnchorEl(null);
    };

    const handleMenu1Close = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: "#cecece" }}>
            <Toolbar>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Link to="/">
                        <img
                            src="/assets/RCEP_LOGO-002.png"
                            alt="Logo"
                            style={{ marginRight: "16px" }}
                        />
                    </Link>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ color: "black" }}
                    >
                        추천 강의 교육 플랫폼
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
                    <Tabs sx={{ justifyContent: "center" }}>
                        <Tab
                            label="메뉴1"
                            component={Link}
                            to="/menu1"
                            onMouseEnter={handleMenu1MouseEnter}
                        />
                        <Tab label="메뉴2" component={Link} to="/menu2" />
                        <Tab label="메뉴3" component={Link} to="/menu3" />
                    </Tabs>
                    <Popover
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={handleMenu1Close}
                        onMouseEnter={handlePopoverMouseEnter}
                        onMouseLeave={handlePopoverMouseLeave}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center"
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center"
                        }}
                    >

                    {/*<Popover*/}
                    {/*    open={Boolean(anchorEl)}*/}
                    {/*    anchorEl={anchorEl}*/}
                    {/*    onClose={handleMenu1Close}*/}
                    {/*    anchorOrigin={{*/}
                    {/*        vertical: "bottom",*/}
                    {/*        horizontal: "center"*/}
                    {/*    }}*/}
                    {/*    transformOrigin={{*/}
                    {/*        vertical: "top",*/}
                    {/*        horizontal: "center"*/}
                    {/*    }}*/}
                    {/*>*/}
                        <Box sx={{ p: 1 }}>
                            <Typography variant="subtitle1" gutterBottom>
                                소메뉴1

                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                소메뉴2
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                소메뉴3
                            </Typography>
                        </Box>
                    </Popover>
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