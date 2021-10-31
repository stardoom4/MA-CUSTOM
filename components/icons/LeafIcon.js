import * as React from "react";

function LeafIcon(props) {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 25 25"
            {...props}
        >
            <path
                d="M18.615 12.679a.447.447 0 01.143.321.43.43 0 01-.143.322c-4.768 4.38-13.697 4.388-18.473 0A.44.44 0 010 13.004a.424.424 0 01.142-.319c4.74-4.394 13.662-4.394 18.473-.006z"
                fill="#04A4BA"
            />
            <path
                d="M22.605 13.308c-2.85.778-5.378 2.384-7.234 4.597-1.855 2.212-2.947 4.922-3.123 7.754a.306.306 0 00.103.254.336.336 0 00.271.084c3.233-.437 6.183-2.004 8.282-4.398 2.1-2.393 3.199-5.445 3.088-8.569v-.06c.114-3.126-.987-6.182-3.09-8.577C18.8 2 15.846.434 12.609.003a.347.347 0 00-.268.082.318.318 0 00-.107.25c.178 2.834 1.27 5.546 3.13 7.76 1.857 2.214 4.389 3.82 7.242 4.597a.334.334 0 01.18.113.31.31 0 010 .39.335.335 0 01-.18.113z"
                fill="#04A4BA"
            />
        </svg>
    );
}

export default LeafIcon;
