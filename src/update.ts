import { prisma } from ".";

const updates = async () => {
  // const singleUpdate = await prisma.post.update({
  //     where: {
  //         id: 7
  //     },
  //     data: {
  //         title: "Title updated",
  //     }
  // })
  // const updateMany = await prisma.post.updateMany({
  //     where: {
  //         title: "Title 1!"
  //     },
  //     data: {
  //         title: "title update many"
  //     }
  // })
  // console.log(updateMany);
  const upsertData = await prisma.post.upsert({
    where: {
        id: 15
    },
    update: {
        authorName: "updated author 15"
    },
    create: {
        title: "created title",
        content: "content create"
    }
  })
};

updates();
