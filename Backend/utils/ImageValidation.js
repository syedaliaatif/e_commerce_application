const validateImage = (images) => {

    let imageTable = [];
    if (Array.isArray(images)) {
        imageTable = [...images];
    }
    else {
        imageTable = [images];
    }

    if (imageTable.length > 3) {
        return { error: "More than 3 images were uploaded" };
    }
    for (let i of imageTable) {
        if (i.size > 1048576) {
            return { error: "Size of the image should be less than 1MB" };
        }
        const imageType = i.mimetype;
        const acceptedImageType = /jpeg|jpg|png/;
        const isValidType = acceptedImageType.test(imageType);
        if (!isValidType) {
            return { error: "Invalid file type. It should be jpeg|jpg|png." };
        }
    }
    return { error: false };
}


module.exports = { validateImage } 
