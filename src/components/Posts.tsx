import React from 'react';
import Post from './Post';

const Posts: React.FC = () => {
    return (
        <section className="flex p-5 flex-wrap">
            <Post
                title="Começando com ReactJS em 2022"
                date="Janeiro 04, 2022"
                description="Em 2022, o uso de componentes funcionais com Hooks se tornou a prática recomendada em ReactJS. Hooks como useState e useEffect permitem gerenciar estado e efeitos colaterais de forma simples e concisa."
                imageUrl="/images/img3.jpg"
            />
            <div className="flex-1 flex flex-col">
                {[
                    {
                        title: 'Conheça as principais técnicas para conseguir uma vaga internacional em programação',
                        description: 'Dicas valiosas para se destacar em entrevistas internacionais.',
                        date: 'Janeiro 04, 2022'
                    },
                    {
                        title: 'Veja a evolução do Front-end na prática',
                        description: 'Uma análise das principais mudanças no desenvolvimento Front-end.',
                        date: 'Fevereiro 10, 2022'
                    },
                    {
                        title: 'Entenda os fundamentos do JavaScript moderno',
                        description: 'Explore os conceitos essenciais do JavaScript atual.',
                        date: 'Março 15, 2022'
                    },
                    {
                        title: 'Desenvolvimento de Aplicações com ReactJS',
                        description: 'Aprenda as melhores práticas para construir aplicações com React.',
                        date: 'Abril 20, 2022'
                    },
                    {
                        title: 'Criando Aplicações Eficientes em ReactJS',
                        description: 'Descubra dicas essenciais para desenvolver apps com React.',
                        date: 'Abril 20, 2022'
                    },
                    {
                        title: 'Construindo Apps Modernos Usando ReactJS',
                        description: 'Explore estratégias para aprimorar suas aplicações em React.',
                        date: 'Abril 20, 2022'
                    }
                ].map((post, index) => (
                    <Post
                        key={index}
                        title={post.title}
                        date={post.date}
                        description={post.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Posts;