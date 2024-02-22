import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.company.createMany({
    data: [
      {
        name: 'La Colonial',
        description:
          'Siéntete tranquilo. Nos comprometemos contigo ofreciéndote los servicios que se adaptan a tus necesidades.',
        image:
          'https://lacolonial.com.do/sites/default/files/logo-50-la_colonial.png',
      },
      {
        name: 'Futuro ARS',
        description:
          'Somos una empresa del Grupo Futuro, enfocada en el bienestar de nuestros afiliados con su seguro familiar de salud básico y complementario.',
        image:
          'https://consultarme.com/wp-content/uploads/2023/04/seguro-ars-futuro.png',
      },
      {
        name: 'Patria ARS',
        description:
          'Si está buscando un seguro confiable y protección en la carretera, combina tu póliza de automóvil con nuestros servicios complementarios.',
        image: 'https://www.segurospatria.com/images/LogoPatria-2x.png',
      },
      {
        name: 'Humano Seguros',
        description:
          'Humano Seguros es una empresa aseguradora que cuenta con un amplio portafolio de productos simples y ágiles de salud, vida, auto y patrimoniales, comprometida con la seguridad y bienestar de las personas y aquello que más les importa.',
        image:
          'https://www.humano.com.do/Style%20Library/humano/imagenes/logohumanoseguro.png',
      },
      {
        name: 'APS ARS',
        description:
          'Preocupados por la salud de nuestros afiliados, hemos creados estos programas de acuerdo a tus necesidades',
        image:
          'https://apsars.do/wp-content/uploads/2023/07/logo-ARS-Web-1-1.png',
      },
      {
        name: 'Atlántica Seguros',
        description:
          'En Atlántica Seguros tu bienestar es nuestra prioridad y estamos aquí para proteger todo lo que es realmente importante para ti, tu familia, tu vivienda, tu auto y todos tus bienes. ',
        image:
          'https://www.atlantica.do/wp-content/uploads/2018/10/atlantica-seguros-logo.png',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
