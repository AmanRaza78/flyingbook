import AirPlaneCard from "@/components/airplane-card";
import Pagination from "@/components/pagination";
import prisma from "@/lib/db";

async function getData(searchParams: string) {
  const [count, data] = await prisma.$transaction([
    prisma.plane.count(),
    prisma.plane.findMany({
      take: 10,
      skip: searchParams ? (Number(searchParams) - 1) * 10 : 0,
      select: {
        id: true,
        planeName: true,
        planeModal: true,
        engineType: true,
        planeImage: true,
        capacity: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
  ]);

  return { count, data };
}

export default async function AirPlanesPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const { count, data } = await getData(searchParams.page);
  return (
    <div className="flex flex-col">
      <div className="py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mx-10">
        {data.map((item) => (
          <AirPlaneCard
            key={item.id}
            planeImage={item.planeImage}
            planeModal={item.planeModal}
            planeName={item.planeName}
            engineType={item.engineType}
            capacity={item.capacity}
          />
        ))}
      </div>
      <div className="mb-20">
        <Pagination totalPages={Math.ceil(count / 10)} />
      </div>
    </div>
  );
}
