/* eslint-disable no-use-before-define */
import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Error from '../../components/Error/index';

import { FiChevronRight } from 'react-icons/fi';

import logoIcon from '../../assets/logo.svg';

import styles from './Dashboard.module.css';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
};

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = React.useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });
  const [inputError, setInputError] = React.useState('');
  const [newRepo, setNewRepo] = React.useState('');

  React.useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError("Digite um autor/nome do repositório");
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError("Erro na busca por esse repositório.");
    }
  };

  return (
    <>
      <header className={styles.header}>
        <img src={logoIcon} alt="Logo Github" />
        <h1>Explore repositórios no Github</h1>
        <form onSubmit={handleAddRepository}>
          <input
            style={{ border: inputError !== '' ? '2px solid #C53030' : '' }}
            type="text"
            value={newRepo}
            onChange={(event) => setNewRepo(event?.target.value)}
            placeholder="Digite aqui"
          />
          <button type="submit">Pesquisar</button>
        </form>
        {inputError && <Error>{inputError}</Error>}
      </header>
      <section className={styles.repository}>
        <div className={styles.cards}>
          {repositories.map((repository) => (
            <Link key={repository.full_name} to={`repository/${repository.full_name}`} className={styles.cardRepository}>
              <div className={styles.content}>
                <img
                  src={repository.owner.avatar_url}
                  alt={repository.owner.login}
                />
                <div className={styles.repositoryName}>
                  <span>{repository.full_name}</span>
                  <p>{repository.description}</p>
                </div>
              </div>
              <FiChevronRight size={20} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
