"use client"
import { useEffect, useState } from "react";
import { postService } from "../services/postServices";

export default function useZone({posts}){
    const [activeCard, setActiveCard] = useState(null);
    const [expandedPost, setExpandedPost] = useState(null);
    const [commentInputs, setCommentInputs] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [localPosts, setLocalPosts] = useState(posts || []);
    const [user, setUser] = useState({ nickname: "" });
    const [showModal, setShowModal] = useState(false);
    const [tempNickname, setTempNickname] = useState("");
  
    useEffect(() => {
      setLocalPosts(posts);
    }, [posts]);
  
    useEffect(() => {
      const saved = localStorage.getItem("nickname");
      if (saved) {
        setUser({ nickname: saved });
      }
    }, []);
  
    const saveNickname = (name) => {
      localStorage.setItem("nickname", name);
      setUser({ nickname: name });
    };
  
    const handleLikeClick = (postId) => {
      if (!user.nickname) {
        setShowModal(true);
        return;
      }
      handleLike(postId);
    };
  
    const handleLike = async (postId) => {
      try {
        const data = await postService.postLike({
          postId,
          nickname: user.nickname,
        });
    
        setLocalPosts((prev) =>
          prev.map((p) =>
            p._id === postId
              ? { ...p, likes: data.likesArray || data.likes }
              : p
          )
        );
      } catch (err) {
        console.error(err);
      }
    };
  
    const handleComment = async (postId) => {
      if (!user.nickname) {
        setShowModal(true);
        return;
      }
    
      const text = commentInputs[postId];
      if (!text || !text.trim()) return;
    
      try {
        const newComment = { text, nickname: user.nickname };
    

        setLocalPosts((prev) =>
          prev.map((p) =>
            p._id === postId
              ? { ...p, comments: [...(p.comments || []), newComment] }
              : p
          )
        );
    
        setCommentInputs((prev) => ({ ...prev, [postId]: "" }));
    
        const data = await postService.postComment({
          postId,
          nickname: user.nickname,
          text,
        });
    
        
        setLocalPosts((prev) =>
          prev.map((p) =>
            p._id === postId ? { ...p, comments: data } : p
          )
        );
      } catch (err) {
        console.error(err);
      }
    };
    return {
        localPosts,
        activeCard,
        expandedPost,
        setExpandedPost,
        handleLikeClick,
        setActiveCard,
        showModal,
        setShowModal,
        commentInputs,
        setCommentInputs,
        tempNickname, setTempNickname,
        user,
        handleComment,
        saveNickname,
        selectedImage, 
        setSelectedImage
    }
}