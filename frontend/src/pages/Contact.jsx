import React from "react";

function Contact() {
  return (
    <div className="bg-darkColor flex justify-center text-middleOrange py-20 lg:py-[120px] overflow-hidden relative z-10 font-Raleway">
      <div className="md:container  px-2  pt-5 md:text-left text-center">
        <div className="flex flex-wrap lg:justify-center sm:justify-center md:justify-center -mx-4">
          <div className="lg:w-1/2 xl:w-6/12 px-4 md:w-2/3 md:pl-1 leading-6 tracking-wide pb-10">
            <div className="max-w-[570px] mb-0 md:text-center lg:mb-0 lg:text-center">
              <h1 className="text-middleOrange w-full font-Raleway pb-2 text-3xl font-bold">
                Contact Me
              </h1>

              <span className="text-white font-extralight text-xl md:text-center md:w-2/3 md:pl-1 leading-6 tracking-wide lg:text-center">
                You have a project in mind, questions ?
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-5/12 px-10">
            <div className="bg-gray/30 relative rounded-lg p-8 sm:p-12 shadow-lg">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your firstname"
                    className="
                        w-full
                        bg-gray/50
                        rounded-lg
                        py-3
                        px-[14px]
                        text-purple text-base
                       font-bold
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your lastname"
                    className="
                        w-full
                        rounded-lg
                        bg-gray/50
                        py-3
                        px-[14px]
                        text-purple text-base
                        font-bold
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="The subject"
                    className="
                        w-full
                        bg-gray/50
                        rounded-lg
                        py-3
                        
                        px-[14px]
                        text-purple text-base
                        font-bold
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows="6"
                    placeholder="Your Message"
                    className="
                        w-full
                        bg-gray/50
                        rounded
                        py-3
                        px-[14px]
                        text-purple text-base
                        font-bold
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-block w-full px-6 py-2.5 bg-blue-600 text-white text-lg leading-tight uppercase rounded-full shadow-md bg-magenta hover:bg-magenta/70 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-magenta active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div>
                <span className="absolute -top-10 -right-9 z-[-1]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
