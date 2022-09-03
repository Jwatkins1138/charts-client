import {useState, useEffect, useContext} from 'react'
import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'
import ChartFooter from './ChartFooter'
import Loading from './Loading'
import { useParams } from 'react-router-dom'
import { main } from '../api/axios'
import AuthContext from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'


const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { auth } = useContext(AuthContext);
  const [input, setInput] = useState('');
  const [form, setForm] = useState(false);
  const [update, setUpdate] = useState(0);
  const navigate = useNavigate();

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

  const makePost = () => {
    const POSTS_URL = `/posts`;
    const fakePost = {
      post: input,
      symbol: params.ticker.toUpperCase()
    }
      main.post(
            POSTS_URL, fakePost,
            {
              headers: {'Authorization': localStorage.token,
                        'Content-Type': 'application/json'},
              withCredentials: false,
            }
    )
    .then(response => {
      console.log(response);
      setUpdate(update + 1);
      setForm(false);
      setInput('');
    })
    .catch(err => {
      console.log(err);
    })
  }

  const drawPost = (post) => {
    return (
      <div key={post.id} className="post-card">
        <div className="post-author"><b>{post.user.email}</b> says: </div>
        <div className="post-body"><p>{post.post}</p></div>
        <div className="post-footer">{post.created_at}</div>
      </div>
    )
  };

  const loginLink = () => {
    navigate('/login');
  };

  const toggleForm = () => {
    form ? (setForm(false)) : (setForm(true));
  };

  useEffect(() => {
    getAllPosts();
  }, [update])

  return (
    <>
    {(loading) ? (
      <Loading />
    ) : (
      <>
    <div className='container'>
      <Header />
      <main className='posts'>
        <SideBar />
        <div className='posts-main'>
          <header className='posts-header'><h4>What are people saying about {params.ticker}</h4></header>
          <>
          {(auth.login) ? (
            <div onClick={toggleForm} className='post-add'>add a post</div>
          ) : (
            <div onClick={loginLink} className='post-add'>login to add post</div>
          )}
          </>
          <>
          {form ? (
            <div className='post-field'>
              <label htmlFor="post">
                your post: 
              </label>
              <textarea
                name='post'
                placeholder='...'
                onChange={(e) => {setInput(e.target.value)}}
                value={input}
              ></textarea>
              <button onClick={makePost}>submit</button>
            </div>
          ) : (
            <></>
          )}
          </>
          {posts.reverse().map((post) => {
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