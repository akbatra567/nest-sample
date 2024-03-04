Prisma is a modern DB toolkit to query, migrate and model your database [Official Website](https://prisma.io)


Set up a new Prisma project
```shell
$ prisma init
```

Generate artifacts (e.g. Prisma Client)
```shell
$ prisma generate
```

Browse your data
```shell
$ prisma studio
```

Pull the schema from an existing database, updating the Prisma schema
```shell
$ prisma db pull
```
`
Push the Prisma schema state to the database
```shell
$ prisma db push
```
`
Validate your Prisma schema
```shell
$ prisma validate
```

Format your Prisma schema
```shell
$ prisma format
````

Display Prisma version info
```shell
$ prisma version
```

Display Prisma debug info

```shell
$ prisma debug
```

## Migrations commands 

Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
```shell
$ prisma migrate dev
```

Reset your database and apply all migrations    
```shell
$ prisma migrate reset
```

Apply pending migrations to the database in production/staging
```shell
$ prisma migrate deploy
```

Check the status of migrations in the production/staging database
```shell
$ prisma migrate status
```

Specify a schema
```shell
$ prisma migrate status --schema=./schema.prisma
```

Compare the database schema from two databases and render the diff as a SQL script
```shell
$ prisma migrate diff \
--from-url "$DATABASE_URL" \
--to-url "postgresql://login:password@localhost:5432/db" \
--script
```
