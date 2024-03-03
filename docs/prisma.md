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

Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
```shell
$ prisma migrate dev
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