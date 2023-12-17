import { useState } from "react";
import { Link } from "react-router-dom";

export const Title = () => (
    <a href="/">
    <img className= "logo" alt="logo" src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"
    />
    </a>
);

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="Header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>logout</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>login</button>
            )}
        </div>
    );
};

export default Header;