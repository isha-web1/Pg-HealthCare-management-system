-- Preserve existing prescription IDs while converting the column to PostgreSQL UUID.
ALTER TABLE "prescriptions"
  ALTER COLUMN "id" TYPE UUID USING "id"::uuid;
