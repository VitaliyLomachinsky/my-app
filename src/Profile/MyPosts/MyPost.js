import Post from "./Post/Post";
import classes from "./MyPost.module.css";
import React from "react";

const MyPost = (props) => {
  let postsDataNew = props.Profile_Data.postsData.map((post) => (
    <Post content={post.text} id={post.id} />
  ));

  let NewPost = React.createRef();

  let AddPost = () => {
    let text = NewPost.current.value;
    props.dispatch({ type: "AddPost", text: text });
  };

  let OnChangePost = () => {
    let text = NewPost.current.value;
    props.dispatch({ type: "ChangePostBuffer", text: text });
  };

  return (
    <div className={classes.post}>
      <h2>My posts</h2>
      <div className={classes.My_posts}>
        <textarea
          ref={NewPost}
          className={classes.My_posts_textarea}
          name="massage"
          onChange={OnChangePost}
          value={props.Profile_Data.PostTextBuffer}
        ></textarea>
        <button
          className={classes.My_posts_textarea_sumbit_btn}
          onClick={AddPost}
        >
          Submit
        </button>
      </div>

      <div className={classes.all_posts}>{postsDataNew}</div>
    </div>
  );
};

export default MyPost;
