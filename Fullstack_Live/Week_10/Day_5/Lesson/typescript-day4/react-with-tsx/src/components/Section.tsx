import { ReactElement, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

const Section = ({ children }: SectionProps): ReactNode => {
  return (
    <>
      <h2>Children:... {children}</h2>
    </>
  );
};
export default Section;
