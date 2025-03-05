import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "./Pages/Home";
import Book from "./Pages/Book";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "book/:id",
                element: <Book />
            }
        ]
    }
]);

export default router;