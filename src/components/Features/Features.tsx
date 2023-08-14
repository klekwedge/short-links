import classes from './Features.module.scss';

import featuresData from './data';

interface FeatureItemProps {
  title: string;
  body: string;
  icon: string;
}

function FeatureItem({ title, body, icon }: FeatureItemProps) {
  return (
    <article className={classes.item}>
      <figure>
        <img src={icon} alt={title} />
      </figure>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function Features() {
  return (
    <section className={classes.Features}>
      <div className="container">
        <h2 className={classes.title}>{featuresData.title}</h2>
        <p className={classes.description}>{featuresData.description}</p>
        <div className={classes.items}>
          {featuresData.items.map((item) => (
            <FeatureItem key={item.id} icon={item.icon} title={item.title} body={item.body} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
