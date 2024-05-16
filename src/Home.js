import BlogList from './BlogList';
import useFetch from "./useFetch";
const Home = () => {

    const { data: blogs, error, isPending } = useFetch('http://localhost:4000/blogs')

    // logical && in react templating out puts the right side only if the left is true
    return (
        <div className={"home"}>
            {error && <div> {error} </div>}
            {isPending && <div>loading...</div>}
            {blogs && <BlogList blogs={ blogs } title="All Blogs!"/>}
        </div>
    );
}

export default Home