import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // カテゴリの作成
  const cpuCategory = await prisma.category.create({
    data: {
      name: 'CPU',
    },
  });
  const motherboardCategory = await prisma.category.create({
    data: {
      name: 'Motherboard',
    },
  });
  const memoryCategory = await prisma.category.create({
    data: {
      name: 'Memory',
    },
  });
  const hddCategory = await prisma.category.create({
    data: {
      name: 'HDD',
    },
  });
  const ssdCategory = await prisma.category.create({
    data: {
      name: 'SSD',
    },
  });
  const gpuCategory = await prisma.category.create({
    data: {
      name: 'GPU',
    },
  });
  const powerCategory = await prisma.category.create({
    data: {
      name: 'Power',
    },
  });
  const pcCaseCategory = await prisma.category.create({
    data: {
      name: 'PcCase',
    },
  });
  const coolerCategory = await prisma.category.create({
    data: {
      name: 'Cooler',
    },
  });
  const displayCategory = await prisma.category.create({
    data: {
      name: 'Display',
    },
  });

  // CPU製品の追加
  await prisma.cpu.createMany({
    data: [
      {
        name: 'Intel Core i9-14900K',
        brand: 'Intel',
        processor: 'i9-14900K',
        socket: 'LGA1700',
        powerConsumption: 125,
        categoryId: cpuCategory.id,
        price: '94500',
        url: 'https://www.intel.co.jp/content/www/jp/ja/products/sku/236773/intel-core-i9-processor-14900k-36m-cache-up-to-6-00-ghz/specifications.html',
      },
      {
        name: 'Intel Core i7-14700KF',
        brand: 'Intel',
        processor: 'i7-14700KF',
        socket: 'LGA1700',
        powerConsumption: 125,
        categoryId: cpuCategory.id,
        price: '64980',
        url: 'https://www.intel.co.jp/content/www/jp/ja/products/sku/236789/intel-core-i7-processor-14700kf-33m-cache-up-to-5-60-ghz/specifications.html',
      },
      {
        name: 'AMD Ryzen 7 7800X3D',
        brand: 'AMD',
        processor: 'Ryzen 7 7800X3D',
        socket: 'Socket AM5',
        powerConsumption: 120,
        categoryId: cpuCategory.id,
        price: '52980',
        url: 'https://www.amd.com/ja/products/apu/amd-ryzen-7-7800x3d',
      },
    ],
  });

  // マザーボード製品の追加
  await prisma.motherBoard.createMany({
    data: [
      {
        name: 'Z690 Phantom Gaming-ITX/TB4',
        brand: 'ASRock',
        chipset: 'Intel Z690',
        formFactor: 'Mini ITX',
        memoryType: 'DDR5',
        memorySlots: '2',
        maxMemory: '96GB',
        pciSlots: '1 x PCIe 5.0 16x',
        socket: 'LGA1700',
        categoryId: motherboardCategory.id,
        price: '54162',
        url: 'https://pg.asrock.com/mb/Intel/Z690%20Phantom%20Gaming-ITXTB4/index.jp.asp',
      },
      {
        name: 'ASUS ROG STRIX B660-F GAMING WIFI',
        brand: 'ASUS',
        chipset: 'Intel B660',
        formFactor: 'ATX',
        memoryType: 'DDR5',
        memorySlots: '4',
        maxMemory: '128GB',
        pciSlots: '2 x PCIe 5.0 16x, 2 x PCIe 5.0 1x',
        socket: 'LGA1700',
        categoryId: motherboardCategory.id,
        price: '49802',
        url: 'https://rog.asus.com/jp/motherboards/rog-strix/rog-strix-b660-f-gaming-wifi-model/',
      },
    ],
  });

  // ユーザーの作成
  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      hashedPassword: 'pass', // 実際にはハッシュ化されたパスワードを使用
      name: 'John Doe',
    },
  });

  // パーツリストの作成（例）
  const partsList = await prisma.partsList.create({
    data: {
      name: 'My First Build',
      description: 'This is my first PC build.',
      isOpened: true,
      userId: user.id,
      // 他のパーツIDを指定...
    },
  });

  // 他のデータも同様に作成...
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
