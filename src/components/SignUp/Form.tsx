import { useState } from 'react';
import Button from '../Button/Button';
import classes from './Form.module.scss';

function Form({ handleClick, title }: any) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className={classes.form}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="password" />
      <Button onClick={() => handleClick(email, pass)}>{title}</Button>
    </div>
  );
}

export default Form;
