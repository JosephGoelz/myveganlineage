import React, {useState} from "@types/react";

export const Register = () => {
    const [email,setEmail] = useState('');
    const[pass,setPass] = useState('');
    const[name, setName] = useState('');

    const handleSubmit= (e) => {
        e.preventDefault()
        console.log(email);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(e) =>setName(e.target.value)} type="text" placeholder="Full Name" id="name" name="name"/>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) =>setEmail(e.target.value)} type="email" placeholder="youremail@website.com" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input  value={pass} onChange={(e) =>setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button>If you already have an account, log in here</button>
        </>
    )
}