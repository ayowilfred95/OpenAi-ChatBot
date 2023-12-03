import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800  p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container text-white mx-auto flex justify-between items-center">
        <Link href="/">Home</Link>
        <div className="flex space-x-4">
          <Link href="/chatbot">Chatbot</Link>
          <Link href="/speech">Speech to Text</Link>
          <Link href="/SpeechToText"></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
