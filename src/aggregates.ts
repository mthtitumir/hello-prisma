import { prisma } from ".";

const aggregates = async() =>{
    const avgAge = await prisma.user.aggregate({
        _sum: {
            age: true 
        }
        //_avg, _sum, _max, _min, _count
    })
    console.log(avgAge);
    
}

aggregates();