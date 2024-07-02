import defaultAvatar from '../assets/defaultAvatar.svg';
import { useState } from "react";
import { useLoaderData, useFetcher } from "react-router-dom";

function UserSettings() {
  const { user } = useLoaderData();
  const fetcher = useFetcher();
  const errors = fetcher.data;
  const [isEditable, setIsEditable] = useState(errors);

  const avatarUrl = user.imageUrl ? user.imageUrl : defaultAvatar;

  function toggleEditable() {
    setIsEditable(!isEditable);
  }

  function deleteHandler(e) {
    if (
      !confirm("Are you sure you want to delete your profile? This can't be undone.")
    ) {
      e.preventDefault();
    }
  }

  return (
    <div className="flex justify-center">
      <div className="grow max-w-xl divide-y divide-gray-300 border border-gray-300">
        <main className="py-6">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <fetcher.Form 
              method="post" 
              action={`/users/${user.id}/update`}
              onSubmit={toggleEditable}
              className="space-y-6"
            >
              <div className="space-y-6">
                <div className="border-b border-gray-900/10 pb-6">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>

                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                        Username
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            type="text"
                            name="username"
                            id="username"
                            defaultValue={user.username}
                            disabled={!isEditable}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                          />
                          {errors?.username && <span className="text-sm text-red-500">{errors.username.msg}</span>}
                        </div>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <span className="block text-sm font-medium leading-6 text-gray-900">
                        Photo
                      </span>
                      <div className="mt-2 flex items-center gap-x-3">
                        <img className="object-cover h-12 w-12 rounded-full bg-gray-100" src={avatarUrl} alt="" />
                        {isEditable &&
                          <button
                            type="button"
                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            Change
                          </button>
                        }
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-900/10 pb-6">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          defaultValue={user.firstName}
                          disabled={!isEditable}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
                        />
                        {errors?.firstName && <span className="text-sm text-red-500">{errors.firstName.msg}</span>}
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          defaultValue={user.lastName}
                          disabled={!isEditable}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
                        />
                        {errors?.lastName && <span className="text-sm text-red-500">{errors.lastName.msg}</span>}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          defaultValue={user.city}
                          disabled={!isEditable}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
                        />
                        {errors?.city && <span className="text-sm text-red-500">{errors.city.msg}</span>}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="state"
                          id="state"
                          defaultValue={user.state}
                          disabled={!isEditable}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
                        />
                        {errors?.state && <span className="text-sm text-red-500">{errors.state.msg}</span>}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          id="country"
                          name="country"
                          defaultValue={user.country}
                          disabled={!isEditable}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-900 disabled:ring-gray-300"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {!isEditable &&
                <div className="mt-6 flex items-center justify-between gap-x-6">
                  <button
                    type="submit"
                    onClick={deleteHandler}
                    formAction={`/users/${user.id}/delete`}
                    className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm border hover:bg-red-600"
                  >
                    Delete Profile
                  </button>
                  <button
                    type="button"
                    onClick={toggleEditable}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm border hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Edit
                  </button>
                </div>
              }

              {isEditable &&
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button 
                    type="button" 
                    onClick={toggleEditable}
                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm border hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm border hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              }
            </fetcher.Form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default UserSettings