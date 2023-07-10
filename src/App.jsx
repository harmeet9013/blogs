import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

import Blogs from "./components/pages/Blogs";
import Header from "./components/shared/Header";
import ShowBlog from "./components/pages/ShowBlog";
import AuthPage from "./components/pages/AuthPage";
import CreateBlog from "./components/pages/CreateBlog";
import ShowDialog from "./components/shared/ShowDialog";

import "./App.css";

export default function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [dialogText, setDialogText] = useState({
        title: "",
        content: "",
        event: "",
        location: "",
    });

    const confirmDialog = () => {
        setTimeout(() => {
            if (dialogText.event === "logout") {
                setIsLoggedIn(false);
            } else if (dialogText.event === "NavLink") {
                window.open(dialogText.location, "_blank");
            } else if (dialogText.event === "DeleteBlog") {
                console.log("I was called!");
            }
            setShowLoading(false);
        }, 300);
        setShowLoading(true);
    };

    return (
        <div className={`App ${darkMode ? "dark" : "light"}`}>
            <div className="main-container">
                <Header
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    isLoggedIn={isLoggedIn}
                    setShowLoading={setShowLoading}
                    setShowDialog={setShowDialog}
                    setDialogText={setDialogText}
                />

                {/* Loading on the entire screen */}
                <Backdrop
                    sx={{ color: `${darkMode ? "#fff" : "#000"}`, zIndex: 999 }}
                    open={showLoading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>

                {/* Dialog component */}
                <ShowDialog
                    showDialog={showDialog}
                    setShowDialog={setShowDialog}
                    darkMode={darkMode}
                    confirm={confirmDialog}
                    {...dialogText}
                />

                <Routes>
                    {/* Home page route */}
                    <Route
                        exact
                        path="/"
                        element={
                            <Blogs
                                darkMode={darkMode}
                                setShowLoading={setShowLoading}
                            />
                        }
                    />

                    {/* Show blog seaparately */}
                    <Route
                        path="/blog/:id"
                        element={
                            <ShowBlog
                                darkMode={darkMode}
                                setDialogText={setDialogText}
                                setShowLoading={setShowLoading}
                                setShowDialog={setShowDialog}
                                isLoggedIn={isLoggedIn}
                            />
                        }
                    />

                    {/* Login page */}
                    <Route
                        path="/authUser"
                        element={<AuthPage darkMode={darkMode} />}
                    />

                    {/* Create blog */}
                    <Route
                        path="/createBlog"
                        element={
                            <CreateBlog
                                darkMode={darkMode}
                                setShowLoading={setShowLoading}
                                setShowDialog={setShowDialog}
                            />
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}
