
import Image from 'next/image';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Danh sách bài viết',
    description: '123123',
  }
const posts = [
  {
    id: 1,
    title: 'Accusamus beatae ad facilis',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    id: 2,
    title: 'Reprehenderit est deserunt',
    thumbnailUrl: 'https://via.placeholder.com/150/1f8817',
  },
  {
    id: 3,
    title: 'Officia porro iure quia',
    thumbnailUrl: 'https://via.placeholder.com/150/ff7675',
  },
  {
    id: 4,
    title: 'Qui eius qui autem sed',
    thumbnailUrl: 'https://via.placeholder.com/150/0984e3',
  },
  {
    id: 5,
    title: 'Epudiandae iusto deleniti',
    thumbnailUrl: 'https://via.placeholder.com/150/00b894',
  },
  {
    id: 6,
    title: 'Iusto sunt nobis quasi veritatis',
    thumbnailUrl: 'https://via.placeholder.com/600/ffeaa7',
  },
];

export default function PostsPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Danh sách bài viết</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              width: '150px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <Image src={post.thumbnailUrl} alt={post.title} width={150} height={150} />
            <div style={{ padding: '10px', textAlign: 'center' }}>
              <p style={{ fontSize: '14px', margin: '0' }}>{post.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
