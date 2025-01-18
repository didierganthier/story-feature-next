import Story from '@/components/story';
import Image from 'next/image';

export default function Home() {

  const stories = [
    {
      id: 1,
      user: "Didier Ganthier",
      profilePic: "https://www.alerterouge.org/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocIIpj88RmR2b_UWGbVXSfojM5Z6RTU2sqvAQuePesHwObGMMh3C%3Ds96-c&w=64&q=75",
      storyTiles: [
        { type: "image", url: "https://images.unsplash.com/photo-1735447814306-8887e953a91f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" },
        { type: "image", url: "https://plus.unsplash.com/premium_photo-1737175447636-ac602781aeef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" }
      ]
    },
    {
      id: 2,
      user: "Dany Augustin",
      profilePic: "https://www.alerterouge.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famiralda.b603da9d.jpeg&w=3840&q=75",
      storyTiles: [
        { type: "image", url: "https://plus.unsplash.com/premium_photo-1734549548001-8b351b111dc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" },
        { type: "image", url: "https://images.unsplash.com/photo-1735437683931-b8a17f57912d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" }
      ]
    }
  ];

  return (
    <div className="w-full h-20 flex gap-4 bg-white py-5 px-10">
      <div className="w-12 h-12 border-2 rounded-full border-black">
        <Image src="https://cdn-icons-png.flaticon.com/128/3018/3018447.png" alt="Add Icon" width={48} height={48} />
      </div>
      {stories.map(story => (
        <Story key={story.id} src={story.profilePic} alt={story.user} storyTiles={story.storyTiles} />
      ))}
    </div>
  );
}
