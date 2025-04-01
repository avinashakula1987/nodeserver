const { createQuestion, getQuestionById, getQuestions, updateQuestion, deleteQuestion } = require("./questions.service");
module.exports =  {
    createQuestion: (req, res) => {
        const body = req.body;
        createQuestion(body, (err, results)=>{
            if(err){
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"+err
                })
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        })
    },
    getQuestionById: (req, res)=>{
        const id = req.params.id;
        getQuestionById(id, (err, results)=>{
            if(err){
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "Records not found"
                })
            }
            if(results){
                return res.json({
                    success: 1,
                    message: results
                })
            }
        });
    },
    getQuestions: (req, res)=>{
        getQuestions((err, results)=>{
            if(err){
                console.log("error", err);
                return;
            }            
            return res.json({
                success: 1,
                data: results
            })
        });
    },
    updateQuestion: (req, res)=>{
        const body = req.body;
        updateQuestion(body, (err, results)=>{
            if(err){
                return;
            }
           
            return res.json({
                success: 1,
                message: "Updated successfully"
            })
        });
    },
    deleteQuestion: (req, res)=>{
        const data = req.body;
        deleteQuestion(data, (err, results)=>{
            if(err){
                return;
            }
           
            return res.json({
                success: 1,
                message: 'Question Deleted'
            })
        });
    },
}