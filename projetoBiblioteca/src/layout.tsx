import Header from "./Components/Header/header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
        <Header />
        <main>
        <Outlet />
        </main>
        </>
    );
}