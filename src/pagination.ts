import { prisma } from ".";

const pagination = async () =>{
    // offset pagination 
    const offsetData = await prisma.post.findMany({
        skip: 5,
        take: 2
    });
    console.log({offsetData});    
    // cursor pagination 
    const cursorData = await prisma.post.findMany({
        skip: 5,
        take: 2,
        cursor: {
            id: 15,
        },
        orderBy: {
            title: "desc"
        }
    });
    console.log({cursorData});    
    // sorting 
    const sortedData = await prisma.post.findMany({
        orderBy: {
            title: 'asc'
        }
    });
    console.log({sortedData});    
}

pagination();