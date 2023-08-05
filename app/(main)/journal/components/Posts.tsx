import { getPosts } from "../lib/actions";
import DeletePostButton from "./DeletePostButton";

export default async ({ admin }: { admin: boolean }) => {
  const posts = await getPosts();
  if (!posts) return <span className="text-red-500 dark:text-red-400">Failed to fetch posts.</span>;

  return (
    <>
      <section className="flex flex-wrap justify-center gap-2">
        {posts.map((post, index) => (
          <div key={post.id} className="flex flex-col justify-between rounded border border-kinda-black p-2 text-left dark:border-kinda-white">
            <div className="flex flex-col">
              <span className="text-xs">
                Post #{index + 1} ({post.date} UTC)
              </span>
              <span className="text-lg font-bold">{post.title}</span>
              <span className="whitespace-pre-wrap">{post.body}</span>
            </div>
            {admin && <DeletePostButton id={post.id} />}
          </div>
        ))}
        {!posts.length && <span>Awaiting posts...</span>}
      </section>
    </>
  );
};
