import Link from "next/link";

type JobProps = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
};

export default function JobCard({
  id,
  title,
  company,
  location,
  type,
  salary,
}: JobProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 border">

      {/* Company Logo */}
      <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
  {company.charAt(0)}
</div>

      {/* Job Title */}
      <h2 className="text-xl font-bold text-gray-800">
        {title}
      </h2>

      {/* Company Name */}
      <p className="text-gray-600 mt-2">
        {company}
      </p>

      <div className="mt-4 space-y-1 text-sm text-gray-500">
        <p>📍 {location}</p>
        <p>💼 {type}</p>
        <p>💰 {salary}</p>
      </div>

      <Link href={`/jobs/${id}`}>
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
      </Link>

    </div>
  );
}