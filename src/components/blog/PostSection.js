import Post from "./Post";

function PostSection(props){
    console.log(props)
    return props.posts.map((data) => {
        return <Post data={data}/>
    })
}

export default PostSection
