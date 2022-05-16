import {React} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ProfileGallery from "./components/ProfileGallery"
import SetupDate from "./components/SetupDate"
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";



function App() {
    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <BrowserRouter>
                        <Routes>
                            <Route exact path="/" element={<ProfileGallery />} />
                            <Route exact path="/setup-date" element={<SetupDate />} />
                            {/*<Route component = {NotFound} />*/}
                        </Routes>
                    </BrowserRouter>
                    <Outlet />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default App;