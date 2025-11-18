import Image from "next/image";

export default function UserCompany() {
  return (
    <div className="p-6 sm:p-10 min-h-screen bg-gray-100 dark:bg-[#0b0c10] text-gray-100 transition-colors duration-300">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Company Profile
          </h1>

          <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
            View and edit company information
          </p>
        </div>
       
      </div>

      {/* Company Banner */}
      <div className="bg-white dark:bg-[#1a1d24] p-4 rounded-2xl shadow flex flex-col items-center">
        <div className="w-full h-40 sm:h-48 relative rounded-lg overflow-hidden mb-3 bg-gray-50 dark:bg-[#0f1113]">
          <Image  
          src="https://i.pinimg.com/1200x/53/bb/a5/53bba57fcb64c79582f30c913c2eb7f4.jpg"
          alt="Company logo/banner"
           fill 
           style={{objectFit: "cover"}}
           className="rounded-lg"
          />
        </div>
        
      </div>

      {/* Summary section */}
      <div className="lg:col-span-2 bg-white dark:bg-[#1a1d24] p-6 rounded-2xl shadow mt-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Neo Creative Solutions Ltd.</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-4">Sector: Technology • Product: Saas Platform </p>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">Mission: To make digital tools accessible and affordable for SMEs while improving productivity and revenue growth. </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-medium text-gray-800 dark:text-gray-200">Main Contact</p>
            <p className="text-gray-600 dark:text-gray-400">neo@creative.co</p>
          </div>
          <div>
            <p className="font-medium text-gray-800 dark:text-gray-200">Project Manager</p>
            <p className="text-gray-600 dark:text-gray-400">Stephanie Ike</p>
          </div>
          <div> 
            <p className="font-medium text-gray-800 dark:text-gray-200">Key Org Units</p>
            <p className="text-gray-600 dark:text-gray-400">10</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}
