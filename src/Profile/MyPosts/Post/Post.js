import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.post_inside}>
        <div className={classes.posts_avatar}></div>
        <div className={classes.posts_text}>
          {props.content}
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Post;