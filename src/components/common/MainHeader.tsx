import React, {ChangeEvent, useState} from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";
import { MyInfo } from "../../App";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Box, Tab, Tabs} from "@mui/material";

interface Props {
  readonly myInfo: MyInfo | null;
  readonly isAuthorized: boolean;
  readonly onLogout: () => void;
}
const theme = createTheme({
    palette: {
        primary: {
            main: '#93a26c',
        },
        secondary: {
            main: '#dc004e',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    padding: 0,
                    margin: 0,
                    height: 40, // 전체 높이 설정
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    '@media (min-width: 600px)': {
                        minHeight: 'inherit',
                        padding: 0,
                        margin: 0,
                    },
                    padding: 0,
                    margin: 0,
                    minHeight: 'inherit', // 최소 높이 설정을 상위 요소와 동일하게 설정
                },
            },
        },


        MuiTab: {
            styleOverrides: {
                root: {
                    backgroundColor: '#912b2b', // 배경색: 연한 회색
                    color: 'black', // 글씨색: 검은색
                    fontSize: '0.8rem', // 폰트 크기 조정
                    minHeight: 40, // 최소 높이 조정
                    '&.Mui-selected': {
                        backgroundColor: '#4a4a4a', // 선택된 탭 배경색: 진한 회색
                        color: 'red', // 선택된 탭 글씨색: 빨간색
                        minHeight: 40, // 최소 높이 조정
                    },
                    margin: 0,

                },
            },

        },

        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '0.8rem', // 폰트 크기 조정
                    minHeight: 40, // 최소 높이 조정
                    padding: 0,
                    margin: 0,
                },
            },
        },




    },
});



function MainHeader({ myInfo, isAuthorized, onLogout }: Props) {
    const [value, setValue] = useState(0);

    const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar sx={{ padding: 0, width: '100%'}}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="사용자지원포털" component={Link} to="/" />
                        <Tab label="실증지원포털" component={Link} to="/" />
                        <Tab label="데이터유통포털" component={Link} to="/" />
                        <Tab label="안심구역포털" component={Link} to="/" />
                        <Tab label="AI 융합 아카데미" component={Link} to="/" />
                        <Tab label="사업단 홈페이지" component={Link} to="/" />
                    </Tabs>

                    {isAuthorized && myInfo && (
                           <Box marginLeft="auto">
                           <span>{myInfo.userName}님 환영합니다.</span>
                             <Button onClick={onLogout} color="inherit">로그아웃</Button>
                           </Box>
                       )}
                       {
                           !isAuthorized && !myInfo &&
                           <>
                           <Button color="inherit" component={Link} to="/signin" sx={{ marginLeft: 'auto' }}>
                           로그인
                           </Button>
                           <Button color="inherit" component={Link} to="/signup"  sx={{ marginLeft: '1' }}>
                           회원가입
                           </Button>
                           </>
                       }
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
  }

export default MainHeader;
