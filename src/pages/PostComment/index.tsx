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
    const currentComments = [...post.comments]

    try {
      const newComments = post.comments.map((comment: any) => {
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
        comments: newComments
      })

      if (id) {
        await likeOrDislikeComment(id, commentId, {
          like: true
        })
      }

    } catch (error) {
      setPost({
        ...post,
        comments: currentComments
      })
    }
  }

  const removeLike = async (commentId: string) => {
    const currentComments = [...post.comments]

    try {
      const newComments = post.comments.map((comment: any) => {
        if (comment.id === commentId) {
          const isDislike = comment.rating === false
          const isNeutral = comment.rating === null
          const isLike = comment.rating === true

          let dislikes = comment.dislikes;
          const rating = isLike || isNeutral ? false : null

          if (isNeutral || isLike) {
            dislikes = dislikes + 1
          } else if (isDislike) {
            dislikes = dislikes - 1
          }

          return {
            ...comment,
            likes: rating ? post.likes + 1 : post.likes,
            rating,
            dislikes,
          }
        }
        return comment
      })



      setPost({
        ...post,
        comments: newComments
      })

      if (id) {
        await likeOrDislikeComment(id, commentId, {
          like: false
        })
      }

    } catch (error) {
      setPost({
        ...post,
        comments: currentComments
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

        const newComments = [createdComment].concat(post.comments)
        setPost({
          ...post,
          comments: newComments
        })
        setNewComment('')
      }

    } catch (error) {
      console.log('handle create post => error')
    }
  }

  console.log('@post', post)

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
              comment={10}
              content={post.content}
              likes={post.likes}
              dislikes={post.dislikes}
              rating={post.rating}
            />
            <Post
              labelAction="Comentar"
              placeholder="Escreva seu comentário..."
              onChange={(e) => setNewComment(e.currentTarget.value)}
              value={newComment}
              btnAction={handleCreateComment}
            />
            <HorizontalLine />
            <div className={style['post-comment']}>
              {post.comments.map((post: any) => (
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
