import { ReactElement } from "react"

type HeadingProps = {
    title: string;
    subtitle: string;
}

const Heading = ({title, subtitle} : HeadingProps): ReactElement => {
    return (
        <>
            <h2>My Title = {title}</h2>
            <h4>{subtitle}</h4>
        </>
    )
}

export default Heading