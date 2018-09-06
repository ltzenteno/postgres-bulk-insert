const fs = require('fs');
const path = require('path');
const {
  createRandomFirstName,
  createRandomFirstSurname,
  createRandomSecondSurname,
  createEmail,
  createPassword
} = require('./util');

const length = 5;

const createUser = id => {
  const name = createRandomFirstName();
  return `${id},${name},${createRandomFirstSurname()},${createRandomSecondSurname()},${createEmail(name)},${createPassword()},1,1,t,t,f\n`;
};

createPerson = id => {
};

const createUsersFile = () => {
  const stream = fs.createWriteStream(path.join(`${__dirname}./../build/`, 'users.csv'));
  stream.once('open', fd => {
    stream.write('id,nombre,apellido_paterno,apellido_materno,email,password,idioma_id,rol_id,estatus,primer_visita,eliminado \n');
    for(let i=0;i<length;i++){
      stream.write(createUser(i+10));
    }
    stream.end();
  });
};

const createPersonsFile = () => {
  const stream = fs = createWriteStream(path.join(`${__dirname}./../build/`, 'persons.csv'));
  stream.once('open', fd => {
    stream.write('id,nombre,apellido_paterno,apellido_materno,edad,usuario_id,sucursal_id,tipo_persona_id,email,foto_perfil,perfil_base_id,prefijo,fecha_registro,digito,estatus,eliminado,adicionales \n');
  });
};

createUsersFile();
console.log('done.');
