import { useState } from "react";

const ShowHide = () => {
    const [show, setShow] = useState(false);
    let buttonText = "Show";
    function toggleShow() {
        setShow(prevState => !prevState);
    }

    if (show) {
        buttonText = "Hide";
    }

    return (
        <section className="w-full">
            <button onClick={toggleShow}>{buttonText}</button>
            {show && <h2 className="text-3xl font-bold underline">
                Welcome to React Upskilling Study Group
            </h2>}
        </section>
    )
}

export default ShowHide;
