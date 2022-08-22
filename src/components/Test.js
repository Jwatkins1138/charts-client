import Header from './Header'

const Test = () => {

  const signUp = () => {
    // const url = 'https://ancient-plateau-95772.herokuapp.com/signup';
    const url = 'http://localhost:3001/signup'
    const user = {
      email: 'goushoryuken@gmail.com',
      password: 'password',
    };
    fetch(url, {
      method: 'post',
      credentials: 'omit',
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

  return (
    <div className='container'>
      <Header />
      <main className='test'>
        <aside></aside>
        <div className='test-main'>
          <button onClick={signUp}>sign up</button>
        </div>
        <aside></aside>
      </main>
    </div>
  )

}

export default Test;