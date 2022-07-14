import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/outline';

const AddButton = () => (
  <div className="absolute bottom-0 right-0 pr-4 pb-4">
    <Link href="/add">
      <button className="btn btn-circle h-16 w-16" type="button">
        <PlusIcon className="h-8 w-8" />
      </button>
    </Link>
  </div>
);

export default AddButton;
