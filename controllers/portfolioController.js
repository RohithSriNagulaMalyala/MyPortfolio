const sendEmailController=(req, res)=>{
    try{
        return res.status(200).send({
            success:true,
            message:"message success",
        });
    }catch(error){
            console.log(error);
            return res.status(500).send({
                success:false,
                message:"send email err",
                error,
            });
    }
};

module.exports = { sendEmailController };