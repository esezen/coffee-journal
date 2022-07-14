import { CheckCircleIcon } from '@heroicons/react/outline';

const Entry = (props) => {
  const { entry } = props;

  return (
    <div className="flex justify-between items-center mx-4 my-2 px-3 py-2 border rounded bg-gray-200">
      <div>
        <p className="capitalize">{entry.type}</p>
        <div className="flex flex-row space-x-2 sm:space-x-0 sm:flex-col">
          <p>In: {entry.coffeeIn}</p>
          <p>Out: {entry.coffeeOut}</p>
          <p>Time: {entry.brewTime}</p>
        </div>
      </div>
      <CheckCircleIcon className="h-6 w-6 text-green-600" />
    </div>
  );
};

export default Entry;
