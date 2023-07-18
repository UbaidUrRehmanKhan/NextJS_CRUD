
/** Controller */
import Users from '../model/user'

export async function getUsers(req, res){
    try {
        const users = await Users.find({})
        if(users.length == 0) return res.status(404).json( { error: "Data not Found"})
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json( { error : "Error While Fetching Data"})
    }
}

// get : http://localhost:3000/api/users/1
export async function getUser(req, res){
    try {
        const { userId } = req.query;

        if(userId){
            const user = await Users.findById(userId);
            return res.status(200).json(user)
        } else {
            return res.status(404).json({ error : "User not Selected...!"});
        }
       
    } catch (error) {
        res.status(404).json({ error: "Cannot get the User...!"})
    }
}

export async function postUser(req, res){
    try {
        const formData = req.body;
        if(!formData) return res.status(404).json( { error: "Form Data Not Provided...!"});
        console.log(formData)
        Users.create( formData).then(() => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(500).json({'Message': 'Data not saved.'})
        });
    } catch (error) {
        return res.status(404).json({ error })
    }
}

// put : http://localhost:3000/api/users/1
export async function putUser(req, res){
    try {
        const { userId } = req.query;
        const formData = req.body;

        if(userId && formData){
            const user = await Users.findByIdAndUpdate(userId, formData);
            res.status(200).json(user)
        }
        res.status(404).json( { error: "User Not Selected...!"})
    } catch (error) {
        res.status(404).json({ error: "Error While Updating the Data...!"})
    }
}

export async function deleteUser(req, res){
    try {
        const { userId } = req.query;

        if(userId){
            const user = await Users.findByIdAndDelete(userId)
            return res.status(200).json(user)
        }

        res.status(404).json({ error: "User Not Selected...!"})

    } catch (error) {
        res.status(404).json({ error: "Error While Deleting the User...!"})
    }
}