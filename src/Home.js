
import BlogList from './BlogList'
import useFetch from './userfetch';

const Home = () => {

    const {blogs , ispanding, error} = useFetch('http://localhost:8000/blogs')
   
    return ( 
        <div className="home">
            {error &&<div> {error}</div>}
            {ispanding && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title = "All Blogs...!" />}
        </div>
     );
}
 
export default Home;