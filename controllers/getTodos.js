const Todo=require('../models/Todo');

exports.getTodo=async(req, res)=>{
    try{
        let response=await Todo.find({});
        res.status(200).json({
        success:true,
        data:response
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error"
        })
    }
    

}
exports.getTodoById=async(req, res)=>{
    try{
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});

        if(!todo)
        res.status(200).json({
        success:false,
        data:"No data found with given id"
        })

        res.status(200).json({
            success:true,
            data:todo,
            message:"Todo data successfully fetched",
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error"
        })
    }
    

}