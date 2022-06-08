import Card from "../Card";

import InView from "../../Layout/InView";

import styles from "./projects.module.css";

export default function Projects(props) {
  // console.log(props);
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        {props.data.map((item, index) => {
          const delay = (index + 1) * 100;
          return (
            <InView key={item.id} delay={delay}>
              <Card data={item} />
            </InView>
          );
        })}
      </div>
    </section>
  );
}
