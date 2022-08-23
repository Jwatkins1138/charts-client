import Header from './Header'
import SubHeader from './SubHeader'

const Test = () => {

  const signUp = () => {
    // const url = 'https://ancient-plateau-95772.herokuapp.com/signup';
    // const url = 'https://fierce-beyond-99980.herokuapp.com/api/users'
    // const url = 'https://shrouded-sierra-98549.herokuapp.com/users'
    const url = 'http://localhost:3001/users'
    const user = {
      user: {
        // username: '4jason',
        // email: '4goushoryuken@gmail.com',
        // password: 'password',
        // username: 'test',
        email: 'test@test.com',
        password: 'testpass',
      }
    };
    fetch(url, {
      method: 'post',
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if(res.ok) {
          console.log(res.headers.get("Authorization"));
          localStorage.setItem("token", res.headers.get("Authorization"));
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then((json) => console.dir(json))
      .catch((err) => console.error(err));
  }

  const logIn = () => {
    console.log(localStorage.token);
    // const url = 'https://ancient-plateau-95772.herokuapp.com/signup';
    const url = 'http://localhost:3001/api/users/login'
    const user = {
      user: {
        email: 'test@test.com',
        password: 'testpass',
      }
    };
    fetch(url, {
      method: 'post',
      credentials: 'include',
      headers: {
        
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if(res.ok) {
          console.log(res.headers.get("Authorization"));
          localStorage.setItem("token", res.headers.get("Authorization"));
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then((json) => console.dir(json))
      .catch((err) => console.error(err));
  }

  const currentUser = () => {
    const url = `http://localhost:3001/member/data`;
    fetch(url, {
      method: 'get',
      // credentials: 'include',
      headers: {
        'Authorization': localStorage.token,
        'Content-Type': 'application/json',
      }
    })
    .then((res) => console.log(res));
  }

  const token = () => {
    console.log(localStorage.token);
  }

  return (
    <div className='container'>
      <Header />
      <SubHeader />
      <main className='test'>
        <aside></aside>
        <div className='test-main'>
          <div className='form-card'>
            <div className='card-footer'>
              <button onClick={signUp}>sign up</button>
              <button onClick={logIn}>log in</button>
              <button onClick={currentUser}>user?</button>
              <button onClick={token}>token</button>
            </div>
          </div>
        </div>
        <aside></aside>
      </main>
    </div>
  )

}

export default Test;