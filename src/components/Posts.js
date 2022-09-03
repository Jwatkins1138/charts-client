import {useState, useEffect, useContext} from 'react'
import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'
import ChartFooter from './ChartFooter'
import Loading from './Loading'
import { useParams } from 'react-router-dom'
import { main } from '../api/axios'
import AuthContext from '../context/AuthProvider'


const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { auth } = useContext(AuthContext);

  const getAllPosts = () => {
    const POSTS_URL = `/posts/index/${params.ticker.toUpperCase()}`;
      main.get(
            POSTS_URL,
            {
              headers: {'Authorization': localStorage.token,
                        'Content-Type': 'application/json'},
              withCredentials: false,
            }
    )
    .then(response => {
      console.log(response);
      setPosts(response.data.posts);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
    })
  };

  const drawPost = (post) => {
    return (
      <div key={post.id} className="post-card">
        <div className="post-author"><b>{post.user.email}</b> says: </div>
        <div className="post-body"><p>{post.post}</p></div>
        <div className="post-footer">{post.created_at}</div>
      </div>
    )
  }

  useEffect(() => {
    getAllPosts();
  }, [])

  return (
    <>
    {(loading) ? (
      <Loading />
    ) : (
      <>
    <div className='container'>
      <Header />
      <main className='info'>
        <SideBar />
        <div className='info-main'>
          <header className='posts-header'><h4>What are people saying about {params.ticker}</h4></header>
          <>
          {(auth.login) ? (
            <div className='post-add'>add a post</div>
          ) : (
            <div className='post-add'>login to add post</div>
          )}
          </>
          {posts.map((post) => {
            return drawPost(post);
          })}
          <ChartFooter ticker={params.ticker}/>
        </div>
        <SideBarRight />
      </main>
    </div>
    </>
    )}
    </>
  )
}

export default Posts;