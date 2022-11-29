const { PrismaClient, Prisma } = require ('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    let time = { selecao:'Catar', pontos:3, partidas:2 }
    const insertTime = await prisma.selecoes.create({data:time})
}

main().then(async () => {await prisma.$disconnect()})