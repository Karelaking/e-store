import { Footer } from "@/components/server";
import { Header } from "@/components/server";
import React, { Fragment } from "react";

const layout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default layout;
