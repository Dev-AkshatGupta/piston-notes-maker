import React from "react";
// pins for the pinned funciotionely
import { AiOutlinePushpin, AiFillPushpin } from "react-icons/ai";
import { FiInbox } from "react-icons/fi";
import { BsPalette } from "react-icons/bs";
import { ImBin } from "react-icons/im";
const Note = ({ title, content }) => {
  return (
    <div className="flex w-full items-center flex justify-center items-center py-12 px-6">
      <div>
        <div className=" h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
          <div>
            <h4 className="focus:outline-none text-gray-800 dark:text-gray-100 font-bold mb-3">
              13 things to work on
            </h4>
            <p className="focus:outline-none text-gray-800 dark:text-gray-100 text-sm">
              Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt,
              neque porro quisquam est, quid malum, sensu iudicari, sed ut
              alterum.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800 justify-between">
              <p className="focus:outline-none text-sm dark:text-gray-100">
                March 28, 2020
              </p>
              <div className="flex justify-evenly w-3/5">
                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                  <button>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/single_card_with_title_and_description-svg1.svg"
                      alt="icon"
                    />
                  </button>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                  <button>
                    <AiOutlinePushpin />
                  </button>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                  <button>
                    <ImBin />
                  </button>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                  <button>
                    <BsPalette />
                  </button>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                  <button>
                    <FiInbox />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Note };
