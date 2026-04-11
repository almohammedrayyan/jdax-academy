import React, { useState } from "react";
import jobsData from "../../assets/db.json";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Career = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  // Configuration
  const brandColor = "#431aa0";
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbw3P4bb_h33liBHmRVc2FBKewYCMt79FFwyrZY0EGjsWt8N6pLUj16gBlxucVHUgT9j/exec";

  const openApplyModal = (job) => {
    setSelectedJob(job);
    setShowApplyModal(true);
  };

  const closeApplyModal = () => {
    if (isSubmitting) return; // Prevent closing while uploading
    setShowApplyModal(false);
    setSelectedJob(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const file = formData.get("resume");

    // Helper to convert file to Base64
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    try {
      const base64File = await toBase64(file);

      const payload = {
        name: formData.get("fullname"),
        email: formData.get("email"),
        mobile: formData.get("mobile"),
        jobTitle: selectedJob.title,
        fileName: `${formData.get("fullname")}_Resume.pdf`,
        resume: base64File,
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // 1. Show the success toast
      toast.success("Application sent successfully!");

      // 2. Clear UI states
      closeApplyModal();
      setFileName("");

      // 3. Wait 2 seconds before redirecting
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const [fileName, setFileName] = useState("");
  return (
    <>
      <ToastContainer />
      <div className="relative min-h-[70vh] bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Career Openings
          </h1>
          {jobsData.filter((j) => j.isActive).length === 0 ? (
            <p className="text-gray-600 text-center py-20">
              No active job openings at the moment. Please check back later.
            </p>
          ) : (
            <div className="space-y-6">
              {jobsData
                .filter((j) => j.isActive)
                .map((job) => (
                  <div
                    key={job.id}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h2
                        className="text-xl font-bold"
                        style={{ color: brandColor }}
                      >
                        {job.title}
                      </h2>
                      <span className="text-sm text-gray-400 font-mono">
                        {job.postedAt}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {expandedId === job.id
                        ? job.description
                        : `${job.description.substring(0, 120)}...`}
                    </p>

                    <div className="mt-5 flex items-center gap-4">
                      <button
                        onClick={() =>
                          setExpandedId(expandedId === job.id ? null : job.id)
                        }
                        className="text-gray-500 font-medium hover:text-gray-800"
                      >
                        {expandedId === job.id ? "Show Less" : "Read More"}
                      </button>

                      <button
                        onClick={() => openApplyModal(job)}
                        className="ml-auto text-white px-8 py-2 rounded-full font-semibold shadow-md active:scale-95 transition-all"
                        style={{ backgroundColor: brandColor }}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* --- Apply Popup Modal --- */}
        {showApplyModal && (
          <div
            className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            onClick={closeApplyModal}
          >
            <div
              className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="p-6 text-white relative"
                style={{ backgroundColor: brandColor }}
              >
                {!isSubmitting && (
                  <button
                    onClick={closeApplyModal}
                    className="absolute top-4 right-5 text-white/80 hover:text-white text-3xl font-light"
                  >
                    &times;
                  </button>
                )}
                <h3 className="text-2xl font-bold">Join Our Team</h3>
                <p className="text-white/80 text-sm mt-1">
                  Role: {selectedJob?.title}
                </p>
              </div>

              <form className="p-8 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1 ml-1">
                    Full Name
                  </label>
                  <input
                    name="fullname"
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 outline-none"
                    style={{ "--tw-ring-color": brandColor }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1 ml-1">
                      Email ID
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="email@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 outline-none"
                      style={{ "--tw-ring-color": brandColor }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1 ml-1">
                      Mobile
                    </label>
                    <input
                      name="mobile"
                      required
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 outline-none"
                      style={{ "--tw-ring-color": brandColor }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2 ml-1">
                    Resume (PDF)
                  </label>
                  <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <input
                      name="resume"
                      required
                      type="file"
                      accept=".pdf"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => {
                        if (e.target.files.length > 0) {
                          setFileName(e.target.files[0].name);
                        }
                      }}
                    />

                    <div className="flex flex-col items-center justify-center space-y-2">
                      {/* Icon */}
                      <svg
                        className={`w-8 h-8 ${fileName ? "text-green-500" : "text-gray-400"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>

                      {/* Conditional Text */}
                      <span
                        className={`text-sm font-medium ${fileName ? "text-gray-800" : "text-gray-400"}`}
                      >
                        {fileName
                          ? `Selected: ${fileName}`
                          : "Click to upload your Resume"}
                      </span>

                      {fileName && (
                        <span className="text-xs text-blue-500 underline">
                          Change file
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: brandColor }}
                >
                  {isSubmitting ? "Uploading..." : "Send Application"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Career;
