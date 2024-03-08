import { prisma } from ".";

const main = async () => {
  // find all
  const getAllFromDB = await prisma.post.findMany();
  // find first or throw error
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      id: 16,
    },
    select: {
      title: true,
    }
  });
  const findUnique = prisma.post.findUnique({
    where: {
        id: 2
    }
  })
//   console.log(getAllFromDB);
  console.log(findFirst);
};
main();
