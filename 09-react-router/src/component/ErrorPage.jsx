import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <div>
                <h1>page not found</h1>
            </div>

            <Link to="/">
                <button>home</button>
            </Link>
        </>
    );
};

export default ErrorPage;