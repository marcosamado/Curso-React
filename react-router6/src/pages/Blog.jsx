import { Link } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

const Blog = () => {
    const { data, loading, error } = useFetchData(
        "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(data);

    if (loading) return <p>Cargando....</p>;
    if (error) return <p>Error......</p>;

    return (
        <div>
            <h1>Blog</h1>
            <ul className="list-group">
                {data.map((item) => (
                    <li className="list-group-item" key={item.id}>
                        <Link to={`/blog/${item.id}`} key={item.id}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;
