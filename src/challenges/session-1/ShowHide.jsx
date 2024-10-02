import { useState } from "react";

const ShowHide = () => {
    let buttonText = "Show/Hide";

    return (
        <section className="w-full">
            <button>{buttonText}</button>
            <h2 className="text-3xl font-bold underline">
                Welcome to React Upskilling Study Group
            </h2>
        </section>
    )
}

export default ShowHide;
