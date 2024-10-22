import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog ,handleAddToBookmark,handleMarkAsRead}) => {
    // console.log(blog);
    const {id, title, cover,author_img,author,reading_time,posted_date,hashtags } = blog

    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center '>
                <div className='flex mb-4'>
<img className='w-14' src={author_img} alt="" />
<div className='ml-6'>
    <h3 className="text-2xl">{author}</h3>
    <p>{posted_date}</p>

</div>
                </div>
                <div className='flex items-center'>
                <span>{reading_time} min read</span>
<button onClick={()=>{handleAddToBookmark(blog)}} className='ml-3 text-2xl'><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>
            <p>
            {
    hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>)
}
            </p>

<button onClick={()=>handleMarkAsRead(reading_time,id)} className='text-purple-600 underline font-bold'>Mark as read</button>

        </div>

    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead : PropTypes.func.isRequired
   

}
export default Blog;