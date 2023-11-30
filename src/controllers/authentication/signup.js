const { Users } = require('../../models');
const { hash } = require('bcryptjs');
const { createToken } = require('../../helpers')

const signup = async (req, res) => {
    const { body } = req;
    try {
 
        const {
            password,
            password_confirmation,
            email,
            ...rest
        } = body;
        let user = await Users.findOne({email});
        if (user) {
            return res.status(400).send({
                data: null,
                status: 400,
                message: "Email is already registered."
            });
        }
        const hashedPassword = await hash(password, 8);
        user = new Users({
            ...rest, 
            email,
            password: hashedPassword,
        });
        await user.save();
        const signedUser = await Users.findOne({email});
        
        const { 
            password : userPassword,
            name,
            lastname,
            phone,
        } = signedUser;

        const token = createToken({name, lastname, email, phone}, "30m");

        return res.status(200).send({
            data: { token },
            status: 200,
            message: "Successful."
        });
    } catch (error) {
        return res.status(500).send({
            data: null,
            status: 500,
            message: error.message
        });
    }
}

module.exports = {
    signup,
}