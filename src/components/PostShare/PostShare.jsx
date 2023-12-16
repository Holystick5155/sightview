import React, { useState, useRef } from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../reduxACtions/actions/PostsAction.js";
import { Link, useParams } from "react-router-dom";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import { ref, getDownloadURL, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { storage } from "../../firebaseConfig.js"

const PostShare = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  // const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const success = useSelector((state) => state.postReducer.success);

  const [image, setImage] = useState(null);
  const imageRef = useRef();
  //const desc = useRef();
  const [imageDesc, setImageDesc] = useState("");
  const [title, setTitle] = useState("");
  const [teaser, setTeaser] = useState("");
  const [category, setCat] = useState(null);
  const [parentCategory, setParentCategory] = useState(null);
  const [tags, setTags] = useState("");
  const [percent, setPercent] = useState(0);
  const [downloadedUrl, setDownloadedUrl] = useState('');
  const [isPostSuccessful, setIsPostSuccessful] = useState(false)
  //const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  //const serverPublic = "http://localhost:5022/images/";


  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const [convertedContent, setConvertedContent] = useState(null);
  const [content, setContent] = useState(null);


  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
    setContent(editorState);
    setConvertedContent(convertContentToHTML)
  }

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }

  const handleOptionChange = (option) => {
    setParentCategory(option);
    setCat(null);
  };

  const handleCategoryChange = (category) => {
    setCat(category);
  }


  // handle Image Change
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
      console.log("Image:", img);
    }

  };

  // Reset Post Share
  const resetShare = () => {
    setImage(null);
    setConvertedContent(null);
  };

  // handle post upload
  const handleUpload = async (e) => {
    e.preventDefault();
    // if there is an image with post
    //post data
    const newPost = {
      userId: user._id,
      author: user.username,
      title: title,
      teaser: teaser,
      desc: convertedContent,
      imageDesc: imageDesc,
      parentCategory: parentCategory,
      category: category,
      tags: tags.split(',').map((tag) => tag.trim),
      authorPic: user.profilePicture,
      firstname: user.firstname,
      lastname: user.lastname,
    };
    try {
      let uploadedImage = null;

      if (image) {
        const data = new FormData();
        const fileName = Date.now() + image.name;
        data.append("name", fileName);
        data.append("file", image);
        newPost.image = fileName;
        console.log(newPost);

        const storageRef = ref(storage, `/files/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on('state_changed', (snapshot) => {
          const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${percent}%`);
          setPercent(percent);
        });
        await uploadTask;

        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        console.log("IamgeUrl:", downloadUrl);

        uploadedImage = {
          url: downloadUrl,
          name: fileName,
        };
      }

      newPost.image = uploadedImage;

      if (uploadedImage !== null) {
        const res = dispatch(createPost(newPost));
        console.log("Loading", loading)
        console.log("Posted:", res)

        if (loading === false && success === true) {
          resetShare();
          setIsPostSuccessful(true)
        }
      }

    } catch (err) {
      console.log(err);
    }

  };



  return (
    <>

      <div className="PostShare">
        {/* <Link to={`/profile/${user._id}`}>
          <img
            src={
              user.profilePicture
                ? serverPublic + user.profilePicture
                : serverPublic + "defaultProfile.png"
            }
            alt="Profile"
          />
        </Link> */}

        <div>
          <textarea
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            rows={2}
          />
          <textarea
            type="text"
            placeholder="Teaser"
            required
            value={teaser}
            onChange={(e) => setTeaser(e.target.value)}
            rows={2}
          />
          <div>
            <label>
              <input
                type="radio"
                value="News"
                checked={parentCategory === "News"}
                onChange={() => handleOptionChange("News")}
              />
              News
            </label>
            <label>
              <input
                type="radio"
                value="Stories"
                checked={parentCategory === "Stories"}
                onChange={() => handleOptionChange("Stories")}
              />
              Stories
            </label>
            <label>
              <input
                type="radio"
                value="Articles"
                checked={parentCategory === "Articles"}
                onChange={() => handleOptionChange("Articles")}
              />
              Articles
            </label>
            <label>
              <input
                type="radio"
                value="Profiles"
                checked={parentCategory === "Profiles"}
                onChange={() => handleOptionChange("Profiles")}
              />
              Profiles
            </label>
            <label>
              <input
                type="radio"
                value="Others"
                checked={parentCategory === "Others"}
                onChange={() => handleOptionChange("Others")}
              />
              Others
            </label>
          </div>
          {parentCategory && parentCategory === "News" && (
            <select
              required
              value={category}
              onChange={(e) => setCat(e.target.value)}
            >
              <option>
                Select category
              </option>
              <option value="politics">
                Politcs
              </option>
              <option value="science">
                Science/Tech
              </option>
              <option value="business">
                Business
              </option>
              <option value="education">
                Education
              </option>
              <option value="health">
                Health
              </option>
              <option value="sports">
                Sports
              </option>
              <option value="entertainment">
                Entertainment
              </option>
              <option value="culture">
                Culture
              </option>
              <option value="weather">
                Weather
              </option>
              <option value="travel">
                Travel
              </option>
              <option value="world">
                World Affairs
              </option>
              <option value="local">
                Local News
              </option>
            </select>
          )}

          {parentCategory && parentCategory === "Stories" && (
            <select
              required
              value={category}
              onChange={(e) => setCat(e.target.value)}
            >
              <option>
                Select category
              </option>
              <option value="romance">
                Love and Romance
              </option>
              <option value="happenings">
                Happenings
              </option>
              <option value="fiction">
                Fictional Narratives
              </option>
              <option value="stories">
                Short Stories
              </option>
              <option value="personal_experience">
                Personal Experience
              </option>
              <option value="creative_writing">
                Creative Writing
              </option>
              <option value="fantasy_scifi">
                Fantasy and Sci-Fi
              </option>
              <option value="mystery_thriller">
                Mystery and Thriller
              </option>
              <option value="historical_fiction">
                Historical Fiction
              </option>
              <option value="adventure">
                Adventure
              </option>
              <option value="horror">
                Horror
              </option>
            </select>
          )}

          {parentCategory && parentCategory === "Articles" && (
            <select
              required
              value={category}
              onChange={(e) => setCat(e.target.value)}
            >
              <option>
                Select category
              </option>
              <option value="technology">
                Technology Trends
              </option>
              <option value="lifestyle">
                Lifestyle
              </option>
              <option value="how_to">
                How-to Guides
              </option>
              <option value="product">
                Product Reviews
              </option>
              <option value="travel">
                Travel Destinations
              </option>
              <option value="food_cooking">
                Food and Cooking
              </option>
              <option value="history">
                History
              </option>
              <option value="education">
                Education
              </option>
              <option value="science_explainer">
                Science Explainers
              </option>
              <option value="leadership">
                Thought Leadership
              </option>
            </select>
          )}
          {parentCategory && parentCategory === "Profiles" && (
            <select
              required
              value={category}
              onChange={(e) => setCat(e.target.value)}
            >
              <option>
                Select category
              </option>
              <option value="spotlights">
                Author Spotlights
              </option>
              <option value="Q_A">
                Q&A Sessions
              </option>
              <option value="behind_the_scene">
                Behind-the-Scenes
              </option>
              <option value="personal_journey">
                Personal Journeys
              </option>
              <option value="inspiration">
                Inspirations and Influence
              </option>
              <option value="writing_tips">
                Writing Tips and Advice
              </option>
              <option value="achievement">
                Achievements and Awards
              </option>
              <option value="interview">
                Author Interview
              </option>
              <option value="collaboration">
                Collaborations
              </option>
              <option value="future_projects">
                Future Projects
              </option>
            </select>
          )}
          {parentCategory && parentCategory === "Others" && (
            <select
              required
              value={category}
              onChange={(e) => setCat(e.target.value)}
            >
              <option>
                Select category
              </option>
              <option value="videos">
                Videos
              </option>
              <option value="gallery">
                Gallery
              </option>
              <option value="explore">
                Explore
              </option>
            </select>
          )}
          <input
            type="text"
            placeholder="Tags"
            required
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image description"
            required
            value={imageDesc}
            onChange={(e) => setImageDesc(e.target.value)}
          />

          <div className="postOptions">
            <div
              className="option"
              style={{ color: "var(--photo)" }}
              onClick={() => imageRef.current.click()}
            >
              <UilScenery />
              Photo
            </div>

            {/* <div className="option" style={{ color: "var(--video)" }}>
              <UilPlayCircle />
              Video
            </div>
            <div className="option" style={{ color: "var(--location)" }}>
              <UilLocationPoint />
              Location
            </div>
            <div className="option" style={{ color: "var(--shedule)" }}>
              <UilSchedule />
              Shedule
            </div> */}


            <div style={{ display: "none" }}>
              <input type="file" ref={imageRef} onChange={onImageChange} />
            </div>
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
      </div>
      <Editor
        stripPastedStyles={true}
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        editorStyle={{
          height: 200,
          margin: 12,
          padding: 10,
          borderWidth: 0.5,
          borderRadius: "5px",
        }}
        wrapperStyle={{
          width: "95%",
          margin: '5%',
          marginLeft: "auto",
          marginRight: "auto"
        }}

        placeholder="Description"
      />

      <button
        className="button ps-button"
        onClick={handleUpload}
        disabled={loading || !convertedContent || !image}
      >
        {loading ? "uploading" : "Submit"}
      </button>

      {isPostSuccessful ? (
        <div style={{ color: 'green', marginTop: '10px' }}>
          Posted successfully!
        </div>
      ) : (
        <div style={{ color: 'red', marginTop: '10px' }}>
          Post not sent!
        </div>
      )}
      {/* <div className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}>
      </div> */}

    </>
  );
};

export default PostShare;
