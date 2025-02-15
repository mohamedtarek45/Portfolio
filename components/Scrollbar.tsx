"use client";

import dynamic from "next/dynamic";

// تحميل Lazy لمكون OverlayScrollbarsComponent
const LazyOverlayScrollbarsComponent = dynamic(
  () => import("overlayscrollbars-react").then((mod) => mod.OverlayScrollbarsComponent),
  { ssr: false } // تعطيل SSR لأنه يعتمد على المتصفح
);


const Scrollbar = ({ children }: any) => {
  return (
    <LazyOverlayScrollbarsComponent
      options={{ scrollbars: { theme: "os-theme-light" } }}
      style={{ maxHeight: "100px" } }
   
    >
      {children}
    </LazyOverlayScrollbarsComponent>
  );
};

export default Scrollbar;
