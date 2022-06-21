import React from "react";
import Preloader from "../components/common/Preloader";

const AppSuspense = (Component) => {
  return (
    <React.Suspense fallback={<Preloader />}>
      <Component />
    </React.Suspense>
  );
};

export default AppSuspense;
