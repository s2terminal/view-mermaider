# View Mermaider
git clone and run this.
```
$ docker-compose run --rm node yarn start
```

## Example
`tmp/sql/a.sql`
```sql
SELECT * FROM origin
```

`tmp/sql/b.sql`
```sql
SELECT * FROM a
```

`tmp/sql/c.sql`
```sql
SELECT * FROM a
  LEFT JOIN b ON b.id = a.id
```

run `$ ./bin/index.js`

```
graph BT
  a-->origin;
  b-->a;
  c-->a;
  c-->b;
```
