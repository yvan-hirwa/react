import ToggleButton from "./ToggleButton";

export default function DisplayBox() {
  return (
    <div className="w-screen h-screen flex justify-center items-center font-bold bg-white text-gray-900 dark:bg-gray-900 dark:text-white dark:shadow-white/70">
      <ToggleButton />
      <p className="w-xl h-125 flex justify-center items-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero saepe
        cum a, exercitationem molestias, ratione placeat modi doloremque
        accusamus dolor at quam. Atque sed doloribus earum impedit iste, quod
        suscipit.
      </p>
    </div>
  );
}
