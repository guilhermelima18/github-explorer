import React from 'react';
import { string } from 'yargs';

import styles from './Error.module.css';

interface ErrorProps {
  children: string;
}

const Error = ({ children }: ErrorProps) => {
  return (
    <span className={styles.error}>{children}</span>
  );
};

export default Error;
