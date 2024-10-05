import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <section className="flex p-16 bg-gray-800">
            <div className="flex-1 pr-10">
                <h1 className="text-4xl text-white">Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
                <p className="text-lg text-white my-4">
                    Em 2022, desenvolvedores devem estabelecer metas claras, como dominar novas linguagens e se envolver em projetos open source. Essas iniciativas fortalecem um portfólio robusto, fundamental para alcançar objetivos e progredir na carreira com eficácia.
                </p>
                <a href="#" className="bg-gray-700 text-white px-4 py-2 rounded-md inline-flex items-center">
                    Veja mais <span className="ml-2 text-green-400">→</span>
                </a>
            </div>
            <div className="flex-1">
                <Image
                    src="/images/img1.jpg"
                    alt="Guia para DEV"
                    className="w-3/4 rounded-lg"
                    width={800} // ajuste conforme necessário
                    height={500} // ajuste conforme necessário
                />
            </div>
        </section>
    );
};

export default Hero;