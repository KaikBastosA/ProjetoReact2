import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "./Pages/Home";
import Book from "./Pages/Book";
import BooksByCategory from "./Pages/BooksByCategory";
import LoginForm from "./Components/LoginForm/loginform";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginForm />
    },
    {
        path: "/app",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "book/:id",
                element: <Book />
            },
            {
                path: "category/:category",
                element: <BooksByCategory />
            }
        ]
    }
]);

export default router;