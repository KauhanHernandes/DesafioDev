import React from 'react';
import Post from './Post';
import Image from 'next/image';

const AdditionalPosts: React.FC = () => {
    return (
        <section className="flex p-5 flex-wrap">
            {[
                {
                    title: '10 dicas para conseguir a vaga desejada',
                    description: 'Aprenda como se destacar no mercado de trabalho.',
                    date: 'Janeiro 04, 2022',
                    image: '/images/img4.jpg'
                },
                {
                    title: 'Deixe seu código mais semântico com essas dicas',
                    description: 'Melhore a legibilidade e a manutenção do seu código.',
                    date: 'Fevereiro 15, 2022',
                    image: '/images/img6.jpg'
                },
                {
                    title: 'Use essas dicas nas suas aplicações mobile',
                    description: 'Otimize a experiência do usuário em dispositivos móveis.',
                    date: 'Março 10, 2022',
                    image: '/images/img5.jpg'
                }
            ].map((post, index) => (
                <Post
                    key={index}
                    title={post.title}
                    date={post.date}
                    description={post.description}
                    imageUrl={post.image}
                />
            ))}
        </section>
    );
};

export default AdditionalPosts;