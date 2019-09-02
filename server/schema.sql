-- This is not a source of truth
-- This is just a scratch pad

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW."updatedTime" = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE "sessions" (
  "sessionId" text PRIMARY KEY,
  "clientId" text,
  "userId" text,
  "loginTime" timestamptz,
  "loginIp" text,
  "location" text,
  "createdTime" timestamptz default now(),
  "updatedTime" timestamptz default now()
);
