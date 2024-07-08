import { Form, NavLink, useActionData, useNavigation } from "react-router-dom";

const Login = () => {
  const errors = useActionData();
  const navigation = useNavigation();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form method="post" className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input 
                id="username"
                name="username"
                type="text" 
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors?.username && <span className="text-sm text-red-500">{errors.username.msg}</span>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input 
                id="password" 
                name="password" 
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors?.password && <span className="text-sm text-red-500">{errors.password.msg}</span>}
            </div>
          </div>

          <div>
            <button 
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </Form>

        <p className="mt-6 text-center text-md text-gray-500">
          Not a member?{' '}
          <NavLink to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Register
          </NavLink>
        </p>
        <Form 
          method="post" 
          action="/login/guest"
          className="text-center text-md text-gray-500"
        >
          Or{' '}
          <button className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            sign in as guest
          </button>
        </Form>
        {navigation.state !== "idle" && 
          <div className="mt-3 text-center font-semibold text-md text-gray-700">
            Loading...
          </div>
        }
      </div>
    </div>
  );
};

export default Login;