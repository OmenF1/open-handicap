import React from "react";

const ScoreForm = () => {
    const date = new Date();
    return (
        <>
            <h2>New Score Entry</h2>
            <form className="bg-gray-600 shadow-md rounded max-w-full p-10">
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/4">
                        <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="course">Course</label>
                    </div>
                    <div className="md:w-3/4">
                        <select id="course" name="course" className="block appearance-none w-full bg-gray-200 border border-gray-400 hover:border-green-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>King David Golf Club</option>
                            <option>West Lake Country Club</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/4">
                        <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="holes">Holes</label>
                    </div>
                    <div className="md:w-3/4">
                        <select name="holes" id="holes" className="block appearance-none w-full bg-gray-200 border border-gray-400 hover:border-green-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>18</option>
                            <option>9 (Out)</option>
                            <option>9 (In)</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/4">
                        <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="tee">Tee</label>
                    </div>
                    <div className="md:w-3/4">
                        <select name="tee" id="tee" className="block appearance-none w-full bg-gray-200 border border-gray-400 hover:border-green-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Yellow</option>
                            <option>Reds</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/4">
                        <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="score">Score</label>
                    </div> 
                    <div className="md:w-3/4">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" type="number" name="score" id="score" />
                    </div>
                </div>
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/4">
                        <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4">Date</label>
                    </div>
                    <div className="md:w-3/4">
                        <label className="appearance-none w-full bg-gray-200 border border-green-500 px-4 py-2 pr-8 rounded shadow leading-tight">{date.toLocaleDateString()}</label>    
                    </div>         
                </div>
                <button className="block shadow bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">Submit</button>
            </form>
        </>
    )
}

export default ScoreForm;