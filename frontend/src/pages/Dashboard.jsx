function Dashboard() {

  const handleLogout = () => {

    localStorage.removeItem("token");

    window.location.href = "/";

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center w-[400px]">

        <h1 className="text-5xl font-bold mb-4 text-purple-700">
          Dashboard 🚀
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Protected Route Successful ✅
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition duration-300"
        >
          Logout
        </button>

      </div>

    </div>

  );

}

export default Dashboard;