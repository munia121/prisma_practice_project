import { prisma } from "./index";
  
  const main = async () => {


    // const singleUpdate =  await prisma.post.update({
        // where:{
        //     id:7
        // },

        // data:{
        //     title:"Updated Post Title",
        //     content:"Updated content for the post",
        // }
    // })

//  console.log("updated post:", singleUpdate)


// const updateMany = await prisma.post.updateMany({
//     where: {
//         authorId: 1234
//     },
//     data :{
//         content:"true"
//     }

// })

// console.log("updated many:", updateMany)

const user = await prisma.user.upsert({
  where: {
    id:2,
  },

  update: {
    name: "nam amr vutu",
  },

  create: {
    name: "Muniass",
    email: "munia@gmailll.com",
    password: "1234562",
  },
});

console.log(user);

};


  

  
  main();

