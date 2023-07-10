import Link from "next/link";

async function getPosts(){
    const posts = await fetch('https://dummyjson.com/posts?limit=150');

    if(!posts.ok){
        throw new Error('Post fetching failed, try again')
    }

    return posts.json();
}


export default async function Blog() {
    const posts = await getPosts();
  return (
    <>
      <h1 className="text-center text-4xl mb-10">Latest Blog Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
            posts.posts.map(post=>{
                return <div className="border rounded-md p-4 shadow-sm relative" key={post.id}>
                    <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                    <p className="mb-5">{`${post.body.slice(0,100)}...`}</p>
                    <Link className="absolute bottom-0 rounded-b-sm py-1 hover:bg-gray-800 hover:text-white duration-500 text-center block right-0 left-0 bg-gray-200" href={`/blog/${post.id}`}>Read More</Link>
                    </div>
            })

        }

      </div>
    </>
  );
}
