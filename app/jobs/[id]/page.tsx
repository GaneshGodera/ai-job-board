import { jobs } from "../../../data/jobs";

export default async function JobDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return (
      <div className="p-10 text-center">
        Job not found.
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold">{job.title}</h1>

      <p className="mt-4 text-xl">{job.company}</p>

      <div className="mt-6 space-y-2">
        <p>📍 {job.location}</p>
        <p>💼 {job.type}</p>
        <p>💰 {job.salary}</p>
      </div>

      <h2 className="text-2xl font-semibold mt-10">
        Job Description
      </h2>

      <p className="mt-4 text-gray-600">
        We are looking for talented developers who are passionate about
        building modern web applications using the latest technologies.
      </p>

      <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
        Apply Now
      </button>
    </main>
  );
}