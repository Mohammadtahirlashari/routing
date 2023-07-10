
export const dynamicParams = false;
async function getPost(id) {
  const post = await fetch(`https://dummyjson.com/posts/${id}`);

  if (!post.ok) {
    throw new Error("Post fetching failed, try again");
  }

  return post.json();
}
export async function generateStaticParams() {
  const data = await fetch("https://dummyjson.com/posts?limit=150");
  const posts = await data.json();
  return posts.posts.map((post) => ({
      id: `${post.id}`,
  }));
};

export default async function Id({params}) {
  const post = await getPost(params.id);
  const title = post.title;
  const body = post.body;
  return (
    <>
      <h1 className="text-center text-4xl mb-10">Latest Blog Posts</h1>
        <div className="p-4" key={post.id}>
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <p className="mb-5">{body}</p>
        </div>
    </>
  );
}
