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
      <div className="mx-auto
    max-w-4xl
    py-4
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-6
    items-start">
        {localPosts.length === 0 && (
          <p className="text-center text-gray-400 col-span-full">
            Gönderi bulunamadı
          </p>
        )}

        {localPosts.map((post) => {
  const isOpen = activeCard === post._id;
  const isExpanded = expandedPost === post._id;

  return (
 

 
           <div
          key={post._id}
          className="group 
    bg-gray-50
    dark:bg-transparent
    rounded-2xl border border-gray-200/70
    p-1 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 dark:from-zinc-900 dark:to-zinc-950">
  <div className={`overflow-hidden rounded-[14px] border border-gray-200 bg-white dark:border-gray-800 dark:bg-zinc-900        ${
              isOpen
                ? "rounded-b-none"
                : ""
            }
          `}>


     
        <div className="relative h-64 w-full overflow-hidden bg-gray-100 dark:bg-zinc-800 sm:h-72 md:h-80">
          <Image
            src={post?.image}
            alt={post.konum?.split("/")[0]?.trim()}
            fill
            unoptimized
            priority
            placeholder="blur"
            blurDataURL={blur.blurDataURL}
            sizes="(max-width:768px)100vw,50vw"
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
            onClick={() => setSelectedImage(post?.image)}
          />

          <div className="
            absolute inset-0
            bg-gradient-to-t
            from-black/20
            via-transparent
            opacity-0
            transition
            group-hover:opacity-100
          " />
        </div>


   
        <div className="flex flex-1 flex-col p-5">


      
          <div className="mb-4 flex items-center gap-3">

            <Image
              src="/images/avatar.png"
              alt="Avatar"
              width={40}
              height={40}
              className="
                rounded-full
                object-cover
                ring-2
                ring-white
                dark:ring-zinc-800
              "
            />


            <div className="w-full">

              <div className="flex items-center justify-between">

                <p className="
                  text-sm
                  font-semibold
                  text-gray-900
                  dark:text-gray-100
                ">
                  {post.name}
                </p>


                <span className="
                  text-xs
                  text-gray-500
                  dark:text-gray-400
                ">
                  {post.nickname}
                </span>

              </div>


              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(
                  post.konum
                )}`}
                target="_blank"
                rel="noopener noreferrer"
          className="
                    mt-1
                    flex
                    items-center
                    gap-1
                    text-sm
                    text-gray-400
                    transition
                    hover:text-yellow-500
                  "
              >
                <span>📍</span>
                <span>
                  {post.konum || "Konumu gör"}
                </span>
              </a>

            </div>

          </div>
            <p
              className={`
                text-sm
                leading-7
                text-gray-700
                dark:text-gray-300
                ${
                  isExpanded
                    ? ""
                    : "line-clamp-2"
                }
              `}
            >
              {post.description}
            </p>




            <Button
              onClick={() =>
                setExpandedPost(
                  isExpanded
                    ? null
                    : post._id
                )
              }
              text={
                isExpanded
                  ? "Kapat"
                  : "Devamını gör"
              }
              className="
                mt-3
                hover:text-yellow-500
              "
            />


  
          <div className="
            mt-5
            flex
            items-center
            justify-between
            border-t
            border-gray-200
            pt-4
            dark:border-gray-800
          ">




              <div className="flex gap-5">


                <button
                  onClick={() =>
                    handleLikeClick(post._id)
                  }
                  className={`
                    flex
                    items-center
                    gap-1
                    transition
                    ${
                      post.likes?.includes(
                        user.nickname
                      )
                        ? "text-red-500"
                        : "text-gray-500 hover:text-red-500"
                    }
                  `}
                >


                <HeartIcon
                  className="
                    h-5
                    w-5
                    transition
                    group-hover:scale-110
                  "
                />

                <span className="text-sm">
                  {post.likes?.length || 0}
                </span>

              </button>




              <button
                aria-label="Yorumlar"
                onClick={() =>
                  setActiveCard(
                    isOpen
                    ? null
                    : post._id
                  )
                }
                className="
                  group
                  flex
                  items-center
                  gap-1
                  text-gray-500
                  transition
                  hover:text-gray-500
                  dark:text-gray-400
                "
              >

                <ChatBubbleBottomCenterIcon
                  className="
                    h-5
                    w-5
                    transition
                    group-hover:scale-110
                  "
                />

                <span className="text-sm">
                  {post.comments?.length || 0}
                </span>

              </button>


            </div>


          </div>


        </div>

      </div>



   

       {isOpen && (
          <div
            className="
              rounded-b-[27px]
              border
              border-t-0
              border-gray-200
              bg-white
              p-4
              dark:border-zinc-800
              dark:bg-zinc-900
            "
          >

          <div
            className="
              mb-4
              max-h-64
              space-y-3
              overflow-y-auto
            "
          >

            {post.comments?.length === 0 ? (

              <p className="
                text-xs
                italic
                text-gray-500
              ">
                Henüz yorum yok
              </p>

            ) : (

              post.comments.map((c,i)=>(

                <div
                  key={i}
                  className="
                    rounded-xl
                    bg-gray-50
                    px-3
                    py-2
                    text-sm
                    text-gray-700
                    dark:bg-zinc-800
                    dark:text-gray-300
                  "
                >

                  <span className="font-semibold">
                    {c.nickname}:
                  </span>{" "}

                  {c.text}

                </div>

              ))

            )}

          </div>



          <div
            className="
              flex
              gap-2
              border-t
              border-gray-200
              pt-3
              dark:border-gray-800
            "
          >

            <input
              type="text"
              value={commentInputs[post._id] || ""}
              onChange={(e)=>
                setCommentInputs(prev=>({
                  ...prev,
                  [post._id]:e.target.value
                }))
              }
              placeholder="Yorum yap..."
              className="
                flex-1
                rounded-full
                border
                border-gray-200
                bg-gray-50
                px-4
                py-2
                text-sm
                outline-none
                transition
                focus:border-gray-500
                dark:border-gray-900
                dark:bg-zinc-800
              "
            />


            <button
              onClick={() =>
                handleComment(post._id)
              }
              className="
                rounded-full
                border
                border-gray-200
                p-2
                text-gray-600
                transition
                hover:bg-gray-50
                hover:text-gray-600
                dark:border-gray-900
                dark:text-gray-300
                dark:hover:bg-gray-950/30
              "
            >

              <ArrowRightIcon
                className="
                  h-5
                  w-5
                "
              />

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
                className="w-full border border-gray-300 dark:border-gray-900 rounded-lg px-3 py-2 mb-4 bg-white dark:bg-zinc-800 text-black dark:text-gray-300"
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
            className="absolute top-4 right-5 text-white dark:text-gray-300 hover:text-yellow-400 transition"
          >
            <XMarkIcon className="w-6 h-6" />
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
