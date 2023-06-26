import React from "react";

const DetailsForm = () => {
    return (
        <>
            <form className="bg-white shadow-md rounded max-w-sm">
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="firstName">First Name</label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" type="text" name="firstName" id="firstName" />
                    </div>
                </div>
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" type="text" name="lastName" id="lastName" />
                    </div>
                </div>
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">Email</label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" type="email" name="email" id="email"/>
                    </div>
                </div>
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="gender">Gender</label>
                    </div> 
                    <div className="md:w-2/3">
                        <div className="inline-block relative w-64">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-400 hover:border-green-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
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
                <button className="block shadow bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">Update</button>
            </form>
        </>
    )
}

export default DetailsForm;