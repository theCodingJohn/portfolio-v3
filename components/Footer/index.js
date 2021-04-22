import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.row}>
        <div className={style.column}>
          <h4>
            I'm available for freelance work{""}
            <span className={style.underline}></span>
          </h4>
          <a className={style.contact} href="mailto:codingjohn@outlook.com">
            Contact Me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
