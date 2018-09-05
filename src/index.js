const fs = require('fs');
const path = require('path');
const {
  createRandomFirstName,
  createRandomFirstSurname,
  createRandomSecondSurname,
  createEmail,
  createPassword
} = require('./util');

const createUser = () => {
  const name = createRandomFirstName();
  return `insert into usuarios \
(id, nombre, apellido_paterno, apellido_materno, email, password, idioma_id, rol_id, estatus, primer_visita, eliminado) \
values \
(nextval('usuarios_seq'), '${name}', '${createRandomFirstSurname()}', '${createRandomSecondSurname()}', '${createEmail(name)}', '${createPassword()}', 1, 1, 't', 't', 'f'); \n`;
};

const createUsersFile = () => {
  const length = 5;
  const stream = fs.createWriteStream(path.join(`${__dirname}./../build/`, 'users-batch.sql'));
  stream.once('open', fd => {
    stream.write('set search_path to administracion; \n');
    for(let i=0;i<length;i++){
      stream.write(createUser());
    }
    stream.end();
  });
};

createUsersFile();
console.log('done.');
