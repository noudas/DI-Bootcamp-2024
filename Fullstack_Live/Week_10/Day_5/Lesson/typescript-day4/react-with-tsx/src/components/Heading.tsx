import { ReactElement } from "react";

type HeadingProps = {
  title: string;
  subtitle: string;
};

const Heading = ({ title, subtitle }: HeadingProps): ReactElement => {
  return (
    <>
      <h2>My Title: ...{title}</h2>
      <h3>{subtitle}</h3>
    </>
  );
};
export default Heading;
