import React,{useState} from "react";
import "./index.css";
import GreenButton from "../GreenButton";
import InputArea from "../ImputArea/inputArea";
import TextArea from "../textArea/textArea";
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function CreateOtyakai() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
    /* 画像固定値化のため不使用 */
  // const [topImage, setTopImage] = useState(null);
  const [hostId] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      detail: detail,
      place: place,
      date: date,
      max_participants: maxParticipants,
      img: "https://picsum.photos/700/200?random=8",  /*画像固定*/
      host_id: hostId
    };
    try{
      axios.post(`http://localhost:8080/api/otyakais/`,{
        otyakai : data
      }).then(()=>{
        navigate('/otyakais');
      })
    } catch (error) {      
      console.error('送信に失敗しました', error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };
  
  const handleMaxParticipantsChange = (e) => {
    setMaxParticipants(e.target.value);
  };
  
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  
  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };

  /* 画像固定値化のため不使用 */
  // const handleImageSelect = (e) => {
  //   const reader = new FileReader()
  //   const files = e.target.files
  //   if (files) {
  //     reader.onload = () => {
  //       setTopImage({
  //         data: reader.result,
  //         name: files[0] ? files[0].name : "unknownfile"
  //       })
  //     }
  //     reader.readAsDataURL(files[0])
  //   }
  // }

  return (
    <>
      <div className="shadow create-otyakai">
        <form className="container" onSubmit={handleSubmit}>
          <InputArea label="お茶会名" name="name" type="text" value={name} func={handleNameChange} />
          <TextArea label="詳細" name="detail" type="text" value={detail} func={handleDetailChange} />
          <InputArea label="参加数上限" name="max_participants" type="text" value={maxParticipants} func={handleMaxParticipantsChange} />
          <InputArea label="開催日時" name="date" type="datetime-local" value={date} func={handleDateChange} />
          <InputArea label="開催場所" name="place" type="text" value={place} func={handlePlaceChange}/>
          <InputArea label="トップ画像を選択" name="top_image" type="file" />
          <input name="host_id" value={hostId} type="hidden" />
          <div className="button-area">
            <GreenButton className="green-btn" type="submit" name="お茶会作成"></GreenButton>
          </div>
        </form>
      </div>
    </>
  );
}