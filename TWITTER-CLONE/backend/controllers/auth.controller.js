 export const signup = async (req, res) => {
    try {
        const {fullName, username, email, password} = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if(!emailRegex.test(email)){
           return res.status(400).json({success:false, message:"Please enter a valid email"});
       }
       const existingUser=await User.findOne({username});
       if(existingUser){
        return res.status(400).json({success:false, message:"User already exists"});
       }
       const existingEmail= await User.findOne({email});
       if(existingEmail){
        return res.status(400).json({success:false, message:"User is already taken"});
       }
    } catch (error) {
        
    }
 }

 export const login = async (req, res) => {
    res.json({
        data:"You hit the login endpoint",
    }) 
 }


 export const logout = async (req, res) => {
    res.json({
        data:"You hit the logout endpoint",
    }) 
 }

//  GysWvujGuNJM16Yv