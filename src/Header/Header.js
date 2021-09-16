import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.header_img} src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"></img>
    </header>
  );
};

export default Header;