import React,{useState} from "react";
import {Button} from '@material-ui/core'
import firebase from "firebase/compat/app";
import {storage, db} from './firebase'
import './ImageUpload.css';

function Imageupload({username}) {
    const [caption, setCaption]=useState('')
    const [image, setImage]=useState('')
    const [progress, setProgress]=useState('')

    const handleChange=(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };

    const handleUpload=()=>{
        const uploadTask= storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot)=>{
                //progress function...
                const progress= Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes)*100
                );
                setProgress(progress);
            },
            (error)=>{
                // Error function
                console.log(error);
                alert(error.message);
            },
            ()=>{
                //Complete Function...
                storage
                 .ref('images')
                 .child(image.name)
                 .getDownloadURL()
                 .then(url=>{
                     //post image inside db
                     db.collection('posts').add({
                         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                         caption: caption,
                         imageUrl: url,
                         username: username
                     });
                     setProgress(0);
                     setCaption('');
                     setImage(null);
                 })
            }
        )
    }
  return (
    <div className="imageupload">  
      <progress className="imageupload__progress" value={progress} max='100'/>        
      <input type='text' placeholder="Enter a caption..." value={caption} onChange={event=> setCaption(event.target.value)} />
      <input type='file' onChange={handleChange}/>
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default Imageupload;