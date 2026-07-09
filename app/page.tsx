"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobCard from "../components/JobCard";
import { jobs } from "../data/jobs";


export default function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const filteredJobs = jobs.filter((job) => {
    return (
      (job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase())) &&
      (location === "" || job.location === location) &&
      (jobType === "" || job.type === jobType)
    );
  });

  return (
    <>
      <Navbar />
      <Hero search={search} setSearch={setSearch} />

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-wrap gap-4 mb-8">

          <select
            className="border p-3 rounded-lg"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
            <option>Chennai</option>
            <option>Remote</option>
          </select>

          <select
            className="border p-3 rounded-lg"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">All Types</option>
            <option>Full Time</option>
            <option>Remote</option>
            <option>Internship</option>
          </select>

        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Jobs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              salary={job.salary}
            />
          ))}

        </div>

        {filteredJobs.length === 0 && (
          <h2 className="text-center mt-10 text-xl">
            No jobs found.
          </h2>
        )}

      </section>
    </>
  );
}