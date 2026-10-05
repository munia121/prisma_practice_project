import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export const prisma = new PrismaClient({ adapter });

// const main = async () => {
//   // const user = await prisma.post.create({
//   //   data: {
//   //     title: "Hello World",
//   //     content: "This is my first post",
//   //     authorId: 1234,
//   //   }
//   // })

//   // console.log(user)


//   // ######
//   const getAllFromDB = await prisma.post.findMany()
//   console.log(getAllFromDB)

// }

// main()