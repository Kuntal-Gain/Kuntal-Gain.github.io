"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DownloadsPage = () => {
  const apkFiles = [
    {
      name: "Socialseed",
      version: "1.0.0",
      description: "Description of app 1",
      downloadUrl: "/apks/socialseed-v1.0.0.apk" 
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* <Navbar /> */}
      <div className="container mt-24 mx-auto px-12 py-4">
        <h1 className="text-4xl font-bold text-white mb-8">Downloads</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apkFiles.map((apk, index) => (
            <div key={index} className="bg-[#1F1F1F] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                {apk.name}
              </h2>
              <p className="text-[#ADB7BE] mb-2">Version: {apk.version}</p>
              <p className="text-[#ADB7BE] mb-4">{apk.description}</p>
              <a 
                href={apk.downloadUrl}
                className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                download
              >
                Download APK
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </main>
  );
};

export default DownloadsPage;