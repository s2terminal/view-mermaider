# View Mermaider
Parse SQL view files and output [mermaid.js](https://mermaid-js.github.io/mermaid/#/) flowcharts.

## Usage
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

run `$ npx github:s2terminal/view-mermaider view-mermaider ./tmp/sql/`

or git clone and run `$ docker-compose run --rm node yarn start ./tmp/sql/`

```
graph BT
  a-->origin;
  b-->a;
  c-->a;
  c-->b;
```

![mermaid-diagram-20200308232722](https://user-images.githubusercontent.com/7953751/76164724-72f60000-6194-11ea-84b2-a57ba64a2181.png)
