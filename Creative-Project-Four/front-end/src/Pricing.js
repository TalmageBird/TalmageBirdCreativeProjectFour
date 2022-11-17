import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function Pricing() {
    // setup state
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState("");
    const [customer, setCustomer] = useState("");
    const [ageoffence, setAgeoffence] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [email, setEmail] = useState("");

    const fetchJobs = async () => {
        try {
            const response = await axios.get("/api/jobs");
            setJobs(response.data.jobs);
        }
        catch (error) {
            setError("error retrieving jobs: " + error);
        }
    }
    const createJob = async () => {
        try {
            await axios.post("/api/jobs", { customer: customer, ageoffence: ageoffence, size: size, color: color, email: email });
        }
        catch (error) {
            setError("error adding a job: " + error);
        }
    }
    const deleteOneJob = async (job) => {
        try {
            await axios.delete("/api/jobs/" + job.id);
        }
        catch (error) {
            setError("error deleting a job" + error);
        }
    }

    // fetch job data
    useEffect(() => {
        fetchJobs();
    }, []);

    const addJob = async (e) => {
        e.preventDefault();
        await createJob();
        fetchJobs();
        setCustomer("");
        setAgeoffence("");
        setSize("");
        setColor("");
        setEmail("");
    }

    const deleteJob = async (job) => {
        await deleteOneJob(job);
        fetchJobs();
    }

    return (
        <div>
      <div class='firstoption'>
        <div>
            <p></p>

        </div>
    </div>
    
    <div class='dop'>
        <p>Our prices and quality of work are the best in the area! Estimates are given based off of the square-footage of the fence as well as the type of stain
        to be used (Solid, Semi-transparent, or transparent). Additionally, we offer powerwashing for older fences to remove sediment and build up in the fence so that the stain can properly 
        seal the fence and thereby increase the longevity.
        </p>
    </div>
    
    
    <div class='quote'>
        <img src='images/screenshot.png' width="100%"/>
    </div>
    
    <div class='firstoption'>
        <div>
            <p></p>

        </div>
    </div>
    
    <div class='jobForm'>
    {error}
    <h2> Add your information below to recieve a price estimate to revitalize your fence! </h2>
    <p> </p>
    <form onSubmit={addJob}>
    <div>
    <label>
   <strong> Customer:</strong>
   <p> </p>
                <input type="text" value={customer} onChange={e => setCustomer(e.target.value)} />

    </label>
    </div>
    
    <div>
    <label>
    <strong>Age of the Fence (in years): </strong>
    <p> </p>
                <input type="text" value={ageoffence} onChange={e => setAgeoffence(e.target.value)} /> 

    </label>
    </div>
    
    <div>
    <label>
    <strong> Size of the Fence (feet squared): </strong>
    <p> </p>
                <input type="text" value={size} onChange={e => setSize(e.target.value)} /> 

    </label>
    </div>
    
    <div>
    <label>
    <strong> Desired Stain Color: </strong> 
    <p> </p>
                <input type="text" value={color} onChange={e => setColor(e.target.value)} />

    </label>
    </div>
    
    <div>
    <label>
    <strong> Email: </strong>
    <p> </p>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

    </label>
    </div>
    <p> </p>
    <input type="submit" value="Submit" />
    </form>
    
     <div class='firstoption'>
        <div>
            <p></p>

        </div>
    </div>
    
    
    <h3> Current Jobs Ready to recieve an estimate: </h3>
    {jobs.map( job => (
        <div key={job.id} className="yessir">
          <div className="sir">
            <p>{job.customer}</p>
            <p><strong>Age of the fence: </strong>{job.ageoffence} years</p>
            <p><strong>Size of the fence: </strong>{job.size} feet squared</p>
            <p><strong>Desired Color: </strong>{job.color}</p>
            <p><strong>Customer Email: </strong>{job.email}</p>
          </div>
          <button onClick={e => deleteJob(job)}>Remove Job from Queue</button>
          <p> -------------------------------</p>
        </div>
      ))}     
    
    
    </div>
    </div>



    );
}

export default Pricing;
