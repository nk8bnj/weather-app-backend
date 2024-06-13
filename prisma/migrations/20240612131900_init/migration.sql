-- CreateTable
CREATE TABLE "WeatherRequest" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WeatherRequest_pkey" PRIMARY KEY ("id")
);
