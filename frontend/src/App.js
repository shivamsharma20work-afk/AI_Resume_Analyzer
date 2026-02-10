import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [resume, setResume] = useState(null);
  const [jd, setJd] = useState("");
  const [result, setResult] = useState(null);

  const submitHandler = async () => {
    if (!resume || !jd) {
      alert("Resume aur Job Description dono required hai");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("job_description", jd);

    const res = await axios.post("http://localhost:8000/analyze", formData);
    setResult(res.data.match_percentage);
  };

  return (
    <div className="container">
      <h2>AI Resume Analyzer</h2>

      <label>Upload Resume (PDF)</label>
      <input type="file" onChange={(e) => setResume(e.target.files[0])} />

      <label>Job Description</label>
      <textarea
        rows="5"
        placeholder="Paste job description here..."
        onChange={(e) => setJd(e.target.value)}
      />

      <button onClick={submitHandler}>Analyze Resume</button>

      {result !== null && (
        <div className="result">
          Match Score: {result}%
        </div>
      )}
    </div>
  );
}

export default App;
