import {PrismaClient} from "@prisma/client";

export const prisma = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "query",
        }
    ]
});

const main = async() => {
    const getAllFromDB = await prisma.post.findMany()
    // console.log(getAllFromDB)
}

prisma.$on("query", (event)=>{
    console.log(event);    
});
main();