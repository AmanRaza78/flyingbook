import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden mb-16">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
            Checkout our Cool Animated{" "}
            <span className="text-primary">Flying Machines</span>
          </h1>
          <p className="mt-3 text-lg text-secondary-foreground">
            A cool website for all plane lovers
          </p>
        </div>

        <div className="mt-10 relative max-w-5xl mx-auto">
          <div className="w-full object-cover h-96 sm:h-[480px] bg-[url(/images/newheroplane.jpg)] bg-no-repeat bg-center bg-cover rounded-xl"></div>

          <div className="absolute inset-0 size-full">
            <div className="flex flex-col justify-center items-center size-full">
              <Link
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg">
            <div className="bg-white size-48 rounded-lg"></div>
          </div>

          <div className="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
            <div className="bg-white size-48 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
