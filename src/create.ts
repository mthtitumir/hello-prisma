import { PrismaClient, UserRole } from "@prisma/client";

export const prisma = new PrismaClient();
const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user2",
  //     email: "user2@ph.com",
  //     role: UserRole.user,
  //   }
  // });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "this is bio...........",
  //     userId: 1
  //   }
  // })

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Graphics"
  //   }
  // })

  const createPost = await prisma.post.create({
    data: {
      title: "This is title 5",
      content: "THis is content",
      authorId: 2,
      postCategory: {
        create: [
          {
            categoryId: 1
          },
          {
            categoryId: 3
          }
        ]
      }
    },
    include: {
      postCategory: true
    }
  })
  console.log(createPost);  
};
main();
