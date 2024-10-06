import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-between items-center p-5 bg-gray-800 shadow-md">
            <div className="text-white text-2xl font-bold">The Blog</div>
            <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} absolute md:static bg-gray-800 w-full md:w-auto z-10`}>
                <a href="#" className="text-white mx-3 py-2 hover:bg-gray-700 rounded" aria-label="Home">Home</a>
                <a href="#" className="text-white mx-3 py-2 hover:bg-gray-700 rounded" aria-label="Sobre">Sobre</a>
                <a href="#" className="text-white mx-3 py-2 hover:bg-gray-700 rounded" aria-label="Categorias">Categorias</a>
                <a href="#" className="text-white mx-3 py-2 hover:bg-gray-700 rounded" aria-label="Contato">Contato</a>
            </nav>
            <div className="flex items-center">
                <input type="text" placeholder="Buscar..." className="p-2 rounded-md" />
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white ml-3 focus:outline-none">
                    {isOpen ? '✖' : '☰'}
                </button>
            </div>
        </header>
    );
};

export default Header;