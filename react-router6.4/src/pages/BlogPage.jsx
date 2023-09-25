import { Link, useLoaderData } from "react-router-dom";

const BlogPage = () => {
    const { data } = useLoaderData();

    return (
        <div>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <Link to={`${post.id}`}>
                            {post.id} -- {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPage;

export const loaderBlogs = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return { data };
};
