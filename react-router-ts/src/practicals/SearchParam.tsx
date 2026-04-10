import { useSearchParams } from "react-router-dom";

export default function SearchParam() {
  const people = [
    { id: 1, name: "Aline Uwase", role: "Frontend Developer" },
    { id: 2, name: "Eric Nshimiyimana", role: "Backend Developer" },
    { id: 3, name: "Grace Mukamana", role: "UI/UX Designer" },
    { id: 4, name: "Jean Claude Habimana", role: "DevOps Engineer" },
    { id: 5, name: "Patrick Ndayisaba", role: "QA Engineer" },
    { id: 6, name: "Diane Uwera", role: "Product Manager" },
    { id: 7, name: "Samuel Irakoze", role: "Mobile Developer" },
    { id: 8, name: "Claudine Ingabire", role: "Data Analyst" },
    { id: 9, name: "Emmanuel Nsabimana", role: "Security Engineer" },
    { id: 10, name: "Olive Mukeshimana", role: "Technical Writer" },
  ];

  const [params, setParams] = useSearchParams({});

  const filteredPeople = people.filter((person) => {
    const search = params.get("search");
    if (search) return person.name.toLowerCase().includes(search.toLowerCase());
    return true;
  });
  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    if (input.length < 1) setParams({});
    else setParams({ search: input });
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-8">
      <div className="w-screen h-72 flex justify-center items-center">
        <input
          type="text"
          className=" w-80 h-10 px-4 py-2 rounded-md border-gray-300 border focus:outline-none text-gray-500"
          placeholder="Search name"
          value={params.get("search") || ""}
          onChange={handleSearchInput}
        />
      </div>
      <div className=" w-screen h-[70vh] grid grid-cols-6 gap-4 p-4">
        {filteredPeople.map((person) => (
          <div
            key={person.id}
            className="border border-gray-300 rounded-2xl flex flex-col justify-center items-start p-2"
          >
            <p>
              Name: <span className="font-semibold">{person.name}</span>{" "}
            </p>
            <p>
              Role: <span className="font-semibold">{person.role}</span>{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
