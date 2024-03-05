import Link from "next/link";

export default function Error() {
  return (
    <section>
      <div className="bg-gradient-to-b from-white to-lgreen w-full h-[10dvh]"></div>
      <div className="bg-gradient-to-b from-lgreen to-dgreen w-full h-[90dvh] text-white flex flex-col items-center justify-center px-10 text-center">
        <div className="flex flex-col items-center -mt-60 gap-5 justify-center">
          <h1 className="font-bold text-3xl">Error 404 | Page Not found</h1>
          <p className="text-sm">
            It seems the page you&apos;re looking for does not exist!
          </p>
          <Link href="/" className="underline text-2xl font-semibold">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
