import { createElement } from "../../helpers/createElement.js";
import ClubInfo from "./ClubInfo.js";
import ClubPoints from "./ClubPoints.js";

import styles from "../../styles/club.css"
export default function Club({ clubData, position }) {
  const { name, image, stats } = clubData;

  const ClubTitle = createElement(
    "h4",
    { class: styles.club__content },
    position ?? "-"
  );

  return createElement(
    "div",
    { class: styles.club },
    ClubTitle,
    ClubInfo({ name, image }),
    ClubPoints({ stats })
  );
}
