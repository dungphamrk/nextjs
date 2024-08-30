import Head from 'next/head';

const page = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Hướng dẫn sử dụng JSON-LD trong Next.js",
    "description": "Bài viết này hướng dẫn cách sử dụng JSON-LD để tối ưu hóa SEO trong Next.js.",
    "author": {
      "@type": "Person",
      "name": "Nguyễn Văn A"
    },
    "datePublished": "2024-08-29"
  };

  return (
    <>
      <Head>
        <meta name="description" content="JSON-LD để tối ưu hóa SEO trong Next.js." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
      <main>
        <p>Tác giả: Nguyễn Văn A</p>
        <p>Ngày xuất bản: 2024-08-29</p>
      </main>
    </>
  );
}

export default page;
