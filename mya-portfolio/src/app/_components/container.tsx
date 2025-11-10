type Props = {
    children?: React.ReactNode;
    bg?: string;
  };
  
  const Container = ({ children, bg }: Props) => {
    return <div className={`container mx-auto px-10 ${bg}`}>{children}</div>;
  };
  
  export default Container;