import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import jwtDecode from 'jwt-decode';



const LoginFinal = ({ handleSubmit, handleLogout, handleCallbackResponse}) => {
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem('username')) || ''
  );
  const [password, setPassword] = useState('');

  const [name, setName] = useState(
    JSON.parse(localStorage.getItem('name')) || ''
  );
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  const facebookLogin = () => {
    window.location.href="http://localhost:9084/login";
    localStorage.setItem('success', JSON.stringify(true));
    localStorage.setItem('manual', JSON.stringify(false));
    localStorage.setItem('username', JSON.stringify(username));
    setName(userDetails.name);
  }


  const [success, setSuccess] = useState(
    JSON.parse(localStorage.getItem('success')) || false
  );
  const [manual, setManual] = useState(
    JSON.parse(localStorage.getItem('manual')) || false
  );

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    await handleSubmit(username, password);
    setUserDetails(username, password)
    setSuccess(true);
  };


  useEffect(() => {
    localStorage.setItem('success', JSON.stringify(success));
    localStorage.setItem('name', JSON.stringify(username||name||user.name));
  }, [success, username||name||user.name]);



  const [ user, setUser ] = useState();


  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    setSuccess(true);

    window.location.reload();
}

  useEffect(() => { 
    /* global google */
    google.accounts.id.initialize({
        client_id: "661237152912-tb5j8kn58r1ra9f193c9uq4b7vhea97k.apps.googleusercontent.com",
        callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline",  logo_alignment: "center", width: 320, size: "large"}
    );

}, []);
// If no user: sign in btn
// If yes user: sign out btn

  useEffect(() => {
    $.get('/user', function (data) {
      console.log('Data: ');
      console.log(data);
      $('#user').html(data.userAuthentication.details.name);
      console.log('After name id: ' + data.userAuthentication.details.id);
      console.log('After name name: ' + data.userAuthentication.details.name);
      $('.unauthenticated').hide();
      $('.authenticated').show();
      setUserDetails(data.userAuthentication.details);
      // setName(name);
      
      
    });
  }, []);



  

  return (
    <div className='hero2'>
    {success ? (
      <div class="loginCont">
      <div class="container authenticated">
        <div class="innerAuthenticated">
          <p class="loggedInAsP">Logged in as:<br/>
           <span class="loggedInAsSpan">{name}</span>

            </p>
        </div>
          
          <a href="http://localhost:3000/home"> <button class="btn homepagebtn" id="homepagebtn">Homepage</button></a>

        </div>
        
      </div>
    ) : (
      
      <div className="loginFormOuter">
      <img src="assets/images/loginTop.png" alt="" className='loginImg'/>
                    <div class="form-box shadow " id="form-boxLogin">
                        {/* <h3 className='loginHead'>Log in</h3> */}
                        <form  onSubmit={handleFormSubmit}>
                            <div class="mb-3 mt-3">
                                <label for="username" class="form-label">Username</label>
                                <input  value={username} onChange={(e) => setUsername(e.target.value)}  type="text" class="form-control input-field" id="username" aria-describedby="emailHelp"/>
                                
                            </div>
                            <div class="mb-3">
                                <label for="passwrd" class="form-label">Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" class="form-control input-field" id="password"/>
                            </div>
                            <div class="mb-3 form-check" className='underInputs'>
                                <div>
                                    <input type="checkbox" class="form-check-input me-2" id="exampleCheck1"/>
                                    <label class="form-check-label exampleCheck1label" className='exampleCheck1label' for="exampleCheck1 " id="">Remember Me</label>
                                </div>
                                <a href="/#" className='forgotpw text-muted'>Forgot Password?</a>
                                
                            </div>
                            <button type="submit" class="btn loginBtn" id='loginBtn'>Log in</button>
                        </form>
                        <div class="container " className=''>
                             <button class="btn" onClick={facebookLogin} id="facebookbtn" ><i class="bi bi-facebook"></i> Sign in with Facebook</button>
                             <div id="signInDiv"></div>

                        </div>
                        
                    </div>
                    
      </div>
    )}
    
  </div>

  );
};

export default LoginFinal;