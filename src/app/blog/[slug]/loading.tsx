import { BiLoaderCircle } from "react-icons/bi";

export default function Loading() {
  return (
    <div className="h-[100dvh] text-lgreen text-4xl text-center flex items-center justify-center">
      <BiLoaderCircle className="motion-safe:animate-spin w-[20dvw] h-[20dvw]" />
    </div>
  );
}
