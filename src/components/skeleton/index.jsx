import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./skeleton.css";

const MovieRowSkeleton = () => {
  let length = Array.from(Array(8).keys());
  return (
    <div className="skeletonRowContaner">
      {length.map((index) => (
        <div className="skeletonRowItem" key={index}>
          <div className="skeletonRowImage">
            <Skeleton count={1} height={240} width={180} />
          </div>

          <p>
            <Skeleton count={1} width={160} />
          </p>
          <p>
            <Skeleton count={1} width={100} />
          </p>
        </div>
      ))}
    </div>
  );
};

export default MovieRowSkeleton;
