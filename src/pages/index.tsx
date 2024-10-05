import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Posts from '../components/Posts';
import AdditionalPosts from '../components/AdditionalPosts';

const HomePage: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header />
            <Hero />
            <Posts />
            <AdditionalPosts />
        </div>
    );
};

export default HomePage;
