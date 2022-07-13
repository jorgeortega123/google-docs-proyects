import React from "react";
import Textareainput from "./Textareainput";
import MainPage from "./MainPage";
import Buttons from "./Buttons";
import Options from "./Options";
import Upzone from "./Upzone";
import TopicAndParemeters from "./TopicAndParemeters";
export default function firstMain() {
  /*document.getElementsByTagName("body")[0].classList.add("container");*/
  /*
const uploadFile = e => {
    console.log(e)
    e.preventDefault();
  const data = new FormData() ;
  data.append('file', e.target.files[0]);
  axios.post("http://localhost:4000/uploadFileAPI", data)
      .then(res => { // then print response status
        console.log(res.statusText)
      }).catch(er => { document.getElementById("ServerRes").innerHTML = "Server Out:" +er})
}*/
  return (
    <div>
      <div class="msg" id="msgid">
        <div class="msg-content" id="msg-contentid"></div>
      </div>
      <div id="page">
        <div id="first_page">         
          <Upzone />
          <TopicAndParemeters />
          <Options />
          <MainPage />
          <Buttons />
        </div>
        <div id="second_page">
          <Textareainput />
          
        </div>
      </div>
    </div>
  );
}
