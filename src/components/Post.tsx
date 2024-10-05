import React from 'react';
import Image from 'next/image';

interface PostProps {
    title: string;
    date: string;
    description: string;
    imageUrl?: string; 
}

const Post: React.FC<PostProps> = React.memo(({ title, date, description, imageUrl }) => (
    <div className={`bg-gray-800 rounded-lg p-4 mb-4 ${imageUrl ? 'flex-1 mr-5' : ''}`}>
        {imageUrl && (
            <Image
                src={imageUrl}
                alt={title}
                className="w-full rounded-md"
                width={800} // ajuste conforme necessário
                height={500} // ajuste conforme necessário
            />
        )}
        <h3 className="text-xl text-white">{title}</h3>
        <div className="text-gray-400">{date}</div>
        <p className="text-white mt-2">{description}</p>
    </div>
));

export default Post;