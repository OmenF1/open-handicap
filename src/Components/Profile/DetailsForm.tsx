import React, {useEffect, useState} from "react";
import axios from "axios";

const DetailsForm = ({user} : {user: any}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3001/api/getUser/${user.sub}`)
        .then(response => {
            setFirstName(response.data.FirstName);
            setLastName(response.data.LastName);
            setGender(response.data.Gender);
        })
        .catch(() => {
            alert("Error fetching user information.")
        });
    }, []);
    
    function firstNameChanged(e: React.ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value);
    }

    function lastNameChanged(e: React.ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value);
    }

    function genderChanged(e: React.ChangeEvent<HTMLSelectElement>) {
        setGender(e.target.value);
    }

    function submitForm() {
        const userObject = 
            {
                Id: user.sub,
                FirstName: firstName,
                LastName: lastName,
                Gender: gender
            }
        
        axios.put('http://localhost:3001/api/updateUser', userObject)
        .catch(error => {
            alert(error);
        })
    }

    return (
        <>
            <form className="bg-gray-600 shadow-md rounded max-w-sm p-10">
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="firstName">First Name</label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" type="text" name="firstName" id="firstName" value={firstName} onChange={firstNameChanged}/>
                    </div>
                </div>
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" type="text" name="lastName" id="lastName" value={lastName} onChange={lastNameChanged} />
                    </div>
                </div>
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">Email</label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" type="email" name="email" id="email" value={user.email}/>
                    </div>
                </div>
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="gender">Gender</label>
                    </div> 
                    <div className="md:w-2/3">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-400 hover:border-green-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" value={gender} onChange={genderChanged}>
                            <option value={1} >Male</option>
                            <option value={2}>Female</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Handicap</label>
                    </div>
                    <div className="md:w-2/3">
                        <label className="appearance-none w-full bg-gray-200 border border-green-500 px-4 py-2 pr-8 rounded shadow leading-tight">NULL</label>    
                    </div>         
                </div>
                <button className="block shadow bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button" onClick={submitForm}>Update</button>
            </form>
        </>
    )
}

export default DetailsForm;