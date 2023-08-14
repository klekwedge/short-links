import classes from './CallToAction.module.scss';

import Button from '../Button/Button';

function CallToAction() {
  return (
    <section className={classes.CallToAction}>
      <h2>Boost your links today</h2>
      <Button>Get Started</Button>
    </section>
  );
}

export default CallToAction;
