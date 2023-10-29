-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PcPart" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "PcPart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartsList" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "publicPrivate" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    "cpuId" INTEGER,
    "motherboardId" INTEGER,
    "memoryId" INTEGER,
    "hddId" INTEGER,
    "ssdId" INTEGER,
    "videocardId" INTEGER,
    "powerId" INTEGER,
    "pccaseId" INTEGER,
    "cpucoolerId" INTEGER,
    "displayId" INTEGER,

    CONSTRAINT "PartsList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cpu" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "processor" TEXT NOT NULL,
    "socket" TEXT NOT NULL,
    "itemValue" TEXT NOT NULL,
    "image" TEXT,
    "pcpartId" INTEGER NOT NULL,

    CONSTRAINT "Cpu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MotherBoard" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "chipset" TEXT NOT NULL,
    "formfactor" TEXT NOT NULL,
    "socket" TEXT NOT NULL,
    "itemValue" TEXT NOT NULL,
    "image" TEXT,
    "pcpartId" INTEGER NOT NULL,

    CONSTRAINT "MotherBoard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Memory" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "setnumber" TEXT NOT NULL,
    "standard" TEXT NOT NULL,
    "interface" TEXT NOT NULL,
    "itemValue" TEXT NOT NULL,
    "image" TEXT,
    "pcpartId" INTEGER NOT NULL,

    CONSTRAINT "Memory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hdd" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "series" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "speed" TEXT NOT NULL,
    "interface1" TEXT NOT NULL,
    "interface2" TEXT NOT NULL,
    "cache" TEXT NOT NULL,
    "itemValue" TEXT NOT NULL,
    "image" TEXT,
    "pcpartId" INTEGER NOT NULL,

    CONSTRAINT "Hdd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ssd" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "interface" TEXT NOT NULL,
    "ssdtype" TEXT NOT NULL,
    "itemValue" TEXT NOT NULL,
    "image" TEXT,
    "pcpartId" INTEGER NOT NULL,

    CONSTRAINT "Ssd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoCard" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "chip" TEXT NOT NULL,
    "core" TEXT NOT NULL,
    "memory" TEXT NOT NULL,
    "clock" TEXT NOT NULL,
    "interface" TEXT NOT NULL,
    "itemValue" TEXT NOT NULL,
    "image" TEXT,
    "pcpartId" INTEGER NOT NULL,

    CONSTRAINT "VideoCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Power" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "standard" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "plus" TEXT NOT NULL,
    "itemValue" TEXT NOT NULL,
    "image" TEXT,
    "pcpartId" INTEGER NOT NULL,

    CONSTRAINT "Power_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PcCase" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "factor" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "size_wdh" TEXT NOT NULL,
    "itemValue" TEXT NOT NULL,
    "image" TEXT,
    "pcpartId" INTEGER NOT NULL,

    CONSTRAINT "PcCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CpuCooler" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "intel" TEXT NOT NULL,
    "amd" TEXT NOT NULL,
    "flowtype" TEXT NOT NULL,
    "noise" TEXT NOT NULL,
    "itemValue" TEXT NOT NULL,
    "image" TEXT,
    "pcpartId" INTEGER NOT NULL,

    CONSTRAINT "CpuCooler_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Display" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "monitortype" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "contrast" TEXT NOT NULL,
    "itemValue" TEXT NOT NULL,
    "image" TEXT,
    "pcpartId" INTEGER NOT NULL,

    CONSTRAINT "Display_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "PartsList" ADD CONSTRAINT "PartsList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartsList" ADD CONSTRAINT "PartsList_cpuId_fkey" FOREIGN KEY ("cpuId") REFERENCES "Cpu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartsList" ADD CONSTRAINT "PartsList_motherboardId_fkey" FOREIGN KEY ("motherboardId") REFERENCES "MotherBoard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartsList" ADD CONSTRAINT "PartsList_memoryId_fkey" FOREIGN KEY ("memoryId") REFERENCES "Memory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartsList" ADD CONSTRAINT "PartsList_hddId_fkey" FOREIGN KEY ("hddId") REFERENCES "Hdd"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartsList" ADD CONSTRAINT "PartsList_ssdId_fkey" FOREIGN KEY ("ssdId") REFERENCES "Ssd"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartsList" ADD CONSTRAINT "PartsList_videocardId_fkey" FOREIGN KEY ("videocardId") REFERENCES "VideoCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartsList" ADD CONSTRAINT "PartsList_powerId_fkey" FOREIGN KEY ("powerId") REFERENCES "Power"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartsList" ADD CONSTRAINT "PartsList_pccaseId_fkey" FOREIGN KEY ("pccaseId") REFERENCES "PcCase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartsList" ADD CONSTRAINT "PartsList_cpucoolerId_fkey" FOREIGN KEY ("cpucoolerId") REFERENCES "CpuCooler"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartsList" ADD CONSTRAINT "PartsList_displayId_fkey" FOREIGN KEY ("displayId") REFERENCES "Display"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cpu" ADD CONSTRAINT "Cpu_pcpartId_fkey" FOREIGN KEY ("pcpartId") REFERENCES "PcPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MotherBoard" ADD CONSTRAINT "MotherBoard_pcpartId_fkey" FOREIGN KEY ("pcpartId") REFERENCES "PcPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Memory" ADD CONSTRAINT "Memory_pcpartId_fkey" FOREIGN KEY ("pcpartId") REFERENCES "PcPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hdd" ADD CONSTRAINT "Hdd_pcpartId_fkey" FOREIGN KEY ("pcpartId") REFERENCES "PcPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ssd" ADD CONSTRAINT "Ssd_pcpartId_fkey" FOREIGN KEY ("pcpartId") REFERENCES "PcPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoCard" ADD CONSTRAINT "VideoCard_pcpartId_fkey" FOREIGN KEY ("pcpartId") REFERENCES "PcPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Power" ADD CONSTRAINT "Power_pcpartId_fkey" FOREIGN KEY ("pcpartId") REFERENCES "PcPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PcCase" ADD CONSTRAINT "PcCase_pcpartId_fkey" FOREIGN KEY ("pcpartId") REFERENCES "PcPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CpuCooler" ADD CONSTRAINT "CpuCooler_pcpartId_fkey" FOREIGN KEY ("pcpartId") REFERENCES "PcPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Display" ADD CONSTRAINT "Display_pcpartId_fkey" FOREIGN KEY ("pcpartId") REFERENCES "PcPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
