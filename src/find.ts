

import { prisma } from "./index";

const main = async () => {
  console.log("main function started");


  const getAllFromDB = await prisma.post.findMany({
    select: {
    authorId: true,
   
  },
  });

  console.log("All posts:", getAllFromDB);

  // const findFist = await prisma.post.findFirstOrThrow({
  //   where: {
  //         id:7,
  //   },
  // });
  // console.log("Found post:", findFist);
};

main();
