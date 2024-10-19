import Hero from "@/components/hero/Hero";
import posts from "./data/posts";
import PostHighlight from "@/components/posthighlight/PostHighlight";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section className="post">
        {posts.map((post, index) => (
          <PostHighlight
            key={index} // Menggunakan index sebagai key sementara
            image={post.image}
            title={post.title}
            description={post.description}
            buttonLabel={post.buttonLabel}
            link={post.link} // Kirim link yang sama untuk judul, tombol, dan gambar
          />
        ))}
      </section>
    </main>
  );
}
