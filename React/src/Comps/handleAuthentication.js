import axios from 'axios';
import $ from 'jquery';

const handleAuthentication = () => {
  axios.get('/user').then((data) => {
    $("#user").html(data.userAuthentication.details.name);
    $(".unauthenticated").hide();
    $(".authenticated").show();
  });
};

export default handleAuthentication;