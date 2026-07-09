"use client";

type HeroProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Hero({ search, setSearch }: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Find Your Dream Job
        </h1>

        <p className="text-xl mb-8">
          Explore thousands of job opportunities from top companies.
        </p>

        <div className="flex justify-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by job title or company..."
            className="w-full max-w-lg px-5 py-3 rounded-l-lg text-black outline-none"
          />

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-r-lg font-semibold">
            Search
          </button>
        </div>
      </div>
    </section>

  );
}
