const pool = require("../../config/database");

module.exports = {
    createQuestion: (data, callBack)=>{
        pool.query(`INSERT INTO questionsList (subject, question, choice1, choice2, choice3, choice4, choice5, questioni, choice1i, choice2i, choice3i, choice4i, choice5i, answer, pmark, nmark, explanation, nvideo, status) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, 
            [data.subject, data.question, data.choice1, data.choice2, data.choice3, data.choice4, data.choice5, data.questioni, data.choice1i, data.choice2i, data.choice3i, data.choice4i, data.choice5i, data.answer, data.pmark, data.nmark, data.explanation, data.nvideo, 0],
            (error, results, fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, results)
            }
        );
    },
    getQuestions: callBack => {
        pool.query(`SELECT id, subject, question, choice1, choice2, choice3, choice4, choice5, questioni, choice1i, choice2i, choice3i, choice4i, choice5i, answer, pmark, nmark, explanation, nvideo, status FROM questionsList`,
        [],
        (error, results, fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, results)
        }
    ); 
    },
    getQuestionById: (id,callBack) => {
        pool.query(`SELECT id, subject, question, choice1, choice2, choice3, choice4, choice5, questioni, choice1i, choice2i, choice3i, choice4i, choice5i, answer, pmark, nmark, explanation, nvideo, status FROM questionsList WHERE id=?`,
        [id],
        (error, results, fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, results[0])
        }
    );
    },
    updateQuestion: (data,callBack) => {
        pool.query(`UPDATE questionsList SET subject=?, question=?, choice1=?, choice2=?, choice3=?, choice4=?, choice5=?, questioni=?, choice1i=?, choice2i=?, choice3i=?, choice4i=?, choice5i=?, answer=?, pmark=?, nmark=?, explanation=?, nvideo=? WHERE id=?`,
        [
            data.subject, data.question, data.choice1, data.choice2, data.choice3, data.choice4, data.choice5, data.questioni, data.choice1i, data.choice2i, data.choice3i, data.choice4i, data.choice5i, data.answer, data.pmark, data.nmark, data.explanation, data.nvideo, data.id
        ],
        (error, results, fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, results[0])
        }
    )
    },
    deleteQuestion: (data,callBack) => {
        pool.query(`DELETE FROM questionsList WHERE id=?`,
        [data.id],
        (error, results, fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, results[0])
        }
    )
    },
   

    
}