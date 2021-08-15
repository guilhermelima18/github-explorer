import React from 'react';

import logoIcon from '../../assets/logo.svg';

import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={logoIcon} alt="Logo Github" />
        <h1>Explore repositórios no Github</h1>
        <form>
          <input type="text" placeholder="Digite aqui" />
          <button>Pesquisar</button>
        </form>
      </header>
      <section className={styles.repository}>
        <div className={styles.cards}>
          <div className={styles.cardRepository}>
            <img src="https://github.com/guilhermelima18.png" alt="Imagem de perfil" />
            <div className={styles.repositoryName}>
              <span>guilhermelima18/repo</span>
              <p>Descrição do projeto</p>
            </div>
          </div>
          <div className={styles.cardRepository}>
            <img src="https://github.com/guilhermelima18.png" alt="Imagem de perfil" />
            <div className={styles.repositoryName}>
              <span>guilhermelima18/repo</span>
              <p>Descrição do projeto</p>
            </div>
          </div>
          <div className={styles.cardRepository}>
            <img src="https://github.com/guilhermelima18.png" alt="Imagem de perfil" />
            <div className={styles.repositoryName}>
              <span>guilhermelima18/repo</span>
              <p>Descrição do projeto</p>
            </div>
          </div>
          <div className={styles.cardRepository}>
            <img src="https://github.com/guilhermelima18.png" alt="Imagem de perfil" />
            <div className={styles.repositoryName}>
              <span>guilhermelima18/repo</span>
              <p>Descrição do projeto</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
