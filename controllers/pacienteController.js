import Paciente from "../models/Paciente.js"

const agregarPaciente = async (req, res) => {
    const paciente = new Paciente(req.body);
    paciente.veterinario= req.veterinario._id;
    try{
        const pacienteRegistrado = await paciente.save();
        res.json(pacienteRegistrado);
    }
    catch(error){
        console.log(error);
    }
}

const obtenerPacientes = async (req, res) =>{
    const pacientes = await Paciente.find().where('veterinario').equals(req.veterinario);
    res.json(pacientes);
}

const obtenerPaciente = async (req, res) =>{
    const {id} = req.params;
    const paciente = await Paciente.findById(id);
    
    if(!paciente){
        const error = new Error("Paciente no encontrado");
        return res.status(404).json({msg: error.message});
    }

    //Se convierten en string para poder compararlos porque son objectId
    if(paciente.veterinario._id.toString() !== req.veterinario._id.toString()){
        return res.json({msg: 'Acción no valida'});
    }

    res.json(paciente);
}

const actualizarPaciente = async (req, res) =>{
    const {id} = req.params;
    const paciente = await Paciente.findById(id);
    
    if(!paciente){
        const error = new Error("Paciente no encontrado");
        return res.status(404).json({msg: error.message});
    }

    //Se convierten en string para poder compararlos porque son objectId
    if(paciente.veterinario._id.toString() !== req.veterinario._id.toString()){
        return res.json({msg: 'Acción no valida'});
    }

    //Actualizar paciente (en el caso de que no se complete un campo se completa con la información ya existente)
    paciente.nombre = req.body.nombre || paciente.nombre;
    paciente.propietario = req.body.propietario || paciente.propietario;
    paciente.email = req.body.email || paciente.email;
    paciente.fecha = req.body.fecha || paciente.fecha;
    paciente.sintomas = req.body.sintomas || paciente.sintomas;

    try {
        const pacienteActualizado = await paciente.save();
        return res.json(pacienteActualizado);

    } catch (error) {
        console.log(error);
    }

}

const eliminarPaciente = async (req, res) =>{
    const {id} = req.params;
    const paciente = await Paciente.findById(id);
    
    if(!paciente){
        const error = new Error("Paciente no encontrado");
        return res.status(404).json({msg: error.message});
    }

    //Se convierten en string para poder compararlos porque son objectId
    if(paciente.veterinario._id.toString() !== req.veterinario._id.toString()){
        return res.json({msg: 'Acción no valida'});
    }

    try {
        await paciente.deleteOne();
        return res.json({msg: "Paciente eliminado"});

    } catch (error) {
        console.log(error);
    }
}

export {
    agregarPaciente,
    obtenerPacientes,
    obtenerPaciente, 
    actualizarPaciente, 
    eliminarPaciente
}