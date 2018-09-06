## Bulk Inserts

run the following command in psql:

```
\c khor2
```

1. Bulk insert `administracion.usuarios`

```
COPY administracion.usuarios(id, nombre, apellido_paterno, apellido_materno, email, password, idioma_id, rol_id, estatus, primer_visita, eliminado) FROM '/Users/zenteno/Documents/workspace/indigo/human/generate-khor-dummy-users/build/users.csv' DELIMITER ',' CSV HEADER;
 ```

after that,  you have to set the sequence manually after the insert:

```
alter sequence administracion.usuarios_seq restart with 4;
```

2. Bulk insert `inventario.personas`

```
COPY inventario.personas(id, nombre, apellido_paterno, apellido_materno, email, password, idioma_id, rol_id, estatus, primer_visita, eliminado) FROM '/Users/zenteno/Documents/workspace/indigo/human/generate-khor-dummy-users/build/persons.csv' DELIMITER ',' CSV HEADER;

```
