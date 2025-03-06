import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Home from "../pages/Home";
// import Functions from "../pages/Functions";

const AppRouter = () => {
    <Router>
        <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/functions" element={<Functions />} /> */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
}

export default AppRouter;