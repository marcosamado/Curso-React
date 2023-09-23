import { Link, useSearchParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import { useEffect } from "react";

const Blog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get("name"));

    const { data, loading, error } = useFetchData(
        "https://jsonplaceholder.typicode.com/posts"
    );

    // useEffect(() => {
    //     setSearchParams({ filter: "marcos" });
    // }, [searchParams]);

    if (loading) return <p>Cargando....</p>;
    if (error) return <p>Error......</p>;

    const handleChange = (e) => {
        let filter = e.target.value;

        if (filter) {
            setSearchParams({ filter: filter });
        } else {
            setSearchParams({});
        }
    };

    return (
        <div>
            <h1>Blog</h1>
            <input
                type="text"
                onChange={handleChange}
                className="form-control my-3"
                value={searchParams.get("filter") || ""}
            />
            <ul className="list-group">
                {data
                    .filter((item) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = item.title.toLowerCase();
                        return name.startsWith(filter.toLocaleLowerCase());
                    })
                    .map((item) => (
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
