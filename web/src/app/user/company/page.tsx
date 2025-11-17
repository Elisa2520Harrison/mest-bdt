export default function UserCompany() {
  return (
      <div className="p-6 sm:p-10 min-h-screen bg-gray-100 dark:bg-[#0b0c10] text-gray-100 transition-colors duration-300">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Company Profile</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">View and esdit company information</p>
          </div>
        </div>

      </div>
  );
}
