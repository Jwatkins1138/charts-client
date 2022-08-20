

const Test = () => {

  const signUp = () => {
    const url = ' https://fierce-beyond-99980.herokuapp.com/api/users';
    const user = {
      email: 'goushoryuken@gmail.com',
      username: 'sirlordjason',
      password: 'password',
      password_confirmation: 'password',
      bio: 'hi',
      image: 'hey'
    };
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
  }

  return (
    <button onClick={signUp}>sign up</button>
  )

}

export default Test;