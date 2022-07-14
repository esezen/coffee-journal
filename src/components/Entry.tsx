import { CheckCircleIcon, XCircleIcon, MinusCircleIcon } from '@heroicons/react/outline';

const Entry = (props: any) => {
  const { entry } = props;

  const renderResultIcon = (result: string) => {
    if (result === 'Good') return <CheckCircleIcon className="h-8 w-8 text-green-600" />;
    if (result === 'Meh') return <MinusCircleIcon className="h-8 w-8 text-gray-600" />;
    if (result === 'Bad') return <XCircleIcon className="h-8 w-8 text-red-600" />;
    return '';
  };

  return (
    <div className="flex justify-between items-center mx-4 my-2 px-3 py-2 border border-base-300 rounded bg-base-200">
      <div>
        <p className="capitalize">{entry.type}</p>
        <div className="flex flex-row space-x-2 sm:space-x-0 sm:flex-col">
          <p>In: {entry.coffeeIn}</p>
          <p>Out: {entry.coffeeOut}</p>
          <p>Time: {entry.brewTime}</p>
        </div>
      </div>
      { renderResultIcon(entry.result) }
    </div>
  );
};

export default Entry;
