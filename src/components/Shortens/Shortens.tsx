import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Button/Button';
import classes from './Shortens.module.scss';

function Shortens() {
  const [copiedLinks, setCopiedLink] = useState(null);
  // const links = useSelector(selectLinks);
  const links = []

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLink(link);
    });
  };

  // if (!links?.length) return null;

  return (
    <section className={classes.Shortens}>
      <div className="container">
        {links.map((item) => (
          <AnimatePresence key={item.code}>
            <motion.div
              className={classes.item}
              data-active={copiedLinks === item.full_short_link2}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              <span>{item.original_link}</span>
              <span>{item.full_short_link2}</span>
              <Button type="button" variant="square" onClick={() => copyToClipboard(item.full_short_link2)}>
                {copiedLinks === item.full_short_link2 ? 'Copied!' : 'Copy'}
              </Button>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
}

export default Shortens;
