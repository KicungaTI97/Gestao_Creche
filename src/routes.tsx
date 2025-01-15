import { createBrowserRouter } from "react-router-dom";
import {SignIn} from './pages/auth/sign-in'
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { FormRegisterStudent } from "./pages/_layouts/register/formRegisterStudent"; 
import DashboardEscolar from "./pages/auth/dashboard";
import Footer from "./components/Footer";
import { About } from "./pages/about";
import { Services } from "./pages/services";
import { Contacts } from "./pages/contacts";

export const router = createBrowserRouter([
    {
        path: '/', 
        element:(<>
            <Navbar/>
            <Home />
            <Footer/>
        </>)
    },
    {
        path: '/sign-in',  
        element:(<>
            <Navbar/>
            <SignIn />
            <Footer/>
        </>)
    },
    {
        path: '/inscrição',  
        element:(<>
            <Navbar/>
            <FormRegisterStudent/>
            <Footer/>
        </>)
    },
    {
        path: '/admin',  
        element:(<>
            <Navbar/>
            <DashboardEscolar/>
            <Footer/>
        </>)
    },
    {
        path: '/about',  
        element:(<>
            <Navbar/>
                <About/>
            <Footer/>
        </>)
    },
    {
        path: '/services',  
        element:(<>
            <Navbar/>
                <Services/>
            <Footer/>
        </>)
    },
    {
        path: '/contacts',  
        element:(<>
            <Navbar/>
                <Contacts/>
            <Footer/>
        </>)
    },




])