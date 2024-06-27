import PropTypes from 'prop-types';
import { useState } from "react";
import { useFetcher } from "react-router-dom";

export default function NewComment({ postId }) {
  const fetcher = useFetcher();
  const [isEditable, setIsEditable] = useState(false);

  function toggleEditable() {
    setIsEditable(!isEditable);
  }

  return (
    <div className="flex gap-x-4">
      <div className="w-12"></div>
      {!isEditable && 
        <button
        type="button"
        onClick={toggleEditable}
        className="relative flex-auto flex justify-center py-2 rounded-lg font-semibold leading-6 text-white bg-indigo-600 hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          + Add a comment
        </button>
      }

      {isEditable && 
        <fetcher.Form 
          method="post"
          action={`/posts/${postId}/comment`}
          onSubmit={toggleEditable}
          className="relative flex-auto"
        >
          <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
            <textarea
              rows={3}
              id="text"
              name="text"
              defaultValue={''}
              className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            >
            </textarea>
            <div className="py-2" aria-hidden="true">
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div></div>
            <div className="flex-shrink-0 flex space-x-2">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={toggleEditable}
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </fetcher.Form>
      }
    </div>
  )
}

NewComment.propTypes = {
  postId: PropTypes.string.isRequired
}
