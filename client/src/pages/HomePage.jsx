import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold">
          Welcome to NextCart
        </h1>

        <p className="text-gray-600 mt-4">
          Your one-stop shop for electronics, fashion, and more.
        </p>
      </div>
    </>
  );
};

export default HomePage;