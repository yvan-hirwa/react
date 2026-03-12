import { useState, useMemo } from "react";
import InputField from "./InputField";
import List from "./List";
import { ITEMS } from "./data";

export default function Question2() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    console.log("filter");
    if (searchTerm.trim().length < 1) return ITEMS;
    return ITEMS.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  // const searchTermSetter = useCallback((data) => {
  //   setSearchTerm(data);
  // }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-8">
      <InputField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <List filteredItems={filteredItems} />
    </div>
  );
}
