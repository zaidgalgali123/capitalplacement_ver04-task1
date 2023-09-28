/* import { BsUpload } from "react-icons/bs";

const UploadImage = () => {
  return (
    <div className="rounded-xl w-max shadow-md ml-4 mt-4 h-max">
      <div className="bg-[#D0F7FA]  px-3 py-2  font-semibold rounded-tr-xl rounded-tl-xl">
        Upload cover Image
      </div>
      <div className=" py-6 rounded-br-xl mx-10 rounded-bl-xl">
        <label htmlFor="imageUpload">
          <div className=" p-3 mx-auto  cursor-pointer border-dotted border-2 rounded-xl border-gray-400/60">
            <BsUpload className="block my-3 text-2xl text-gray-400/60 mx-auto" />
            <p className="text-center my-3 mx-auto">Upload Cover Image</p>
            <p className="my-3">
              16:9 ratio is recommended. Max image size 1mb
            </p>
            <input type="file" id="imageUpload" className="hidden" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default UploadImage; */
/* import React, { useState } from "react";
import { BsUpload } from "react-icons/bs";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileDelete = () => {
    setSelectedFile(null);
  };

  return (
    <div className="rounded-xl w-max shadow-md ml-4 mt-4 h-max">
      <div className="bg-[#D0F7FA] px-3 py-2 font-semibold rounded-tr-xl rounded-tl-xl">
        Upload cover Image
      </div>
      <div className="py-6 rounded-br-xl mx-10 rounded-bl-xl">
        <label htmlFor="imageUpload">
          {!selectedFile ? (
            <div className="p-3 mx-auto cursor-pointer border-dotted border-2 rounded-xl border-gray-400/60">
              <BsUpload className="block my-3 text-2xl text-gray-400/60 mx-auto" />
              <p className="text-center my-3 mx-auto">Upload Cover Image</p>
              <p className="my-3">
                16:9 ratio is recommended. Max image size 1mb
              </p>
              <input
                type="file"
                id="imageUpload"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          ) : (
            <div className="file-display">
              <p>Selected File: {selectedFile.name}</p>
              <button className="delete-button" onClick={handleFileDelete}>
                Delete
              </button>
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default UploadImage;
 */
import React, { useState } from "react";
import { BsUpload } from "react-icons/bs";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileDelete = (e) => {
    e.preventDefault();
    setSelectedFile(null);
  };

  return (
    <div className="rounded-xl w-max shadow-md ml-4 mt-4 h-max">
      <div className="bg-[#D0F7FA] px-3 py-2 font-semibold rounded-tr-xl rounded-tl-xl">
        Upload cover Image
      </div>
      <div className="py-6 rounded-br-xl mx-10 rounded-bl-xl">
        <label htmlFor="imageUpload">
          {!selectedFile ? (
            <div className="p-3 mx-auto cursor-pointer border-dotted border-2 rounded-xl border-gray-400/60">
              <BsUpload className="block my-3 text-2xl text-gray-400/60 mx-auto" />
              <p className="text-center my-3 mx-auto">Upload Cover Image</p>
              <p className="my-3">
                16:9 ratio is recommended. Max image size 1mb
              </p>
              <input
                type="file"
                id="imageUpload"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          ) : (
            <div className="file-display relative pb-4">
              <p className="file-name">Selected File: {selectedFile.name}</p>

              <button
                className="delete-button absolute left-0 right-0 top-7 h-max mx-auto w-max"
                onClick={handleFileDelete}
              >
                Delete
              </button>
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default UploadImage;
