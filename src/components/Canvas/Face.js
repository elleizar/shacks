import { Component } from "react";
import plain from '../../images/faces/face_plain.png';
import blush from '../../images/faces/face_blush.png';
import angry from '../../images/faces/face_angry.png';
import fearful from '../../images/faces/fearful_face.png';

const faces = [plain, blush, angry, fearful];

var index = 0;
  
export class Face extends Component {
   render() {
    return (
      <div className="face">
           <img src={faces[index]} alt=""/>
        </div>
     )
   }
 }

 const faceChange = function() {
  console.log("before: " + index)
  index = (index + 1) % (faces.length)
  console.log(" after: " + index)
 }

 export {faceChange};