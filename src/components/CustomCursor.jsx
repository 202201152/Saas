import { useEffect } from "react";

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector(".custom-cursor");

        const move = (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);
    }, []);

    return <div className="custom-cursor pointer-events-none" />;
};

export default CustomCursor;
