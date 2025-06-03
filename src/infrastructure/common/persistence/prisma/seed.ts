import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient({ errorFormat: 'pretty' });

async function generateRoles() {
  const roles = ['admin', 'user'];

  for (const roleName of roles) {
    const existingRole = await prisma.role.findFirst({
      where: { name: roleName },
    });

    if (!existingRole) {
      await prisma.role.create({
        data: { name: roleName },
      });
      console.log(`Rol: ${roleName}`);
    } else {
      console.log(`El rol ya: ${roleName}`);
    }
  }
}

async function generateUsers() {
  const email = 'prueba@prueba.com';
  const plainPassword = '1234';
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        roleOnUser: {
          create: {
            role: {
              connect: {
                id: 2,
              },
            },
          },
        },
      },
    });
    console.log(' : prueba@prueba.com');
  } else {
    console.log('El  ya : prueba@prueba.com');
  }
}

async function main() {
  await generateRoles();
  await generateUsers();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
