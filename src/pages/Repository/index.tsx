/* eslint-disable no-use-before-define */
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import logoIcon from '../../assets/logo.svg';
import { FiChevronLeft } from 'react-icons/fi';

import styles from './Repository.module.css';
import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface RepositoryData {
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
  },
  open_issues: number;
  forks: number;
  stargazers_count: number;
}

interface RepositoryIssue {
  id: number;
  title: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const { repository } = useParams<RepositoryParams>();
  const [repo, setRepo] = React.useState<RepositoryData | null>(null);
  const [issues, setIssues] = React.useState<RepositoryIssue[]>([]);

  React.useEffect((): void => {
    api.get(`/repos/${repository}`)
      .then(response => setRepo(response.data))

    api.get(`/repos/${repository}/issues`)
      .then(response => setIssues(response.data))
  }, [repository]);

  console.log(repo)

  if (repo === null) return null;
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <img src={logoIcon} alt="Logo Github Explorer" />
        <Link to="/"><FiChevronLeft size={20} />Voltar</Link>
      </header>
      <section className={styles.repository}>
        <main>
          <img src={repo.owner.avatar_url} alt={repo.full_name} />
          <div className={styles.repositoryName}>
            <h2>{repo.full_name}</h2>
            <span>{repo.description}</span>
          </div>
        </main>
        <div className={styles.repositoryDescription}>
          <span>
            <h3>{repo.stargazers_count}</h3>
            <p>Stars</p>
          </span>
          <span>
            <h3>{repo.forks}</h3>
            <p>Forks</p>
          </span>
          <span>
            <h3>{repo.open_issues}</h3>
            <p>Issues abertas</p>
          </span>
        </div>
      </section>
      <div className={styles.cards}>
        {issues.map(({ id, title, user }) => (
          <div key={id} className={styles.cardIssue}>
            <h2>{title}</h2>
            <h5>{user.login}</h5>
          </div>
        ))}
      </div>
    </div>
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
