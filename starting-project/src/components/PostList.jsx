import Post from "./Post";
import classes from './PostList.module.css';


function PostList() {
    return (
        <ul className={classes.posts}>
            <Post author="Aaron" body="React.js is awesome" />
            <Post author="Danny" body="Check out the full course" />
        </ul>
    );
}

export default PostList;