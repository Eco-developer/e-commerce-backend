const { Users } = require('../../models');
const { compare } = require('bcryptjs');
const { createToken } = require('../../helpers')

const login = async(req, res) => {
    const { body } = req;

    try {
        const {
            email,
            password,
        } = body;
		const signedUser = await Users.findOne({email});
		if (!signedUser) {
            return res.status(400).send({
                data: null,
                status: 400,
                message: "Invalid email."
            });
        }

		const {
			password : hashedPassword,
			name,
            lastname,
            phone,
		} = signedUser;

        const isValid = await compare(
            password,
            hashedPassword
        );

        if (!isValid) {
            return res.status(400).send({
                data: null,
                status: 400,
                message: "Wrong password."
            });
        }
		const token = createToken({name, lastname, email, phone}, "30m")

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
    login
}