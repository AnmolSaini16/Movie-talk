import React, { useState, useRef, useEffect } from "react";

export const LazyImage = (imageProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    if (!shouldLoad && placeholderRef.current) {
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
          setShouldLoad(true);
        }
      });
      observer.observe(placeholderRef.current);
      return () => observer.disconnect();
    }
  }, [shouldLoad, placeholderRef]);

  return shouldLoad ? (
    <img
      className={imageProps.isRowItemImg ? "rowItem__img" : "searchPage__img"}
      src={imageProps.src}
    />
  ) : (
    <img
      className={imageProps.isRowItemImg ? "rowItem__img" : "searchPage__img"}
      src="placeholder.webp"
      ref={placeholderRef}
    />
  );
};
