-- This is not a source of truth
-- This is just a scratch pad

CREATE OR REPLACE FUNCTION trigger_set_timestamp
()
RETURNS TRIGGER AS $$
BEGIN
  NEW."updatedTime" = NOW
();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;



CREATE TABLE "user"
(
  "userId" text PRIMARY KEY,
  "name" text,
  "username" text,
  "email" text,
  "emailIsConfirmed" boolean default false,
  "mobile" text,
  "mobileIsConfirmed" boolean default false,
  "createdTime" timestamptz default now(),
  "updatedTime" timestamptz default now()
)

CREATE TABLE "email"
(
  "email" text PRIMARY KEY,
  "userId" text,
  "confirmed" bool default false,
  "createdTime" timestamptz default now(),
  "updatedTime" timestamptz default now()
);

CREATE TABLE "mobile"
(
  "mobile" text PRIMARY KEY,
  "userId" text,
  "confirmed" bool default false,
  "createdTime" timestamptz default now(),
  "updatedTime" timestamptz default now()
)

CREATE TABLE "session" (
  "sessionId" text PRIMARY KEY,
  "userId" text,
  "createdIp" text,
  "createdAgent" text,
  "createdTime" timestamptz default now(),
  "updatedTime" timestamptz default now()
)

