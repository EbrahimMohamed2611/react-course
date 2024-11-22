import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const LikeButton = () => {
  const [status, setStatus] = useState(false);

  return status ? (
    <FaHeart onClick={() => setStatus(!status)} color="#f04d4d" size={40} />
  ) : (
    <FaRegHeart onClick={() => setStatus(!status)} size={40} />
  );
};

export default LikeButton;
