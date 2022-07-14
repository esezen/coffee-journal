import { CheckCircleIcon, XCircleIcon, MinusCircleIcon } from '@heroicons/react/outline';
import { entry as entryType } from '../sharedTypes';

const Entry = (props: { entry: any }) => {
  const { entry } = props;
  const entryParsed = entryType.parse(entry);

  const renderResultIcon = (result: string) => {
    if (result === 'Good') return <CheckCircleIcon className="h-8 w-8 text-green-600" />;
    if (result === 'Meh') return <MinusCircleIcon className="h-8 w-8 text-gray-600" />;
    if (result === 'Bad') return <XCircleIcon className="h-8 w-8 text-red-600" />;
    return '';
  };

  return (
    <div className="flex justify-between items-center mx-4 my-2 px-3 py-2 border border-base-300 rounded bg-base-200">
      <div>
        <p className="capitalize">{entryParsed.coffeeName} - {entryParsed.brewMethod}</p>
        <div className="flex flex-row space-x-2 sm:space-x-0 sm:flex-col">
          <p>In: {entryParsed.coffeeIn}</p>
          <p>Out: {entryParsed.coffeeOut}</p>
          <p>Time: {entryParsed.brewTime}</p>
        </div>
      </div>
      { renderResultIcon(entryParsed.result) }
    </div>
  );
};

export default Entry;
