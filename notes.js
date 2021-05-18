import {useState, useEffect} from 'react' // React Dependancies (useState & useEffect)
import BlogList from './BlogList' // BlogList is a component

const Home = () => {

    const [blogs, setBlogs] = useState([]); // UseState hook, initalized with empty array to avoid errors when fetching and maping


    const handleDelete = (id) => { //Delete blog function 
        const newBlogs = blogs.filter(blog => blog.id !== id) // Looks into the blog state and replacates it.. minus the blog with the ID that is passed to the function
        setBlogs(newBlogs) //Setting the state for blogs to the value of newBlogs
    }

    useEffect(() =>{ //UseEffect runs when page is rendered or when a state is changed
        fetch('http://localhost:8000/blogs') //API for fetching data
            .then((res) =>{ // Fetch returns a promise response = res
                return res.json() // turning the response into a JSON object
            })
            .then((data)=>{  // Data is the JSON object
                setBlogs(data) // Setting the 'blogs' state to the JSON object
            })
    },[]) // Runs only on page load, so data is only fetched once

    return ( 
        <div className='home'>
            <BlogList blogs={blogs} title='All blogs!' handleDelete={handleDelete}/> 
        </div>
     );
}
 
export default Home;
