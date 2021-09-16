import { Link } from "react-router-dom";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div>
      <NavLink to={"/dialogs/" + props.id} >
        <div>
          <div className={s.Item + " " + s.active}>
            <span className={s.Name}>{props.userName}</span>
            <br />
            <span className={s.UserLastOnline}>
              last online at {props.lastTimeOnline}
            </span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
