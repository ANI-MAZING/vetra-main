"use client";
import { useState } from "react";
import Image from "next/image";

export default function Dashboard() {
  const [address, setAddress] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [output, setOutput] = useState<string>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!address || !image) {
      alert("Please fill all fields before submitting");
      return;
    }

    setLoading(true);
    setOutput("");

    setTimeout(() => {
      setLoading(false);
      setOutput("You should harvest wheat crop.");
    },40000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <label className="block text-sm font-medium">Address</label>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border rounded-md mb-3"
        />
        <label className="block text-sm font-medium">Upload Image</label>
        <input type="file" onChange={handleImageChange} className="w-full p-2 border rounded-md mb-3" />
        {imagePreview && (
          <div className="mb-3 flex justify-center">
            <Image src={imagePreview} alt="Preview" width={200} height={200} className="rounded-md" />
          </div>
        )}
        <button onClick={handleSubmit} className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
        {loading && <p className="text-center text-gray-600 mt-3">Processing...</p>}
        {output && <p className="text-center text-green-600 mt-3 font-medium">{output}</p>}
      </div>
    </div>
  );
}
