import s from './styles.module.scss';

function Main({
  title = 'Vite - Boilerplate',
  description = 'React, Typescript e Sass'
}) {
  return (
    <div className={s.wrapper}>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}

export { Main };
