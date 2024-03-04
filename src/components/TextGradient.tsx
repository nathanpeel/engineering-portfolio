type props = {
  children: React.ReactNode;
  styles?: string;
  text?: string;
  underline?: boolean;
};

//creates a text gradient with an animation
export default function TextGradient({
  children,
  styles = "",
  text,
  underline,
}: props) {
  return (
    <span
      className={underline ? "underline decoration-lblue decoration-1" : ""}>
      <span
        className={
          "gradient-text animate-gradient text-transparent " +
          styles
        }>
        {children || text}
      </span>
    </span>
  );
}
