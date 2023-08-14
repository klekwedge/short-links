/* eslint-disable react/button-has-type */
import cn from 'classnames';
import classes from './Button.module.scss';

interface ButtonProps {
  onClick?: () => void;
  type: string;
  variant?: string;
  size?: string;
  children: React.ReactNode;
}

function Button({ onClick, variant = '', type, size = 'medium', children }: ButtonProps) {
  const mainCn = cn(classes.button, classes[size], classes[variant]);

  return (
    <button className={mainCn} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
