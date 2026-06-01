function Jobs() {
    const jobs = [
      {
        id: 1,
        title: "Java Full Stack Developer",
        company: "ABC Tech"
      },
      {
        id: 2,
        title: "React Developer",
        company: "XYZ Solutions"
      }
    ];
  
    return (
      <div>
        <h2>Available Jobs</h2>
  
        {jobs.map((job) => (
          <div key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <button>Apply</button>
            <hr />
          </div>
        ))}
      </div>
    );
  }
  
  export default Jobs;