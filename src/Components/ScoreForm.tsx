import React, {useState,  useEffect} from "react";
import axios from "axios";

const ScoreForm = () => {
    const date = new Date();
    const [courses, setCourses ] = useState<any[]>([]);
    const [courseId, setCourseId] = useState('')
    const [tees, setTees ] = useState<any[]>([]);
    const [teeId, setTeeId] = useState('');
    const [score, setScore] = useState('');
    const [holes, setHoles] = useState('');

   useEffect(() => {
        axios.get('http://localhost:3001/api/getCourses')
        .then(response => {
            setCourses(response.data)
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    function getTees(id: string) {
        axios.get(`http://localhost:3001/api/getTees/${id}`)
        .then(response => {
            setTees(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    function courseChanged(e: React.ChangeEvent<HTMLSelectElement>) {
        setCourseId(e.target.value);
        getTees(e.target.value);
    }

    function holesChanged(e: React.ChangeEvent<HTMLSelectElement>) {
        setHoles(e.target.value);
    }

    function teeChanged(e: React.ChangeEvent<HTMLSelectElement>) {
        setTeeId(e.target.value);
    }

    function scoreChanged(e: React.ChangeEvent<HTMLInputElement>) {
        setScore(e.target.value);
    }

    function submitScore() {
        console.log("Score will be submitted here");
    }

    return (
        <>
            <h2>New Score Entry</h2>
            <form className="bg-gray-600 shadow-md rounded max-w-full p-10">
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/4">
                        <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="course">Course</label>
                    </div>
                    <div className="md:w-3/4">
                        <select id="course" name="course" onChange={courseChanged} className="block appearance-none w-full bg-gray-200 border border-gray-400 hover:border-green-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            {courses.map(course => (
                                <option value={course.Id} key={course.Id}>{course.Name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/4">
                        <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="holes">Holes</label>
                    </div>
                    <div className="md:w-3/4">
                        <select onChange={holesChanged} name="holes" id="holes" className="block appearance-none w-full bg-gray-200 border border-gray-400 hover:border-green-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option value=''></option>
                            <option value='1'>18</option>
                            <option value='2'>9 (Out)</option>
                            <option value='3'>9 (In)</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/4">
                        <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="tee">Tee</label>
                    </div>
                    <div className="md:w-3/4">
                        <select onChange={teeChanged} name="tee" id="tee" className="block appearance-none w-full bg-gray-200 border border-gray-400 hover:border-green-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option></option>
                                {tees.map( tee => (
                                    <option key={tee.id} value={tee.id}>{tee.TeeName}</option>
                                ))}
                        </select>
                    </div>
                </div>
                <div className="md:flex md-items-center mb-6">
                    <div className="md:w-1/4">
                        <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="score">Score</label>
                    </div> 
                    <div className="md:w-3/4">
                        <input onChange={scoreChanged} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" type="number" name="score" id="score" />
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
                <button onClick={submitScore} className="block shadow bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">Submit</button>
            </form>
        </>
    )
}

export default ScoreForm;