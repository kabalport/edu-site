import React, {useState} from "react";
import { Link } from "react-router-dom";
import {AppBar, Tabs, Tab, Toolbar, Typography, Menu, MenuItem, Button, Popover} from "@mui/material";


interface Props {
  readonly isAuthorized: boolean;
  readonly isAdmin: boolean;
}

function MenuBar({ isAuthorized, isAdmin }: Props) {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
      <AppBar position="static">
        <Toolbar>
            <img src="./assets/logo.png" alt="Logo" style={{ marginRight: "16px" }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                교육 사이트
            </Typography>
            <Tabs value={false} centered>
            {isAuthorized && isAdmin && (
                <>
                  <Tab label="코드그룹관리" component={Link} to="/codegroup" />
                  <Tab label="코드관리" component={Link} to="/codedetail" />
                  <Tab label="회원관리" component={Link} to="/member" />
                  <Tab label="회원게시판" component={Link} to="/board" />
                  <Tab label="공지사항관리" component={Link} to="/notice" />
                  <Tab label="상품관리" component={Link} to="/item" />
                  <Tab label="공개자료실관리" component={Link} to="/pds" />
                </>
            )}
            {isAuthorized && !isAdmin && (
                <>
                  <Tab label="회원게시판" component={Link} to="/board" />
                  <Tab label="공지사항" component={Link} to="/notice" />
                  <Tab label="상품" component={Link} to="/item" />
                  <Tab label="코인충전" component={Link} to="/coin/create" />
                  <Tab label="충전내역" component={Link} to="/coin/charge" />
                  <Tab label="구매상품" component={Link} to="/useritem" />
                  <Tab label="구매내역" component={Link} to="/coin/pay" />
                  <Tab label="공개자료실" component={Link} to="/pds" />
                </>
            )}
            {!isAuthorized && (
                <>
                    <Button
                        onMouseEnter={handleOpen}
                        onMouseLeave={handleClose}
                        component={Link}
                        to="/board"
                    >
                        회원게시판
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                        onMouseLeave={handleClose}
                    >
                        <MenuItem component={Link} to="/notice" onClick={handleClose}>
                            공지사항
                        </MenuItem>
                        <MenuItem component={Link} to="/item" onClick={handleClose}>
                            상품
                        </MenuItem>
                    </Popover>
                    <Button component={Link} to="/pds">
                        공개자료실
                    </Button>
                </>
            )}
          </Tabs>
        </Toolbar>
      </AppBar>
  );
}

export default MenuBar;
