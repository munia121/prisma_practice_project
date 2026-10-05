import { prisma } from "./index";
  
  const main = async () => {
  
//   const deletePost = await prisma.post.delete({
//   where: {
//     id: 5,
//   },
// });

// console.log("Deleted post:", deletePost);

  
const deleteMany = await prisma.post.deleteMany({
  where: {
    authorId: 1234,
  },
});

console.log("Deleted many posts:", deleteMany);

  };


  
  
  main();

