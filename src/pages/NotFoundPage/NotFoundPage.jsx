import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.heading}>404</h1>
      <p className={css.message}>Page not found</p>
      <p className={css.instruction}>
        Please check the URL or go back to the homepage.
      </p>
      <a href="/" className={css.homeLink}>
        Go to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
