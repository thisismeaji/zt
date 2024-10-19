import Hero from "@/components/hero/Hero";
import posts from "./data/posts";
import PostHighlight from "@/components/posthighlight/PostHighlight";

export default function Home() {
  return(
    <main>
      <section>
        <Hero/>
      </section>
      <section className="post">
        {posts.map(post => (
          <PostHighlight
            image={post.image}
            title={post.title}
            description={post.description}
            buttonLabel={post.buttonLabel}
          />
        ))}
      </section>
    </main>
  );
}