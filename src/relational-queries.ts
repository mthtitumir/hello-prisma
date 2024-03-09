import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async() =>{
    const result = await prisma.user.findUnique({
        where: {
            id: 2
        }
    }).post();
    console.log(result);    
}
relationalQueries();