import { prisma } from ".";

const deleteData = async () => {
//   const singleDelete = await prisma.post.delete({
//     where: {
//       id: 1,
//     },
//   });
  const deleteMany = await prisma.post.deleteMany({
    where: {
      content: "I have no content, just kill the zombie",
    },
  });
};

deleteData();