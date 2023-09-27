import { Link, useLoaderData } from "react-router-dom";

const PostPage = () => {
    const { data } = useLoaderData();

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <Link to="/blog">Volver</Link>
        </div>
    );
};

export default PostPage;

export const loaderPost = async ({ params }) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );

    if (!res.ok)
        throw {
            status: res.status,
            statusText: "No Encontrado",
        };

    const data = await res.json();

    return { data };
};
