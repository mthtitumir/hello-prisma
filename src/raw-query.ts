import { prisma } from "."

const rawQuery = async () => {
    // const posts = await prisma.$queryRaw`SELECT * FROM "posts"`
    // console.log(posts);  
      await prisma.$queryRaw `TRUNCATE TABLE "users" CASCADE`
}

rawQuery();