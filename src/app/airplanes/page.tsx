import AirPlaneCard from "@/components/airplane-card";
import FilterSheet from "@/components/filter-sheet";
import Pagination from "@/components/pagination";
import SearchBar from "@/components/search-bar";
import prisma from "@/lib/db";

async function getData(searchParams: Record<string, string>) {
  const { page, engineType, planeModal, capacity, query } = searchParams;

  const filters: any = {};
  if (engineType) filters.engineType = engineType;
  if (planeModal) filters.planeModal = planeModal;
  if (capacity) filters.capacity = capacity;

  if (query) {
    const lowerQuery = query.toLowerCase();
    filters.OR = [
      { planeName: { contains: lowerQuery} },
      { planeModal: { contains: lowerQuery } },
    ];
  }

  const [count, data] = await prisma.$transaction([
    prisma.plane.count({
      where: filters,
    }),

    prisma.plane.findMany({
      where: filters,
      take: 10,
      skip: page ? (Number(page) - 1) * 10 : 0,
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
  searchParams: { [key: string]: string };
}) {
  const { count, data } = await getData(searchParams);
  return (
    <div className="flex flex-col">
      <div className="mt-4 mx-10">
        <FilterSheet />
      </div>

      <div className="mt-4 mx-10 flex">
        <SearchBar />
      </div>
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
