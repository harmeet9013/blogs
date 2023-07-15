import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";

import Blogs from "./components/pages/Blogs";
import Header from "./components/shared/Header";
import ShowBlog from "./components/pages/ShowBlog";
import AuthPage from "./components/pages/AuthPage";
import CreateBlog from "./components/pages/CreateBlog";

import "./App.css";

export default function App() {
    const [blogs, setBlogs] = useState({});

    const [darkMode, setDarkMode] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState({
        logged: false,
        userID: "",
    });
    const [refresh, setRefresh] = useState(true);

    const [showLoading, setShowLoading] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogInputs, setDialogInputs] = useState({
        title: "",
        content: "",
        navigate: "",
    });
    const [snackbarInputs, setSnackbarInputs] = useState({
        open: false,
        message: "",
    });

    return (
        <div className={`App ${darkMode ? "dark" : "light"}`}>
            <div className="main-container">
                <Header
                    darkMode={darkMode}
                    isLoggedIn={isLoggedIn}
                    dialogInputs={dialogInputs}
                    dialogOpen={dialogOpen}
                    setShowLoading={setShowLoading}
                    setDarkMode={setDarkMode}
                    setRefresh={setRefresh}
                    setIsLoggedIn={setIsLoggedIn}
                    setSnackbarInputs={setSnackbarInputs}
                    setDialogInputs={setDialogInputs}
                    setDialogOpen={setDialogOpen}
                />

                {/* Loading on the entire screen */}
                <Backdrop
                    sx={{ color: `${darkMode ? "#fff" : "#000"}`, zIndex: 999 }}
                    open={showLoading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>

                {/* SnackBar Component */}
                <Snackbar
                    open={snackbarInputs.open}
                    message={snackbarInputs.message}
                    autoHideDuration={5000}
                    onClose={() => {
                        setSnackbarInputs({
                            open: false,
                            message: "",
                        });
                    }}
                />

                <Routes>
                    {/* Home page route */}
                    <Route
                        exact
                        path="/"
                        element={
                            <Blogs
                                darkMode={darkMode}
                                blogs={blogs}
                                refresh={refresh}
                                setRefresh={setRefresh}
                                setBlogs={setBlogs}
                                setShowLoading={setShowLoading}
                            />
                        }
                    />

                    {/* Show blog seaparately */}
                    <Route
                        exact
                        path="/blog/:id"
                        element={
                            <ShowBlog
                                darkMode={darkMode}
                                isLoggedIn={isLoggedIn}
                                setShowLoading={setShowLoading}
                                setSnackbarInputs={setSnackbarInputs}
                                setRefresh={setRefresh}
                            />
                        }
                    />

                    {/* Login page */}
                    <Route
                        exact
                        path="/authUser"
                        element={
                            <AuthPage
                                darkMode={darkMode}
                                setShowLoading={setShowLoading}
                                setIsLoggedIn={setIsLoggedIn}
                                setSnackbarInputs={setSnackbarInputs}
                            />
                        }
                    />

                    {/* Create blog */}
                    <Route
                        exact
                        path="/createBlog"
                        element={
                            <CreateBlog
                                darkMode={darkMode}
                                isLoggedIn={isLoggedIn}
                                dialogOpen={dialogOpen}
                                dialogInputs={dialogInputs}
                                setDialogOpen={setDialogOpen}
                                setDialogInputs={setDialogInputs}
                                setShowLoading={setShowLoading}
                                setRefresh={setRefresh}
                                setSnackbarInputs={setSnackbarInputs}
                            />
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}
