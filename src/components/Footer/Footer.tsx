import Logo from 'images/logo.svg';
import classes from './Footer.module.scss';

import footerData from './data';

interface MenuGroupProps {
  groupTitle: string;
  links: ILink[];
}

interface ILink {
  text: string;
  url: string;
}

function MenuGroup({ groupTitle, links }: MenuGroupProps) {
  return (
    <div className={classes.menuGroup}>
      <h4>{groupTitle}</h4>
      {links.map((link) => (
        <a key={link.text} href={link.url}>
          {link.text}
        </a>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className={classes.Footer}>
      <div className={`${classes.content} container`}>
        <img src={Logo} alt='logo' className={classes.logo} />
        <div className={classes.menu}>
          {footerData.menu.map((menuItem) => (
            <MenuGroup key={menuItem.id} groupTitle={menuItem.groupTitle} links={menuItem.links} />
          ))}
        </div>

        <div className={classes.socials}>
          {footerData.socials.map(({ id, url, image }) => (
            <a key={id} href={url}>
              <img src={image} alt="social" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
