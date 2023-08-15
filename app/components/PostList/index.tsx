export default function PostList({ content }: { content: any }) {
  return (
    <div>
      {content.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
}
