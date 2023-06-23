import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {}

// imagens bule e xicara
const images = [
  "https://images.tcdn.com.br/img/img_prod/836126/jogo_2_pecas_porcelana_a_bela_e_a_fera_samovar_e_zip_bule_e_xicara_165_2_31f9cdd1394c2c720c55fe1c15b3772d.jpeg",
  "https://images.tcdn.com.br/img/img_prod/836126/jogo_2_pecas_porcelana_a_bela_e_a_fera_samovar_e_zip_bule_e_xicara_165_3_892bec598a8bada32bfa6d30514869b7.jpeg",
  "https://images.tcdn.com.br/img/img_prod/836126/jogo_2_pecas_porcelana_a_bela_e_a_fera_samovar_e_zip_bule_e_xicara_165_4_cea59fd3fef02b521cbe83bf17ee4b6c.jpeg",
  "https://images.tcdn.com.br/img/img_prod/836126/jogo_bela_e_a_fera_madame_samovar_e_zip_2_pecas_165_1_20201125152303.jpeg",
];

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default prisma;
