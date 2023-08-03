function Contact() {
  return (
    <form className="max-w-[600px] m-auto">
      <div>
        <label>Name:</label>
        <input
          title="name"
          type="text"
          className="border-2 rounded-md text w-full mb-4 h-10 indent-1"
        />
      </div>
      <div>
        <label>Subject:</label>
        <input
          title="subject"
          type="text"
          className="border-2 rounded-md text w-full mb-4 h-10 indent-1"
        />
      </div>
      <div>
        <label>Message:</label>
        {/* TODO: Make this a text box */}
        <textarea
          title="subject"
          className="border-2 rounded-md text w-full mb-4 h-40 leading-none p-1"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}

export default Contact;
