import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-5 bg-gray-800">
            <div className="text-white text-2xl font-bold">The Blog</div>
            <nav className="flex">
                <a href="#" className="text-white mx-3">Home</a>
                <a href="#" className="text-white mx-3">Sobre</a>
                <a href="#" className="text-white mx-3">Categorias</a>
                <a href="#" className="text-white mx-3">Contato</a>
            </nav>
            <div className="flex items-center">
                <input type="text" placeholder="Buscar..." className="p-2 rounded-md" />
            </div>
        </header>
    );
};

export default Header;