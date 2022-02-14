import React from "react";
import Head from "next/head";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Bitbottom</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
