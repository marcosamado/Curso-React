import { useLoaderData } from "react-router-dom";

const PostPage = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    );
};

export default PostPage;

export const loaderPost = async ({ params }) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const data = await res.json();

    return { data };
};
