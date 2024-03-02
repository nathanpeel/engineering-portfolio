type props = {
  children: React.ReactNode;
  styles?: string;
  text?: string;
  underline?: boolean;
};

//NOT UP TO DATE
//creates a text gradient
//will update styles and add animation
export default function TextGradient({
  children,
  styles = "",
  text,
  underline,
}: props) {
  return (
    <span className={underline ? "underline decoration-blue decoration-1" : ""}>
      <span
        className={
          "bg-clip-text text-transparent bg-gradient-to-r from-green to-blue " +
          styles
        }>
        {children || text}
      </span>
    </span>
  );
}
