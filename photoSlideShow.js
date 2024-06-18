const photoSlideShow = {
    photoList: ["Picture1", "Picture2", "Picture3"],
    currentPhotoIndex: 0,


nextPhoto() {
    if (this.currentPhotoIndex < this.photoList.length - 1) {
        this.currentPhotoIndex++;
        console.log(`Current photo: ${this.getCurrentPhoto()}`);
    } else {
        console.log("End of slideshow");
    }
    
},

prevPhoto() {
    if (this.currentPhotoIndex > 0) {
        this.currentPhotoIndex--;
        console.log(`Current photo: ${this.getCurrentPhoto()}`);
    } else {
        console.log("Beginning of slideshow");
    }
},

getCurrentPhoto(){
    return this.photoList[this.currentPhotoIndex];
}

};

photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
