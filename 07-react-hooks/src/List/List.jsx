import React from 'react'

const List = () => {

    const fruits = [
        "Apple",
        "Banana",
        "Orange",
        "Grapes",
        "Mango",
        "Strawberry",
        "Pineapple",
        "Peach",
        "Watermelon",
        "Blueberry",
    ];


    return (

        <>
        {fruits.map((fruits,index)=>{
            return(
                <>
                <h1 key={index}>{fruits}</h1>
                </>
            )
        })}

        </>
    )
}

export default List