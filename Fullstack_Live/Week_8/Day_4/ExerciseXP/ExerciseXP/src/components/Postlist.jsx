import './Postlist.css';

const PostList = (props) =>{
    const {id, title, content, date, slug} = props.info

    return(
        <>
            <div className="postcard">
                <div className='title'>
                    <p>{id}</p>
                    <h3>{title}</h3>
                </div>
                <div className='content'>
                    <p>{content}</p>
                    <p>{date}</p>
                </div>
                <p>{slug}</p>
            </div>
        </>
    )
}

export default PostList