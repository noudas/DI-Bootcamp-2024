import { ReactElement, ReactNode } from "react";


type SectionProps = {
    children: ReactElement
}

const Section = ({children}: SectionProps): ReactElement => {
    return(
        <>
            <h1>Child... {children}</h1>
        </>
    )
}

export default Section