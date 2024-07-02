import AirPlaneCard from "@/components/airplane-card";
import prisma from "@/lib/db";

async function getData() {
  const data = await prisma.plane.findMany({
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
  });

  return data;
}

export default async function AirPlanesPage() {
  const data = await getData();
  return (
    <div className="py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 m-10">
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
  );
}
