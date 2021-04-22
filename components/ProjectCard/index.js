import { ViewIcon } from "../../utils/svgs";
import style from "./projectCard.module.scss";

const ProjectCard = ({ attribute }) => {
  return (
    <a
      href={attribute.link}
      target="_blank"
      rel="noreferrer noopener"
      className={`${style.projectCardWrapper} projectCardWrapper ${
        attribute.class === "new" ? style.new : ""
      }`}
    >
      <div
        className={style.projectCard}
        style={{ backgroundImage: `url(${attribute.image})` }}
      >
        <div className={style.overlay}>
          <div className={style.svgWrapper}>
            <ViewIcon />
            <p>view project</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
