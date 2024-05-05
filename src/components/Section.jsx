import Container from "./Container";
import { twMerge } from "tailwind-merge";

const Section = ({
  sectionClasses = "",
  containerClasses,
  children,
  withoutContainer = false,
  id,
}) => {
  return (
    <section
      id={id}
      className={twMerge(
        "section-background py-[56px] md:py-[64px] lg:py-[80px]",
        sectionClasses
      )}
    >
      {withoutContainer ? (
        children
      ) : (
        <Container containerClasses={containerClasses}>{children}</Container>
      )}
    </section>
  );
};

export default Section;
