import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

// export default async function POST(req, res) { 
//   const { firstname } = req.body

//   const result = await prisma.post.create({ 
//     data: { 
//       firstname:  firstname 
//     }
//   })
//   res.json(result)
//   res.status(500).json({ error: "Error creating entry in database" });
// }


export async function POST(request) { 
  const res = await request.json() 
  const {firstname, lastname, email, phone, location, propertytype, bathrooms,
         bedrooms, budget, preferredcontactone, preferredcontacttwo, message} = res 

  console.log({res})
  const result = await prisma.form.create({ 
    data: { 
      firstname,
      lastname,
      email, 
      phone,
      location, 
      propertytype, 
      bathrooms, 
      bedrooms, 
      budget, 
      preferredcontactone, 
      preferredcontacttwo, 
      message,
    }
  })
  return NextResponse.json({result})
}