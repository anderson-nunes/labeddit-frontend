import { Header } from "../../components/Header"
import logo from "../../assets/logo.svg"
import PostCard from "../../components/PostCard";
import style from './style.module.css'
import Post from "../../components/Post";
import HorizontalLine from "../../components/HorizontalLine";
import { useEffect, useState } from "react";
import { getPostById } from "../../services/posts";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { createComment, likeOrDislikeComment } from "../../services/comments";

const PostComment = () => {

  const [post, setPost] = useState<any>({})
  const [newComment, setNewComment] = useState('')
  const [loading, setLoading] = useState(true)

  const { id } = useParams();

  const addLike = async (commentId: string) => {
    const currentComments = [...post.commentList]

    try {
      const newComments = post.commentList.map((comment: any) => {
        if (comment.id === commentId) {
          const isDislike = comment.rating === false
          const isNeutral = comment.rating === null
          const isLike = comment.rating === true

          let likes = comment.likes;

          if (isNeutral || isDislike) {
            likes = likes + 1
          } else if (isLike) {
            likes = likes - 1
          }

          return {
            ...comment,
            rating: isNeutral || isDislike ? true : null,
            dislikes: isDislike ? comment.dislikes - 1 : comment.dislikes,
            likes,
          }
        }
        return comment
      })



      setPost({
        ...post,
        commentList: newComments
      })

      if (id) {
        await likeOrDislikeComment(id, commentId, {
          like: true
        })
      }

    } catch (error) {
      setPost({
        ...post,
        commentList: currentComments
      })
    }
  }

  const removeLike = async (commentId: string) => {
    const currentComments = [...post.commentList]

    try {
      const newComments = post.commentList.map((comment: any) => {
        if (comment.id === commentId) {
          const isDislike = comment.rating === false
          const isNeutral = comment.rating === null
          const isLike = comment.rating === true

          let dislikes = comment.dislikes;

          // Lógica que estava dando erro

          // const rating = isLike || isNeutral ? false : null

          //Lógica igual ao like e dislike do post

          if (isNeutral || isLike) {
            dislikes = dislikes + 1
          } else if (isDislike) {
            dislikes = dislikes - 1
          }

          // Lógica que estava dando erro

          // return {
          //   ...comment,
          //   likes: rating ? comment.likes + 1 : comment.likes,
          //   rating,
          //   dislikes,
          // }

          return {
            ...comment,
            rating: isLike || isNeutral ? false
              : null,
            likes: isLike ? comment.likes - 1 :
              comment.likes,
            dislikes,
          }
        }
        return comment
      })



      setPost({
        ...post,
        commentList: newComments
      })

      console.log('@oldComments', currentComments)
      console.log('@newComments', newComments)

      // if (id) {
      //   await likeOrDislikeComment(id, commentId, {
      //     like: false
      //   })
      // }

    } catch (error) {
      setPost({
        ...post,
        commentList: currentComments
      })
    }
  }

  useEffect(() => {
    if (id) {
      getPostById(id).then((post) => {
        setPost(post)
        setLoading(false)
      }).catch((err) => {
        console.error(err)
      })
    }

  }, [])

  const handleCreateComment = async () => {
    try {
      if (id) {
        const responseCreatePost = await createComment(id, {
          content: newComment
        })

        const createdComment = {
          ...responseCreatePost,
          creator_name: Cookies.get('user_name')
        }

        const newComments = [createdComment].concat(post.commentList)
        setPost({
          ...post,
          commentList: newComments
        })
        setNewComment('')
      }

    } catch (error) {
      console.log('handle create post => error')
    }
  }

  return (
    <>
      <Header
        logo={logo}
        hasClose={true}
        labelAction="Logout"
      />
      <div className={style['post-comment-container']}>
        {loading ? (
          <div>Loading...</div>) : (
          <>
            <PostCard
              id={post.id}
              author={post.creator.name}
              btnComment={(id) => console.log(id)}
              btnDislike={(id) => console.log(id)}
              btnLike={(id) => console.log(id)}
              content={post.content}
              likes={post.likes}
              dislikes={post.dislikes}
              comment={post.comments}
              rating={post.rating}
            />
            <Post
              labelAction="Responder"
              placeholder="Escreva seu comentário..."
              onChange={(e) => setNewComment(e.currentTarget.value)}
              value={newComment}
              btnAction={handleCreateComment}
            />
            <HorizontalLine />
            <div className={style['post-comment']}>
              {post.commentList.map((post: any) => (
                <PostCard
                  key={post.id}
                  id={post.id}
                  author={post.creator_name}
                  btnDislike={(id) => removeLike(id)}
                  btnLike={(id) => addLike(id)}
                  content={post.content}
                  likes={post.likes}
                  dislikes={post.dislikes}
                  rating={post.rating}
                />
              ))}
            </div>
          </>)}
      </div>
    </>
  )
}

export default PostComment
