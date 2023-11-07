const Todo=require('../models/Todo');

exports.updateTodo=async(req, res)=>{
    try{
        const id=req.params.id;
        const {title, description}=req.body;
        const todo=await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description}
        )
   
        res.status(200).json({
            success:true,
            data:todo
        })
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            success:false,
            data:"Unable to update"
        })
    }
}