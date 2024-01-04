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
        wattage: 125,
        core: 24,
        baseFrequency: '3.2GHz',
        boostedFrequency: '6.0GHz',
        categoryId: cpuCategory.id,
        price: '94500',
        url: 'https://www.intel.co.jp/content/www/jp/ja/products/sku/236773/intel-core-i9-processor-14900k-36m-cache-up-to-6-00-ghz/specifications.html',
      },
      {
        name: 'Intel Core i9-9900K',
        brand: 'Intel',
        processor: 'i9-9900K',
        socket: 'LGA1151',
        wattage: 95,
        core: 8,
        baseFrequency: '3.6GHz',
        boostedFrequency: '5.0GHz',
        categoryId: cpuCategory.id,
      },
      {
        name: 'Intel Core i7-13700KF BOX',
        brand: 'Intel',
        processor: 'i7-13700KF',
        socket: 'LGA1700',
        wattage: 125,
        core: 16,
        baseFrequency: '3.4GHz',
        boostedFrequency: '5.3GHz',
        price: '60980',
        categoryId: cpuCategory.id,
      },
      {
        name: 'Intel Core i7-14700KF',
        brand: 'Intel',
        processor: 'i7-14700KF',
        socket: 'LGA1700',
        wattage: 125,
        core: 20,
        baseFrequency: '3.4GHz',
        boostedFrequency: '5.6GHz',
        categoryId: cpuCategory.id,
        price: '64980',
        url: 'https://www.intel.co.jp/content/www/jp/ja/products/sku/236789/intel-core-i7-processor-14700kf-33m-cache-up-to-5-60-ghz/specifications.html',
      },
      {
        name: 'AMD Ryzen 7 7800X3D',
        brand: 'AMD',
        processor: 'Ryzen 7 7800X3D',
        socket: 'Socket AM5',
        wattage: 120,
        core: 8,
        baseFrequency: '4.2GHz',
        boostedFrequency: '5.0GHz',
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
        name: 'TUF GAMING B550M-PLUS',
        brand: 'ASUS',
        chip: 'AMD B550',
        formFactor: 'MicroATX',
        memoryType: 'DDR4',
        memorySlots: 4,
        maxMemory: 128,
        socket: 'SocketAM4',
        pciSlots: '3',
        categoryId: motherboardCategory.id,
        price: '14980',
        url: 'https://pg.asrock.com/mb/Intel/Z690%20Phantom%20Gaming-ITXTB4/index.jp.asp',
      },
      {
        name: 'ASUS ROG STRIX B660-F GAMING WIFI',
        brand: 'ASUS',
        chip: 'INTEL B660',
        formFactor: 'ATX',
        memoryType: 'DDR5',
        memorySlots: 4,
        maxMemory: 128,
        socket: 'LGA1700',
        pciSlots: 'PCI-Express 16X(2), PCI-Express 1X(2)',
        categoryId: motherboardCategory.id,
        price: '50818',
        url: 'https://pg.asrock.com/mb/Intel/Z690%20Phantom%20Gaming-ITXTB4/index.jp.asp',
      },
      {
        name: 'MSI PRO Z790-A WIFI DDR4 INTEL',
        brand: 'MSI',
        chip: 'INTEL Z790',
        formFactor: 'ATX',
        memoryType: 'DDR4',
        memorySlots: 4,
        maxMemory: 128,
        socket: 'LGA1700',
        pciSlots: '×1(PCIe 5.0 x16)、×1(PCIe 4.0 x16)、×2(PCIe 3.0 x1)',
        categoryId: motherboardCategory.id,
        price: '31835',
        url: 'https://pg.asrock.com/mb/Intel/Z690%20Phantom%20Gaming-ITXTB4/index.jp.asp',
      },
    ],
  });

  await prisma.memory.createMany({
    data: [
      {
        name: 'Corsair Vengeance LPX 16GB',
        brand: 'Corsair',
        type: 'DDR4',
        frequency: '3200MHz',
        interface: 'DIMM288pin',
        image: '',
        url: '',
        price: '8000',
        categoryId: memoryCategory.id,
      },
      {
        name: 'Team DDR4 3200Mhz PC4-25600 16GBx2枚（32GBkit） デスクトップ用メモリ Elite Plus',
        brand: 'Team',
        type: 'DDR4',
        frequency: '3200MHz',
        interface: '288Pin DDR4-UDIMM',
        image: '',
        url: 'https://www.teamgroupinc.com/jp/product-detail/memory/desktop/vulcan-z-ddr4-red/vulcan-z-ddr4-red-TLZRD416G4000HC18JDC01/',
        price: '12980',
        categoryId: memoryCategory.id,
      },
    ],
  });
  await prisma.gpu.createMany({
    data: [
      {
        name: 'GV-N3080TURBO-10GD Rev2.0 [PCIExp 10GB]',
        brand: 'GIGABYTE',
        length: '267mm',
        chip: 'GeForce RTX 3080',
        core: '8704',
        memory: '10GB GDDR6X',
        baseFrequency: '1.44 GHz',
        memoryFrequency: '19 Gbps',
        interface: 'PCI-Express4.0',
        wattage: 320,
        url: 'https://www.gigabyte.com/jp/Graphics-Card/GV-N3080TURBO-10GD-rev-20/sp#sp',
        price: '89000',
        categoryId: gpuCategory.id,
      },
      {
        name: 'GeForce RTX 4070 Ti VENTUS 3X 12G OC VD8370',
        brand: 'MSI',
        length: '308mm',
        chip: 'GeForce RTX 4070 Ti',
        core: '7680',
        memory: '12GB GDDR6X',
        baseFrequency: '2640MHz',
        memoryFrequency: '21 Gbps',
        interface: 'PCI-Express4.0',
        wattage: 285,
        url: 'https://www.gigabyte.com/jp/Graphics-Card/GV-N3080TURBO-10GD-rev-20/sp#sp',
        price: '125000',
        categoryId: gpuCategory.id,
      },
    ],
  });

  await prisma.hdd.create({
    data: {
      name: 'Seagate Barracuda 2TB',
      brand: 'Seagate',
      capacity: '2TB',
      size: '3.5 inch',
      speed: '7200 RPM',
      interface: 'SATA 6Gb/s',
      image: '',
      url: '',
      price: '6000',
      categoryId: hddCategory.id,
    },
  });

  await prisma.ssd.createMany({
    data: [
      {
        name: 'Samsung 970 EVO 1TB',
        brand: 'Samsung',
        capacity: '1TB',
        size: 'M.2',
        speed: '3400MB/s',
        interface: 'NVMe',
        price: '15000',
        categoryId: ssdCategory.id,
      },
      {
        name: 'WD_Black SN770 NVMe WDS100T3X0E',
        brand: 'WESTERN DIGITAL',
        capacity: '1000GB',
        size: 'M.2(type2280)',
        speed: '7000MB/s',
        interface: 'PCI-Express Gen4',
        url: 'https://www.westerndigital.com/ja-jp',
        price: '9480',
        categoryId: ssdCategory.id,
      },
      {
        name: 'Monster Storage SSD 4TB',
        brand: 'MonsterStorage',
        capacity: '4TB',
        size: 'M.2(type2280)',
        speed: '7100MB/s',
        interface: 'PCI-Express Gen4',
        url: 'https://taurus-digital.co.jp/products/ms950g70pcie4hse-02tb/',
        price: '29800',
        categoryId: ssdCategory.id,
      },
    ],
  });

  await prisma.power.createMany({
    data: [
      {
        name: 'MAG A850GL PCIE5',
        brand: 'MSI',
        type: 'ATX',
        capacity: '850W',
        certification: '80 PLUS Gold',
        url: 'https://jp.msi.com/Power-Supply/MAG-A850GL-PCIE5/Specification',
        price: '16995',
        categoryId: powerCategory.id,
      },
      {
        name: 'RM750e ATX 3.0 CP-9020262-JP',
        brand: 'Corsair',
        type: 'ATX',
        capacity: '750W',
        certification: '80 PLUS Gold',
        url: 'https://www.links.co.jp/item/rm750e-atx-3-0/',
        price: '12980',
        categoryId: powerCategory.id,
      },
      {
        name: 'KRPW-BK650W/85+',
        brand: '玄人志向',
        type: 'ATX',
        capacity: '650W',
        certification: '80 PLUS Bronze',
        url: 'https://www.kuroutoshikou.com/product/detail/krpw-bk650w-85-.html',
        price: '7673',
        categoryId: powerCategory.id,
      },
      {
        name: 'Corsair HX850i',
        brand: 'Corsair',
        type: 'ATX',
        capacity: '850W',
        certification: '80 PLUS PLATINUM',
        url: 'https://www.kuroutoshikou.com/product/detail/krpw-bk650w-85-.html',
        price: '17000',
        categoryId: powerCategory.id,
      },
    ],
  });

  await prisma.pcCase.createMany({
    data: [
      {
        name: 'NZXT H510',
        brand: 'NZXT',
        formFactor: 'ATX',
        weight: '6.6 kg',
        size: 'W: 210mm H: 460mm D: 428mm',
        price: '7000',
        categoryId: pcCaseCategory.id,
      },
      {
        name: 'MasterBox Q500L MCB-Q500L-KANN-S01',
        brand: 'COOLER MASTER',
        formFactor: 'ATX, MicroATX, Mini-ITX',
        weight: 'Not specified',
        size: 'W: 230mm H: 381mm D: 386mm',
        url: 'https://www.coolermaster.com/jp/ja-jp/catalog/cases/mid-tower/masterbox-q500l/',
        price: '8660',
        categoryId: pcCaseCategory.id,
      },
    ],
  });

  await prisma.cooler.createMany({
    data: [
      {
        name: 'Cooler Master Hyper 212',
        brand: 'Cooler Master',
        supportedTdp: 150,
        coolingType: 'air',
        fanCount: 1,
        airFlow: '42 CFM',
        size: '120 x 79 x 158 mm',
        socket: 'LGA1151, AM4, LGA2066',
        image: '',
        url: '',
        price: '3000',
        categoryId: coolerCategory.id,
      },
      {
        name: 'LE520 R-LE520-BKAMMN-G-1',
        brand: 'DEEPCOOL',
        supportedTdp: 220,
        coolingType: 'water',
        fanCount: 2,
        airFlow: '85.85 CFM',
        size: '282x120x27 mm',
        socket: 'LGA 1700/1200/1151/1150/1155, AM5/AM4',
        url: 'https://jp.deepcool.com/products/Cooling/cpuliquidcoolers/LE520-240mm-Liquid-CPU-Cooler-1700-AM5/2023/16976.shtml', // 製品URLは提供されていません
        price: '16000',
        categoryId: coolerCategory.id,
      },
      {
        name: 'DeepCool ASSASSIN IV',
        brand: 'DEEPCOOL',
        supportedTdp: 280,
        coolingType: 'air',
        fanCount: 2,
        airFlow: '140mm:79.1CFM, 120mm:58.06CFM',
        size: '144x147x164mm',
        socket: 'LGA1700/1200/1150/1151/1155/2066/2011-v3/2011, AM5/AM4',
        url: 'https://www.aiuto-jp.co.jp/products/product_4752.php#2',
        price: '8802',
        categoryId: coolerCategory.id,
      },
    ],
  });

  await prisma.display.create({
    data: {
      name: 'Dell UltraSharp U2720Q',
      brand: 'Dell',
      size: '27',
      type: 'IPS',
      speed: '60Hz',
      resolution: '3840 x 2160',
      contrast: '1300:1',
      url: 'https://japancatalog.dell.com/pd/u2720q.html',
      price: '50000',
      categoryId: displayCategory.id,
    },
  });

  // ユーザーの作成
  const user = await prisma.user.create({
    data: {
      name: 'tester',
      email: 'user1@test.com',
      hashedPassword: 'user1', // 実際にはハッシュ化されたパスワードを使用
    },
  });

  const cpu = await prisma.cpu.findFirst({
    where: {
      name: 'Intel Core i7-13700KF BOX',
    },
  });

  const gpu = await prisma.gpu.findFirst({
    where: {
      name: 'GeForce RTX 4070 Ti VENTUS 3X 12G OC VD8370',
    },
  });

  const motherBoard = await prisma.motherBoard.findFirst({
    where: {
      name: 'MSI PRO Z790-A WIFI DDR4 INTEL',
    },
  });

  const memory = await prisma.memory.findFirst({
    where: {
      name: {
        startsWith: 'Team DDR4 3200Mhz PC4-25600',
      },
    },
  });

  const hdd = await prisma.hdd.findFirst({
    where: {
      name: 'Seagate Barracuda 2TB',
    },
  });

  const ssd = await prisma.ssd.findFirst({
    where: {
      name: 'Monster Storage SSD 4TB',
    },
  });

  const cooler = await prisma.cooler.findFirst({
    where: {
      name: 'DeepCool ASSASSIN IV',
    },
  });

  const pcCase = await prisma.pcCase.findFirst({
    where: {
      name: 'MasterBox Q500L MCB-Q500L-KANN-S01',
    },
  });

  const power = await prisma.power.findFirst({
    where: {
      name: 'Corsair HX850i',
    },
  });

  await prisma.partsList.create({
    data: {
      name: 'My Custom PC Build',
      description: 'This is a sample parts list for a custom PC build.',
      isOpened: true,
      userId: user.id,
      cpuId: cpu.id,
      gpuId: gpu.id,
      motherboardId: motherBoard.id,
      memoryId: memory.id,
      hddId: hdd.id,
      ssdId: ssd.id,
      coolerId: cooler.id,
      pccaseId: pcCase.id,
      powerId: power.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
