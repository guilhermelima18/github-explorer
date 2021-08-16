/* eslint-disable no-use-before-define */
import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './Repository.module.css';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { repository } = useParams<RepositoryParams>();

  return (
    <>
      <h1 className={styles.title}>Repository - {repository}</h1>
    </>
  );
};

export default Repository;

/* const user = {
  email: 'guilhermelima18@hotmail.com',
  password: '123456',
  techs: [
    'Node.js',
    'React.js,
{ title: 'Javascript', experience: 100 }
  ]
}

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
} */
