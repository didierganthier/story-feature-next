'use client';
import { useState } from 'react';
import Image from 'next/image';

interface StoryProps {
  src: string;
  alt: string;
  storyTiles: { type: string; url: string }[];
}

const Story: React.FC<StoryProps> = ({ src, alt, storyTiles }) => {
  const [showTiles, setShowTiles] = useState(false);

  return (
    <div onClick={() => setShowTiles(!showTiles)} className="cursor-pointer">
      <Image src={src} alt={alt} width={48} height={48} className="rounded-full" />
      {showTiles && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            {storyTiles.map((tile, index) => (
              <div key={index} className="mb-2">
                {tile.type === 'image' && <Image src={tile.url} alt={`Story tile ${index + 1}`} width={300} height={300} />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Story;
