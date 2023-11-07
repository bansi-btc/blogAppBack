const Todo=require('../models/Todo');

exports.deleteTodo=async(req, res)=>{
    try{
        const id=req.params.id;
        const deletedTodo=await Todo.findByIdAndDelete({_id:id});

        res.status(200).json({
            success:true,
            data:deletedTodo,
        })
    }
    catch(err){
        res.status(400).json({
            success:true,
            data:"unable to delete todo",
        })
    }
}