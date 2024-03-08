import {PrismaClient} from "@prisma/client";

export const prisma = new PrismaClient();
const main = async() => {
    // console.log("hello prisma")
    // const result = await prisma.post.create({
    //     data: {
    //         title: "How to kill a zombie! 50",
    //         content: "I have no content, just kill the zombie",
    //         authorName: "None"
    //     }
        
    // })
    // const getAllFromDB = await prisma.post.findMany()
    // console.log(getAllFromDB)
}
main()