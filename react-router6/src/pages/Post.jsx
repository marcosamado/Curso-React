import { useParams, Link } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

const Post = () => {
    const { id } = useParams();

    const { data, loading, error } = useFetchData(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (loading) return <p>Cargado....</p>;
    if (error) return <p>Error......</p>;

    return (
        <>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <Link to="/blog">Volver</Link>
        </>
    );
};

export default Post;
