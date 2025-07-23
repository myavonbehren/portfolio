import { JSX, useState } from "react";

type SegmentedControlProps = {
    items: Array<string>;
}

export const SegmentedControl = ({ items }: SegmentedControlProps): JSX.Element => {
    const [activeItem, setActiveItem] = useState(0);

    return (
        <div>
            <div></div>
        </div>
    )
}