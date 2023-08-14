import cn from 'classnames';
import classes from './Button.module.scss';

interface ButtonProps {
  onClick?: () => void;
  variant?: string;
  size?: string;
  children: React.ReactNode;
}

function Button({ onClick, variant = '', size = 'medium', children }: ButtonProps) {
  const mainCn = cn(classes.button, classes[size], classes[variant]);

  return (
    <button className={mainCn} type='button' onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
