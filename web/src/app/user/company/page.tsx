import Image from "next/image";

export default function UserCompanyPage() {
  return (
    <div className="p-6 sm:p-10 min-h-screen bg-gray-100 dark:bg-[#0b0c10] text-gray-900 dark:text-gray-100">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Company Profile</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          View and edit your company information
        </p>
      </div>

      {/* BANNER */}
      <div className="bg-white dark:bg-[#1a1d24] p-6 rounded-2xl shadow mb-8">
        <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4">
          <Image
            src="https://i.pinimg.com/1200x/53/bb/a5/53bba57fcb64c79582f30c913c2eb7f4.jpg"
            alt="Company Banner"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <button className="text-sm px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700">
          Change Image
        </button>
      </div>

      {/* FORM */}
      <div className="bg-white dark:bg-[#1a1d24] p-6 rounded-2xl shadow">
        <form className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="space-y-4">
            <label className="block text-sm">
              Company Name
              <input
                type="text"
                defaultValue="Neo Creative Solutions Ltd."
                className="mt-1 w-full px-3 py-2 rounded-lg border dark:bg-[#0f1113]"
              />
            </label>

            <label className="block text-sm">
              Main Contact
              <input
                type="text"
                defaultValue="neo@creative.co"
                className="mt-1 w-full px-3 py-2 rounded-lg border dark:bg-[#0f1113]"
              />
            </label>

            <label className="block text-sm">
              Alt Contact
              <input
                type="text"
                defaultValue="info@neocreative.co"
                className="mt-1 w-full px-3 py-2 rounded-lg border dark:bg-[#0f1113]"
              />
            </label>

            <label className="block text-sm">
              Project Manager
              <input
                type="text"
                defaultValue="Stephanie Ike Okafor"
                className="mt-1 w-full px-3 py-2 rounded-lg border dark:bg-[#0f1113]"
              />
            </label>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <label className="block text-sm">
              Key Org Units
              <input
                type="number"
                defaultValue="10"
                className="mt-1 w-full px-3 py-2 rounded-lg border dark:bg-[#0f1113]"
              />
            </label>

            <label className="block text-sm">
              Sector
              <input
                type="text"
                defaultValue="Technology"
                className="mt-1 w-full px-3 py-2 rounded-lg border dark:bg-[#0f1113]"
              />
            </label>

            <label className="block text-sm">
              Product / Service
              <input
                type="text"
                defaultValue="SaaS Platform"
                className="mt-1 w-full px-3 py-2 rounded-lg border dark:bg-[#0f1113]"
              />
            </label>

            <label className="block text-sm">
              Annual Revenue
              <input
                type="number"
                defaultValue="24000"
                className="mt-1 w-full px-3 py-2 rounded-lg border dark:bg-[#0f1113]"
              />
            </label>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <label className="block text-sm">
              Operational Years
              <input
                type="number"
                defaultValue="3"
                className="mt-1 w-full px-3 py-2 rounded-lg border dark:bg-[#0f1113]"
              />
            </label>

            <label className="block text-sm">
              Total Users
              <input
                type="number"
                defaultValue="400"
                className="mt-1 w-full px-3 py-2 rounded-lg border dark:bg-[#0f1113]"
              />
            </label>

            <label className="block text-sm">
              Total Employees
              <input
                type="number"
                defaultValue="12"
                className="mt-1 w-full px-3 py-2 rounded-lg border dark:bg-[#0f1113]"
              />
            </label>

            <label className="block text-sm">
              Expectation
              <input
                type="text"
                defaultValue="To increase retention by 20%"
                className="mt-1 w-full px-3 py-2 rounded-lg border dark:bg-[#0f1113]"
              />
            </label>
          </div>

          {/* Mission */}
          <div className="lg:col-span-3 mt-4">
            <label className="block text-sm">
              Mission
              <textarea
                rows={4}
                defaultValue="Our mission is to support SMEs with affordable digital solutions to expand their business growth and operational efficiency."
                className="mt-1 w-full px-3 py-2 rounded-lg border dark:bg-[#0f1113]"
              />
            </label>
          </div>

          {/* Save Changes Button */}
          <div className="lg:col-span-3 flex justify-end mt-6">
            <button
              type="button"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
