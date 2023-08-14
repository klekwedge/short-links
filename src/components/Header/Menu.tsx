import Button from '../Button/Button';

import classes from './Menu.module.scss';

function Menu({ links = [], handleSignup, handleLogin }: any) {
  const token = null;

  return (
    <div className={classes.menu}>
      <div className={classes.pages}>
        {links.map((link) => (
          <a href={link.url} key={link.text} className={classes.link}>
            {link.text}
          </a>
        ))}
      </div>
      <div className={classes.login}>
        {token ? (
          <Button>Log out</Button>
        ) : (
          <>
            <Button variant="link" onClick={handleLogin}>
              Login
            </Button>
            <Button onClick={handleSignup}>Sign Up</Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Menu;
