import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fa26c47e-297d-49de-9c9f-8eb2ffd58b0e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <form onSubmit={onSubmit}>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Connect with me
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Please leave a short message and your contact details if you
                would like to have a chat with me in person.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 text-gray-700 py-1 px-3 leading-8 text-base outline-none"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 text-gray-700 py-1 px-3 leading-8 text-base outline-none"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full flex flex-col items-center gap-6">
                  <button className="flex mx-auto bg-[#242424] text-white border-0 py-2 px-8 rounded text-lg">
                    Send Message
                  </button>
                  <span>{result}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Contact;
