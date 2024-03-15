import { prisma } from "."

const interactiveTransaction = async () => {
    const result = await prisma.$transaction(async(transactionClient)=>{

        // query 1
        const getAllPost = await transactionClient.post.findMany({
            where: {
                published: true
            }
        })

        // query 2
        const createUser = await transactionClient.user.count();

        // query 3
        const updateUser = await transactionClient.user.update({
            where: {
                id: 9
            },
            data: {
                age: 45
            }
        });

        return {
            getAllPost,
            createUser,
            updateUser
        }
    })
}