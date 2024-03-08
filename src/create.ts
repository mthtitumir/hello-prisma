import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
const main = async () => {
  // create data into db
  // const result = await prisma.post.create({
  // data: {
  //     title: "Title 1!",
  //     content: "I have no content, just kill the zombie",
  //     authorName: "Fjahim"
  // }
  // })
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Title 1!",
        content: "I have no content, just kill the zombie",
        authorName: "Hello Boy",
      },
      {
        title: "Title 2!",
        content: "I have no content, just kill the zombie",
        authorName: "Hello Boy",
      },
      {
        title: "Title 3!",
        content: "I have no content, just kill the zombie",
        authorName: "Hello Boy",
      },
      {
        title: "Title 4!",
        content: "I have no content, just kill the zombie",
        authorName: "Hello Boy",
      },
    ],
  });
  console.log(createMany);  
};
main();
