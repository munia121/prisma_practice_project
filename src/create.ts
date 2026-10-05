import { UserRole } from "../generated/prisma/client";
import { prisma } from "./index";

  
  const main = async () => {
    // const createUser = await prisma.user.create({
    //   data: {
    //     userName: "user2",
    //     email: "john.doe@exampleee.com",
    //     role: UserRole.user, // Use the enum value from the generated Prisma client
        
    //   }
    // });

    // console.log("Created user:", createUser);


    //#######
    // const createProfile = await prisma.profile.create({
    //   data: {
    //     bio: "This is my profile",
    //     userId: 2 // Replace with the actual user ID
    //   }
    // });

    // console.log("Created profile:", createProfile);









    //########
    // const createCategory = await prisma.category.create({
    //   data: {
    //     name: "tech-of-the-future"
    //   }
    // });

    // console.log("Created category:", createCategory);



    //#########
    const createPost = await prisma.post.create({
      data: {
        title: "My First Post",
        content: "This is the content of my first post.",
        authorId: 2, // Replace with the actual user ID
        postCategories: {
          create: [
            { category: { connect: { id: 1 } } }, // Connect to an existing category by ID
            { category: { connect: { id: 2 } } }  // Connect to another existing category by ID
          ]
        }
      }
    });

    console.log("Created post:", createPost);
  }

main();


  

