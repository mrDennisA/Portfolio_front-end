import { useState, useEffect } from "react";
import Image from "next/image";

// Styles
import styles from "./imageGallery.module.css";

export default function ImageGallery(props) {
  const [column, setColumn] = useState(null);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 576) {
        return setColumn(1);
      }
      if (window.innerWidth >= 576) {
        return setColumn(2);
      }
    };

    setColumn(resize);

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const Column = ({ oddEven }) => {
    return (
      <div className={styles.column}>
        {props.data.image.data.map((item, index) => {
          if (index % column === oddEven) {
            return (
              <div key={item.id}>
                <Image
                  src={item.attributes.url}
                  width={item.attributes.width}
                  height={item.attributes.height}
                  layout="responsive"
                  objectFit="contain"
                  alt={item.attributes.alternativeText}
                />
              </div>
            );
          }
        })}
      </div>
    );
  };

  return (
    <section className={styles.section}>
      <Column oddEven={0} />
      {column === 2 && <Column oddEven={1} />}
    </section>
  );
}
