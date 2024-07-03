const page = () => {
  const usersData = [
    { id: "1", name: "John Doe", email: "john.doe@example.com", role: "Admin" },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "User",
    },
    
  ];
  return (
    <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {usersData.map((user) => (
        <div
          key={user.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="p-4">
            <h2 className="text-lg font-bold">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.role}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
