"use client";
import {
  HeartIcon,
  ArrowRightIcon,
  ChatBubbleBottomCenterIcon,
  XMarkIcon
} from "@heroicons/react/24/solid";
import { AboutHeader } from "@/molecules";
import { Button } from "@/atoms";
import useZone from "@/shared/hooks/useZone";
import Image from "next/image";
import blur from "../../public/images/loading-blur.png";
export default function CardZone({ posts }) {
  const {
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
    tempNickname,
    setTempNickname,
    user,
    handleComment,
    saveNickname,
    selectedImage, setSelectedImage
  } = useZone({ posts });

  return (
    <>
      <AboutHeader
        baslik="Zeynep Zone"
        paragraf="Zeynep Baş’ın paylaşımlarını keşfedebileceğin ve etkileşime geçebileceğin dijital alan."
      />
      <div className="mx-auto max-4xl py-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {localPosts.length === 0 && (
          <p className="text-center text-gray-400 col-span-full">
            Gönderi bulunamadı
          </p>
        )}

        {localPosts.map((post) => {
          const isOpen = activeCard === post._id;
          const isExpanded = expandedPost === post._id;
          return (
            <div key={post._id} className="flex flex-col">
              <div
                className={`flex flex-col bg-white dark:bg-zinc-900 shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 ${
                  isOpen ? "rounded-b-none" : "rounded-xl"
                }`}
              >
                <div className="w-full bg-gray-100 dark:bg-zinc-800">
                  <div className="relative w-full h-64 sm:h-72 md:h-80">
                    <Image
                      src={post?.image}
                      alt={post.konum?.split("/")[0].trim()}
                      fill
                      unoptimized
                      priority
                      placeholder="blur"
                      blurDataURL={blur.blurDataURL}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      onClick={() => setSelectedImage(post?.image)}
                    />
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src="/images/avatar.png"
                      className="w-9 h-9 rounded-full object-cover"
                      alt="avatar"
                    />
                    <div className="w-full">
                      <div className="flex items-center justify-between w-full">
                        <p className="text-sm font-semibold text-black dark:text-gray-300">
                          {post.name}
                        </p>

                        <span className="text-xs text-gray-500 dark:text-gray-300 ml-auto">
                          {post.nickname}
                        </span>
                      </div>

                      <a
                        href={`https://www.google.com/maps?q=${encodeURIComponent(
                          post.konum
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 flex items-center gap-1 text-sm text-gray-400 hover:text-yellow-400 transition"
                      >
                        <span>📍</span>
                        <span>{post.konum || "Konumu gör"}</span>
                      </a>
                    </div>
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      isExpanded ? "" : "line-clamp-2"
                    } text-gray-700 dark:text-gray-300`}
                  >
                    {post.description}
                  </p>

                  <Button
            
                    onClick={() =>
                      setExpandedPost(isExpanded ? null : post._id)
                    }
                    text={isExpanded ? "Kapat" : "Devamını gör"}
                  />

                  <div className="border-t border-gray-200 dark:border-gray-800 pt-3 mt-4 flex items-center justify-between">
                    <div className="flex gap-5">

                      <button
    aria-label="Gönderimi beğenebilirsin"
                        onClick={() => handleLikeClick(post._id)}
                        className={`flex items-center gap-1  transition ${
                          post.likes?.includes(user.nickname)
                            ? "text-red-500"
                            : "text-gray-600  hover:text-red-400 "
                        }`}
                      >
                        <HeartIcon className="w-5 h-5" />
                        <span className="text-sm">
                          {post.likes?.length || 0}
                        </span>
                      </button>

                      <button
    aria-label="Yorumlara bakabilirsin"
                        onClick={() => setActiveCard(isOpen ? null : post._id)}
                        className="flex items-center gap-1 text-gray-600  hover:text-gray-400 transition"
                      >
                        <ChatBubbleBottomCenterIcon className="w-5 h-5" />
                        <span className="text-sm">
                          {post.comments?.length || 0}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {isOpen && (
                <div className="bg-white dark:bg-zinc-900 rounded-b-xl border border-gray-200 dark:border-gray-800 p-3">
                  <div className="space-y-2 mb-3 max-h-64 overflow-y-auto pr-1">
                    {post.comments?.length === 0 ? (
                      <p className="text-gray-500 text-xs italic">
                        Henüz yorum yok
                      </p>
                    ) : (
                      post.comments.map((c, i) => (
                        <div
                          key={i}
                          className="text-sm text-gray-700 dark:text-gray-300"
                        >
                          <span className="font-semibold mr-1">
                            {c.nickname}:
                          </span>
                          {c.text}
                        </div>
                      ))
                    )}
                  </div>

                  <div className="flex gap-2 border-t pt-2 border-gray-200 dark:border-gray-800">
                    <input
                      type="text"
                      value={commentInputs[post._id] || ""}
                      onChange={(e) =>
                        setCommentInputs((prev) => ({
                          ...prev,
                          [post._id]: e.target.value,
                        }))
                      }
                      placeholder="Yorum yap..."
                      className="flex-1 bg-gray-50 dark:bg-zinc-800 border-none rounded-full px-3 py-1 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                    <button
                      onClick={() => handleComment(post._id)}
    aria-label="Yorum yapabilirsin"
                      className="text-black dark:text-gray-300 hover:scale-110 transition"
                    >
                      <ArrowRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl w-80">
              <h2 className="text-lg font-semibold mb-3 text-black dark:text-gray-300">
                Nickname Gir
              </h2>

              <input
                type="text"
                placeholder="Nickname..."
                value={tempNickname}
                onChange={(e) => setTempNickname(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 mb-4 bg-white dark:bg-zinc-800 text-black dark:text-gray-300"
              />

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 text-sm text-gray-500"
                        aria-label="İptal edebilirsin"
                >
                  İptal
                </button>

                <button
                  onClick={() => {
                    if (!tempNickname) return;


                    saveNickname(tempNickname);
                    setShowModal(false);
                  }}
                    aria-label="kayıt edebilirsin"
                  className="px-4 py-1 bg-black  text-white dark:text-gray-300 dark:bg-white  rounded-lg text-sm"
                >
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 bottom-5 right-5 text-white dark:text-gray-300 hover:text-yellow-400 transition"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>

<div className="relative w-full max-w-5xl h-[80vh]">
  <img
    src={selectedImage}
    alt="Büyük görsel"
    width={1200}
    height={800}
    className="max-w-full h-auto rounded-xl object-contain"
  />
</div>
        </div>
      )}
    </>
  );
}
