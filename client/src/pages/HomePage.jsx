import MainLayout from "../components/layout/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold">
          Welcome to NextCart 🚀
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Shop smarter with thousands of products delivered to your doorstep.
        </p>
      </section>
    </MainLayout>
  );
};

export default HomePage;