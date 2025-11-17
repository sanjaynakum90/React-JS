import React from 'react'
import { useNavigate, useParams } from "react-router-dom";

const Product = (id) => {
    const { id } = useParams();

    const naviget = useNavigate();

    const handlesubmit = (e)=>{
        e.perventdefault();
        naviget("/");
    }
    return (
        <div>
            <h1>this is product -{id}</h1>

            <form onSubmit={handlesubmit}>
                <input type="text" />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Product