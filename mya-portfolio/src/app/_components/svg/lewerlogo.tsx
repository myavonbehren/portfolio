interface LewerlogoProps {
    className?: string;
    width?: number | string;
    height?: number | string;
    /** Unique prefix when multiple Lewer logos render on the same page (clipPath ids). */
    idPrefix?: string;
}

const strokeStyle = {
    fill: "none" as const,
    stroke: "var(--foreground)",
    strokeMiterlimit: 20 as const,
    strokeWidth: 10,
};

export default function Lewerlogo({
    className,
    width = 24,
    height = 24,
    idPrefix = "lewer",
}: LewerlogoProps) {
    const clipPathId = `${idPrefix}-clippath`;
    const clipPathId1 = `${idPrefix}-clippath-1`;
    const clipPathId2 = `${idPrefix}-clippath-2`;
    const clipPathId3 = `${idPrefix}-clippath-3`;

    return (
        <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 245.01 244.33"
            className={className}
            width={width}
            height={height}
        >
            <defs>
                <clipPath id={clipPathId}>
                    <path {...strokeStyle} d="M132.6,48.39c-7.8,7.8-11.82,7.99-19.81,0L68.36,4.24l-26.36,26.38,67.65,67.67c7.37,7.36,18.58,7.35,25.93-.03L203.21,30.62l-26.38-26.38-44.23,44.15Z" />
                </clipPath>
                <clipPath id={clipPathId1}>
                    <path
                        {...strokeStyle}
                        d="M146.7,109.41c-7.41,7.37-7.37,18.56.04,25.93l67.64,67.64,26.38-26.37-44.15-44.13c-7.88-7.88-7.89-12.03,0-19.92l44.15-44.41-26.38-26.39-67.67,67.65h0Z"
                    />
                </clipPath>
                <clipPath id={clipPathId2}>
                    <path
                        {...strokeStyle}
                        d="M109.63,146.08l-67.63,67.63,26.37,26.38,44.24-44.15c7.85-7.85,11.97-7.84,19.81,0l44.43,44.15,26.36-26.38-67.65-67.67c-3.67-3.7-8.3-5.54-12.93-5.54s-9.3,1.86-13,5.58Z"
                    />
                </clipPath>
                <clipPath id={clipPathId3}>
                    <path
                        {...strokeStyle}
                        d="M4.24,68.13l44.15,44.13c7.73,7.5,7.73,12.18,0,19.92L4.24,176.59l26.38,26.39,67.67-67.65c7.41-7.37,7.38-18.56-.04-25.93L30.62,41.76l-26.38,26.37Z"
                    />
                </clipPath>
            </defs>
            <g id="Layer_1-2">
                <g>
                    <g>
                        <g clipPath={`url(#${clipPathId})`}>
                            <rect {...strokeStyle} x="41.99" y="4.24" width="161.21" height="101.41" />
                        </g>
                        <path
                            {...strokeStyle}
                            d="M132.6,48.39c-7.8,7.8-11.82,7.99-19.81,0L68.36,4.24l-26.36,26.38,67.65,67.67c7.37,7.36,18.58,7.35,25.93-.03L203.21,30.62l-26.38-26.38-44.23,44.15Z"
                        />
                    </g>
                    <g>
                        <g clipPath={`url(#${clipPathId1})`}>
                            <rect {...strokeStyle} x="139.29" y="41.76" width="101.46" height="161.22" />
                        </g>
                        <path
                            {...strokeStyle}
                            d="M146.7,109.41c-7.41,7.37-7.37,18.56.04,25.93l67.64,67.64,26.38-26.37-44.15-44.13c-7.88-7.88-7.89-12.03,0-19.92l44.15-44.41-26.38-26.39-67.67,67.65h0Z"
                        />
                    </g>
                    <g>
                        <g clipPath={`url(#${clipPathId2})`}>
                            <rect {...strokeStyle} x="41.99" y="140.5" width="161.21" height="99.6" />
                        </g>
                        <path
                            {...strokeStyle}
                            d="M109.63,146.08l-67.63,67.63,26.37,26.38,44.24-44.15c7.85-7.85,11.97-7.84,19.81,0l44.43,44.15,26.36-26.38-67.65-67.67c-3.67-3.7-8.3-5.54-12.93-5.54s-9.3,1.86-13,5.58Z"
                        />
                    </g>
                    <g>
                        <g clipPath={`url(#${clipPathId3})`}>
                            <rect {...strokeStyle} x="4.24" y="41.76" width="101.46" height="161.22" />
                        </g>
                        <path
                            {...strokeStyle}
                            d="M4.24,68.13l44.15,44.13c7.73,7.5,7.73,12.18,0,19.92L4.24,176.59l26.38,26.39,67.67-67.65c7.41-7.37,7.38-18.56-.04-25.93L30.62,41.76l-26.38,26.37Z"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
}
