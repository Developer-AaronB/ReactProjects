import Post from "./Post";



function Postlist() {
    return (
        <ul>
            <Post author="Aaron" body="React.js is awesome" />
            <Post author="Danny" body="Check out the full course" />
        </ul>
    );
}

export default Postlist;