import { prisma } from ".";

const batchTransaction = async() => {
    const createUser = prisma.user.create({
        data: {
            username: "titu",
            email: "mir@gamil.com"
        }
    });

    const updateUser = prisma.user.update({
        where: {
            id: 100
        },
        data: {
            age: 40
        }
    });

    const [userData, updatedData] = await prisma.$transaction([
        createUser,
        updateUser,
    ]);
}

batchTransaction();