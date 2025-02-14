"use client";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const Scrollbar = ({ children }: any) => {
  return (
    <OverlayScrollbarsComponent
      options={{ scrollbars: { theme: "os-theme-light" } }}
      style={{ maxHeight: "100px" } }
   
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};

export default Scrollbar;
