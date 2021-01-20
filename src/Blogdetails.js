import { useParams } from "react-router-dom";
import useFetch from './userfetch';

const BlogDetail = () => {
    const {id}=useParams()
    const {blogs , ispanding, error} = useFetch('http://localhost:8000/blogs/'+id)
    return ( 
        <div className="blo-detail">
            {ispanding && <div>Loading..</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>   
                    <h2>{blogs.title}</h2>
                    <p>Written by : {blogs.author}</p>
                    <div>{blogs.body}</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetail; 