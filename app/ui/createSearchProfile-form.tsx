import Link from 'next/link';
import {
    UserCircleIcon,
  } from '@heroicons/react/24/outline';
import {FormButton} from './buttons';
import { createSearchProfile } from '@/app/lib/actions';

export default function Form(){
    return (
      <form action={createSearchProfile}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6 text-black">
          {/* Customer Name */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-black">
              What is the discipline of your Museum?
            </label>
            <div className="relative">
              <select
                id="museumCategory"
                name="museumCategory"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue="National History"
              >
                <option value="National History">National History</option>
                <option value="Art">Art</option>
                <option value="Science">Science</option>
                <option value="Other">Other</option>

              </select>
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
  
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <FormButton type="submit">Create Recommendations</FormButton>
        </div>
      </form>
    );
  }


