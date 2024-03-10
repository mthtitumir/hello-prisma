import { prisma } from ".";

const filtering = async() =>{
    const andFiltering = await prisma.post.findMany({
        where: {
            // AND: [
            //     {
            //         // title: {
            //         //     contains: "title"
            //         // },
            //         title: "This is title",
            //         published: true
            //     }
            // ],
            OR: [
                {
                    // title: {
                    //     contains: "title"
                    // },
                    title: "This is title",
                    published: true
                }
            ],
        }
    });

    const notFiltering = await prisma.post.findMany({
        where: {
            NOT: [
                {
                    title: {
                        contains: "title",
                    }
                }
            ]
        }
    });
    
    const startsWith = await prisma.user.findMany({
        where: {
            email: {
                startsWith: 'u'
            }
        }
    })
    const endsWith = await prisma.user.findMany({
        where: {
            email: {
                endsWith: 'u'
            }
        }
    })
    const equals = await prisma.user.findMany({
        where: {
            email: {
                equals: 'u'
            }
        }
    })
    const userNameArray = ['user1', 'user2', 'user3'];
    const userNamesByArray = await prisma.user.findMany({
        where: {
            username: {
                in: userNameArray,
            }
        }
    })
    const inDepthData = await prisma.user.findUnique({
        where: {
            id: 3,
        },
        include: {
            post: {
                include: {
                    postCategory: {
                        include: {
                            category: true,
                        }
                    }
                }
            }
        }
    })
    console.log(startsWith);    
}

filtering();