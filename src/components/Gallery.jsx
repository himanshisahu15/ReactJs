import { Component } from "react";
import ImageCard from "./ImageCard";
import BaseModel from "./Model";
import styles from './Gallery.module.css';
import imageData from "../data";
import addFeature from "./Hoc/addFeature.jsx";

const Model=addFeature(BaseModel);

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      title: '',
      url: '',
      selectedImage: null,
    };
       console.log('constructor');
  }

  componentDidMount() {
        console.log('componentDidMount');
    //loads default images
      this.setState({ images: imageData });

  }
 componentDidUpdate(prevProps, prevState) {
    if (prevState.images.length !== this.state.images.length) {
      console.log('componentDidUpdate: image count changed');
    }
  }

  //update title and url based on input
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addImage = () => {
    const { title, url, images } = this.state;
    if (!title.trim() || !url.trim()) return;
    this.setState({
      images: [...images, { title, url }],
      title: '',
      url: '',
    });
  };

  deleteImage = (index) => {
    const filtered = this.state.images.filter((_, i) => i !== index);
    this.setState({ images: filtered });
  };

  openModel = (img) => {
    this.setState({ selectedImage: img });
  };

  closeModel = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, title, url, selectedImage, timeSpent } = this.state;

    return (
      <div className={styles.container}>
        <h2 className={styles.header}>Image Gallery</h2>
        
        <div className={styles.form}>
          <input
            className={styles.input}
            name="title"
            value={title}
            onChange={this.handleChange}
            placeholder="Image Title"
          />
          <input
            className={styles.input}
            name="url"
            value={url}
            onChange={this.handleChange}
            placeholder="Image URL"
          />
          <button className={styles.button} onClick={this.addImage}>Add</button>
        </div>

        <div className={styles.gallery}>
          {images.length === 0 ? (
            <p>No images yet</p>
          ) : (
            images.map((img, i) => (
              <ImageCard
                key={i}
                img={img}
                onDelete={() => this.deleteImage(i)}
                onClick={() => this.openModel(img)}
              />
            ))
          )}
        </div>

        {selectedImage && <Model img={selectedImage} onClose={this.closeModel} />}
      </div>
    );
  }
}

export default Gallery;
