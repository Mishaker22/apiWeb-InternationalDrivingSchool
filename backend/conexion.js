const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/internationalDriving');
const miConexion=mongoose.connection;

miConexion.on('connected',()=>{ // en vez de function se usa landa
    console.log('conexion exitosa.');
});
miConexion.on('error',()=>{ // en vez de function se usa landa
    console.log('No fue posible conectarse a la base de datos.');
});

module.exports=mongoose; 