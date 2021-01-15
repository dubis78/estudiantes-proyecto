const {Router}=require('express');
const {cnn_mysql}=require('./../config/database');
const router = Router();

router.get("/actor/:id", async(req,res) => {
  const {id}= req.params;
  const [rows]=await cnn_mysql.promise().query(`SELECT * FROM actores WHERE id =${id}`);
  //const [rows]=await connection.execute(`SELECT * FROM actores WHERE id =?`,[id]);
  if(rows[0]){res.json(rows);
  }
  else{
    res.json({});
  }
  
});

router.get("/actores", (req,res) => {
  //let actores=[];
  cnn_mysql.query(`SELECT * FROM actores`, (error,result,fields)=>{
    if(error) {      
      return res.status(500).send('Hay un error');
    }
    else{
      return res.json(result)
    }
  });
});


router.post('/actor', async (req, res) => {
  try {
      const {
          documento,
          tipo_documento,
          nombres,
          apellidos,
          contrasena,
          correo,
          telefono_celular,
          numero_expediente,
          genero,
          fecha_nacimiento,
          estado_actor_id,
          institucion_id,
          tipo_actor_id,
          fecha_creacion,
          fecha_actualizacion
      } = req.body
      const [rows, fields] = await cnn_mysql.promise().execute(`INSERT INTO actores(documento, tipo_documento, nombres, apellidos, contrasena, correo, telefono_celular, numero_expediente, genero, fecha_nacimiento, estado_actor_id, institucion_id, tipo_actor_id, fecha_creacion,fecha_actualizacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [documento, tipo_documento, nombres, apellidos, contrasena, correo, telefono_celular, numero_expediente, genero, fecha_nacimiento, estado_actor_id, institucion_id, tipo_actor_id, fecha_creacion, fecha_actualizacion])

      if (rows.affectedRows > 0) {
          res.json({
              id: rows.insertId,
              documento: documento,
              tipo_documento: tipo_documento,
              nombres: nombres,
              apellidos: apellidos,
              contrasena: contrasena,
              correo: correo,
              telefono_celular: telefono_celular,
              numero_expediente: numero_expediente,
              genero: genero,
              fecha_nacimiento: fecha_nacimiento,
              estado_actor_id: estado_actor_id,
              institucion_id: institucion_id,
              tipo_actor_id: tipo_actor_id,
              fecha_creacion: fecha_creacion,
              fecha_actualizacion: fecha_actualizacion
          })
      } else {
          res.json({})
      }
  } catch (e) {
      res.status(500).json({errorCode : e.errno, message : "Error en el servidor"})
  }
})

router.put('/actor/:id', (req, res) => { })

router.post('/actor', async (req, res) => {
  try {
      const {
          documento,
          tipo_documento,
          nombres,
          apellidos,
          contrasena,
          correo,
          telefono_celular,
          numero_expediente,
          genero,
          fecha_nacimiento,
          estado_actor_id,
          institucion_id,
          tipo_actor_id,
          fecha_creacion,
          fecha_actualizacion
      } = req.body
      const [rows, fields] = await cnn_mysql.promise().execute(`INSERT INTO actores(documento, tipo_documento, nombres, apellidos, contrasena, correo, telefono_celular, numero_expediente, genero, fecha_nacimiento, estado_actor_id, institucion_id, tipo_actor_id, fecha_creacion,fecha_actualizacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [documento, tipo_documento, nombres, apellidos, contrasena, correo, telefono_celular, numero_expediente, genero, fecha_nacimiento, estado_actor_id, institucion_id, tipo_actor_id, fecha_creacion, fecha_actualizacion])

      if (rows.affectedRows > 0) {
          res.json({
              id: rows.insertId,
              documento: documento,
              tipo_documento: tipo_documento,
              nombres: nombres,
              apellidos: apellidos,
              contrasena: contrasena,
              correo: correo,
              telefono_celular: telefono_celular,
              numero_expediente: numero_expediente,
              genero: genero,
              fecha_nacimiento: fecha_nacimiento,
              estado_actor_id: estado_actor_id,
              institucion_id: institucion_id,
              tipo_actor_id: tipo_actor_id,
              fecha_creacion: fecha_creacion,
              fecha_actualizacion: fecha_actualizacion
          })
      } else {
          res.json({})
      }
  } catch (e) {
      res.status(500).json({errorCode : e.errno, message : "Error en el servidor"})
  }
})

router.put('/actor/:id', (req, res) => { })

router.patch('/actor/:id', (req, res) => {
  try{
      const id = req.params.id
      const {
          documento,
          tipo_documento,
          nombres,
          apellidos,
          contrasena,
          correo,
          telefono_celular,
          numero_expediente,
          genero,
          fecha_nacimiento,
          estado_actor_id,
          institucion_id,
          tipo_actor_id,
          fecha_creacion,
          fecha_actualizacion
      } = req.body
      console.log(id)
      console.log(documento, tipo_documento)
  }catch(e){
      
  }
})


router.delete("/actores", (req,res) => {
  let actores=[];
  actores.push({nombre:'juan',apellido:'perez'});
  res.json(actores);
});

module.exports= router;