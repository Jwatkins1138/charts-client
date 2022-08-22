import Header from './Header'

const Test = () => {

  const signUp = () => {
    // const url = 'https://ancient-plateau-95772.herokuapp.com/signup';
    // const url = 'https://fierce-beyond-99980.herokuapp.com/api/users'
    const url = 'http://localhost:3001/api/users'
    const user = {
      user: {
        username: '2jason',
        email: '2goushoryuken@gmail.com',
        password: 'password',
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
    const url = `http://localhost:3001/api/user`;
    fetch(url, {
      method: 'get',
      credentials: 'include',
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
      <main className='test'>
        <aside></aside>
        <div className='test-main'>
          <button onClick={signUp}>sign up</button>
          <button onClick={logIn}>log in</button>
          <button onClick={currentUser}>user?</button>
          <button onClick={token}>token</button>
        </div>
        <aside></aside>
      </main>
    </div>
  )

}

export default Test;