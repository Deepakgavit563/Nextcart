import MainLayout from "../components/layout/MainLayout";

const NotFoundPage = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-red-500">
          404 - Page Not Found
        </h1>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;