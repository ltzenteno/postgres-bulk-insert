const fs = require('fs');
const path = require('path');
const {
  createRandomFirstName,
  createRandomFirstSurname,
  createRandomSecondSurname,
  createEmail,
  createPassword
} = require('./util');

const createUser = id => {
  const name = createRandomFirstName();
  return `${id},${name},${createRandomFirstSurname()},${createRandomSecondSurname()},${createEmail(name)},${createPassword()},1,1,t,t,f\n`;
};

const createUsersFile = () => {
  const length = 5;
  const stream = fs.createWriteStream(path.join(`${__dirname}./../build/`, 'users-batch.csv'));
  stream.once('open', fd => {
    stream.write('id,nombre,apellido_paterno,apellido_materno,email,password,idioma_id,rol_id,estatus,primer_visita,eliminado \n');
    for(let i=0;i<length;i++){
      stream.write(createUser(i+10));
    }
    stream.end();
  });
};

createUsersFile();
console.log('done.');

// run the following command in psql:
// \c khor2
// COPY administracion.usuarios(id, nombre, apellido_paterno, apellido_materno, email, password, idioma_id, rol_id, estatus, primer_visita, eliminado) FROM '/Users/zenteno/Documents/workspace/indigo/human/generate-khor-dummy-users/build/users-batch.csv' DELIMITER ',' CSV HEADER;
// you have to set the sequence manually after the insert
