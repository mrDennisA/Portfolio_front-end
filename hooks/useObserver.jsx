import { useState, useEffect } from "react";

const useObserver = (ref) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const { current } = ref;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting);
          observer.unobserve(current);
        }
      },
      { rootMargin: "0px 0px -96px 0px" }
    );

    observer.observe(current);
    return () => {
      observer.unobserve(current);
    };
  }, [ref]);

  return isVisible;
};

export default useObserver;
