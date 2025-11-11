import { SiBootstrap, SiCss3, SiGit, SiHtml5, SiJavascript, SiMui, SiMysql, SiPhp, SiReact, SiSass, SiTypescript } from "react-icons/si";
import type { SkillsType } from "../../types/skillsType";


export const skills: SkillsType[] = [
  {
    icon: <SiHtml5 />,
    name: "HTML5",
  },
  {
    icon: <SiCss3 />,
    name: "CSS3",
  },
  {
    icon: <SiSass />,
    name: "SASS",
  },
  {
    icon: <SiBootstrap />,
    name: "Bootstrap",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
  },
  {
    icon: <SiReact />,
    name: "React.js",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
  },
  {
    icon: <SiPhp />,
    name: "PHP",
  },
  {
    icon: <SiMysql />,
    name: "SQL",
  },
  {
    icon: <SiMui />,
    name: "Material UI",
  },
  {
    icon: <SiGit />,
    name: "git",
  },
];
