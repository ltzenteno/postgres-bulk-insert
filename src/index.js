const fs = require('fs');
const path = require('path');
const {
  createRandomFirstName,
  createRandomFirstSurname,
  createRandomSecondSurname,
  createEmail,
  createPassword
} = require('./util');

const length = 50000;

const createUser = id => {
  const name = createRandomFirstName();
  return `${id},${name},${createRandomFirstSurname()},${createRandomSecondSurname()},${createEmail(name, id)},${createPassword()},1,1,t,t,f\n`;
};

const createPerson = id => {
  const name = createRandomFirstName();
  return `${id},${name},${createRandomFirstSurname()},${createRandomSecondSurname()},30,${id},1,1,${createEmail(name, id)},,1,INT,2018-08-28 15:21:04.239836,${id},t,f,{} \n`;
};

const createUsersFile = () => {
  const stream = fs.createWriteStream(path.join(`${__dirname}./../build/`, 'users.csv'));
  stream.once('open', fd => {
    stream.write('id,nombre,apellido_paterno,apellido_materno,email,password,idioma_id,rol_id,estatus,primer_visita,eliminado \n');
    for(let i=0;i<length;i++){
      stream.write(createUser(i+200));
    }
    stream.end();
  });
};

const createPersonsFile = () => {
  const stream = fs.createWriteStream(path.join(`${__dirname}./../build/`, 'persons.csv'));
  stream.once('open', fd => {
    stream.write('id,nombre,apellido_paterno,apellido_materno,edad,usuario_id,sucursal_id,tipo_persona_id,email,foto_perfil,perfil_base_id,prefijo,fecha_registro,digito,estatus,eliminado,adicionales \n');
    for(let i=0;i<length;i++){
      stream.write(createPerson(i+200));
    }
    stream.end();
  });
};

createUsersFile();
createPersonsFile();
console.log('done.');
