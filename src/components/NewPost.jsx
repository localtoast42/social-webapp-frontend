import { Form } from "react-router-dom";

export default function NewPost() {

  return (
    <div className="min-w-0 flex-1">
      <Form className="relative">
        <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <textarea
            rows={3}
            id="text"
            name="text"
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
          <div className="flex-shrink-0">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
      </Form>
    </div>
  )
}
