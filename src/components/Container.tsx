import React from "react";
import Head from "next/head";

export default function Container({ children }: any) {
  return (
      <div className="container">{children}</div>
  );
}
