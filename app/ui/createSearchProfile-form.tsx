import Link from 'next/link';
import {
    ScaleIcon,
    PhotoIcon,
    UsersIcon,
    DevicePhoneMobileIcon,
    PaperAirplaneIcon,
    ArrowPathIcon
  } from '@heroicons/react/24/outline';
import {FormButton} from './buttons';
import { createSearchProfile } from '@/app/lib/actions';

export default function Form(){
    return (
      <form action={createSearchProfile}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6 text-black">
          {/*  Discipline */}
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
                <option value="NationalHistory">National History</option>
                <option value="Art">Art</option>
                <option value="Science">Science</option>
                <option value="Other">Other</option> 

              </select>
              <ScaleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        
        {/* MEDIUM */}
        <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-black">
              What is the type of media you would like to work with?
            </label>
            <div className="relative">
              <select
                id="medium"
                name="medium"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue="1"
              >
                <option value="1">Imagery</option>
                <option value="2">Videos</option>
                <option value="3">3D Objects</option>
                <option value="4">Maps or Layout plans</option>
                <option value="5">Other</option>

              </select>
              <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>

        {/* Target Audience */}
        <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-black">
              What is the target audience of your Museum?
            </label>
            <div className="relative">
              <select
                id="targetAudience"
                name="targetAudience"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue="Families"
              >
                <option value="Families">Families</option>
                <option value="School Classes">School Classes</option>
                <option value="Seniors">Seniors</option>
                <option value="International Visitors">International Visitors</option>
                <option value="Local Tourists">Local Tourists</option>
              </select>
              <UsersIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>

            {/* Platform */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-black">
              Which platform are you interested in most?
            </label>
            <div className="relative">
              <select
                id="platform"
                name="platform"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue="1"
              >
                <option value="1">Web</option>
                <option value="2">Mobile Apps</option>
                {/* <option value="3">Game Engines</option> */}
                <option value="3">3D platforms</option>
                <option value="4">Database</option>
                <option value="5">Augmented Reality</option>
                {/* <option value="6">Spatial Computing</option> */}
                <option value="7">Other</option>

              </select>
              <DevicePhoneMobileIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>

            {/* Customer Journey */}
            <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-black">
              Which part of the customer journey would you like to improve?
            </label>
            <div className="relative">
              <select
                id="customerJourney"
                name="customerJourney"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue="1"
              >
                <option value="1">Exhibition planning</option>
                <option value="2">Pre visit</option>
                <option value="3">On-site</option>
                <option value="4">Post-visit</option>
                <option value="5">Remote Experience</option>
              </select>
              <PaperAirplaneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Exhibition Turnover */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-black">
              How frequently do you change exhibitions?
            </label>
            <div className="relative">
              <select
                id="frequencyExhibitions"
                name="frequencyExhibitions"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue="1"
              >
                <option value="1">Very frequently</option>
                <option value="2">Once a quarter</option>
                <option value="3">Once a year</option>
                <option value="4">No changing exhibitions</option>
              </select>
              <ArrowPathIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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


