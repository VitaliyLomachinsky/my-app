import classes from "./OnlineFriendsList.module.css"

const OnlineFriendsList = (props) =>{
 
  return (
    <div className={classes.item}>
        <img className={classes.avatar} src={props.url}></img>
        
      </div>
  );
}

export default OnlineFriendsList;