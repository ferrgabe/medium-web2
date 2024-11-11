# Medium web

## Setup

1. Install [POSTGRES](https://www.postgresql.org/) on your machine or use inside a docker container

2. Install [NODE](https://nodejs.org/pt)

3. Install Dependencies: Run the command bellow to install the project dependencies.

```bash
npm install
```

5. Migrations: Run the commands below to create the database and update the tables

```bash
npm run prisma:migration:run
```

6. Start the Project:

```bash
npm run start:dev
```

This will make the project available at http://localhost:3005

## Migrations

1. To create a new migration open your terminal inside the project and run:

```bash
npm run prisma:migration:create your_migration_name
```

## Seed

1. To run your database seeds open your terminal inside the project and run:

```bash
npm run prisma:seed
```
