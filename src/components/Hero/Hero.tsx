import Img from "../../../public/img/illustration-working.svg";
import classes from './Hero.module.scss';
import Button from '../Button/Button';

function Hero() {
  return (
    <section className={`${classes.hero} container`}>
      <div className={classes.imgContainer}>
        <img src={Img} alt="hero" className={classes.img} />
      </div>
      <article className={classes.text}>
        <h1 className={classes.title}>More than just shorter links</h1>
        <p className={classes.description}>
          Build your brand&apos;s recognition and get detailed insights on how your links are performing.
        </p>
        <Button size="large">Get Started</Button>
      </article>
    </section>
  );
}

export default Hero;
