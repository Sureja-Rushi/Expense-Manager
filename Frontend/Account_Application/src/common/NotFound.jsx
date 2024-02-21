import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    }

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center my-8">
          <div className="w-full leading-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold">Oops!</h1>
              <h2 className="text-2xl font-bold">404 Not Found</h2>
              <div className="text-red-500 text-2xl">
                Sorry, an error has occurred, Requested page not found!
              </div>
              <div className="mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={back}
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
