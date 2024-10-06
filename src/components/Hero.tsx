import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <section className="flex p-16 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex-1 pr-10">
                <h1 className="text-4xl text-white leading-tight" aria-label="Guia para DEV">Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
                <p className="text-lg text-gray-300 my-4">
                    Em 2022, desenvolvedores devem estabelecer metas claras, como dominar novas linguagens e se envolver em projetos open source. Essas iniciativas fortalecem um portfólio robusto, fundamental para alcançar objetivos e progredir na carreira com eficácia.
                </p>
                <a href="#" className="bg-gray-700 text-white px-4 py-2 rounded-md inline-flex items-center transition duration-200 hover:bg-gray-600" aria-label="Leia mais sobre o guia">
                    Veja mais <span className="ml-2 text-green-400">→</span>
                </a>
            </div>
            <div className="flex-1">
                <Image
                    src="/images/img1.jpg"
                    alt="Guia para DEV"
                    className="w-full rounded-lg"
                    width={800} 
                    height={500} 
                />
            </div>
        </section>
    );
};

export default Hero;