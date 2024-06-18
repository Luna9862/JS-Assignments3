const photoSlideShow = {
    photoList: [],
    currentPhotoIndex: 0,

    addPhoto(photoName) {
        this.photoList.push(photoName);
    },

nextPhoto() {
    if (this.currentPhtotIndex < this.photoList.length - 1) {
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

}

