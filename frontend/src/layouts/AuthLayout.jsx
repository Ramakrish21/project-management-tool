const AuthLayout = ({ children }) => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">{children}</div>
      </div>
    );
  };
  export default AuthLayout;
