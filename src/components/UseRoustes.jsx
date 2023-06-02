
import { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute/private";
import PublicRoute from "./PublicRoute/PublicRoute";


const HomePage = lazy(() => import("pages/Home/home"));
const RegisterForm = lazy(() => import("pages/Register/register"));
const LoginForm = lazy(() => import("pages/Login/login"));
const MyContactsPage = lazy(() => import("pages/Contacts/myContacts"));
const NotFoundPage = lazy(() => import("pages/NotFoundPages/notFound"));
const SharedLayout = lazy(() => import("./layout"));



const UserRoutes = () => {
    return (
        <Suspense fallback={<p>....</p>}>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<HomePage />} />
                    <Route element={<PublicRoute />}>
                        <Route path="/register" element={<RegisterForm />} />
                        <Route path="/login" element={<LoginForm />} />
                    </Route>

                    <Route element={<PrivateRoute />}>
                        <Route path="/contacts" element={<MyContactsPage />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>


        </Suspense>
    )

}
export default UserRoutes;