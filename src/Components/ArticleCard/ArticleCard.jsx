import bucketService from "../../appwrite/bucketService";
import { useNavigate } from "react-router-dom";
import { ArrowBigRightDash } from "lucide-react";
function ArticleCard({ blogTitle, blogFeaturedimage }) {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col  shadow-lg rounded-md overflow-hidden border-2 border-white/5 gap-1 p-1">
      <div className="w-full">
        <img className="w-full rounded-md object-fill " src={bucketService.getBlogFeaturedimage(blogFeaturedimage)} alt={blogTitle} />
      </div>
      <div className="flex justify-between">
      <p className="font-robotoRegular text-xs p-2 ">{blogTitle.slice(0,16)}...</p>
      <button>< ArrowBigRightDash /></button>
      </div>
    </div>
  )
}

export default ArticleCard;