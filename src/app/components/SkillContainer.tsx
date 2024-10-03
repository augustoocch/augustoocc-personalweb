export default function SkillContainer({
    image,
    title,
    description,
    image2,
    title2,
    description2,
  }: {
    image: string;
    title: string;
    description: string;
    image2: string;
    title2: string;
    description2: string;
  }) {
    return (
      <div className="flex flex-col md:flex-row items-center md:w-8/12 m-auto justify-between space-y-5 md:space-y-0 md:space-x-5 p-4">
        <div className="bg-white dark:bg-gray-800 dark:text-gray-300 p-4 rounded-lg shadow-md flex-1 flex flex-col items-center text-center h-64">
          <img src={image} alt={title} className="max-h-32 mb-4" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
  
        <div className="bg-white dark:bg-gray-800 dark:text-gray-300 p-4 rounded-lg shadow-md flex-1 flex flex-col items-center text-center h-64">
          <img src={image2} alt={title2} className="max-h-32 mb-4" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">{title2}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description2}</p>
        </div>
      </div>
    )
  }
  