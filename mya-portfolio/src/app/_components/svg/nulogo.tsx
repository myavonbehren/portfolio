interface NulogoProps {
    className?: string;
    width?: number | string;
    height?: number | string;
}

export default function Nulogo({ className, width = 24, height = 24 }: NulogoProps) {
    return (
    <svg 
        id="Layer_3" 
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1" 
        viewBox="0 0 24 24"
        className={className}
        width={width}
        height={height}
    >
    <path
        d="M5.47,1.29h3.07c.07,0,.14.04.17.1l8.01,13.73c.1.18.37.1.37-.1v-5.51s-.01-.07-.03-.1l-3.11-5.1s-.03-.07-.03-.1V1.56c0-.11.09-.2.2-.2h4.4c.11,0,.2.09.2.2v20.85c0,.11-.09.2-.2.2h-3.06c-.07,0-.14-.04-.17-.1L7.28,8.88c-.1-.18-.37-.1-.37.1v5.52s0,.07.03.1l3.07,5.12s.03.07.03.1v2.57c0,.11-.09.2-.2.2h-4.36c-.11,0-.2-.09-.2-.2V1.49c0-.11.09-.2.2-.2h-.01Z"
        fill="none"
        stroke="#0b1215"
        strokeMiterlimit={10}
        strokeWidth={1.3}
    />
</svg>
    )
}