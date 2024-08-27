import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 p-4 text-white">
            <h1 className="text-xl font-bold">Top Products App</h1>
            <nav>
                <Link to="/" className="mr-4">Home</Link>
            </nav>
        </header>
    );
};

export default Header;
