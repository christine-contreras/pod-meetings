console.log('hello world!');

// change the header content to say "Images"
const header = document.querySelector('h1');
header.textContent = "Images";




// find at least 5 images and display them programmatically in image container
const imgContainer = document.getElementById('image-container');

const images = ['https://images.unsplash.com/photo-1617335875629-51c0f3a99607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80', 'https://images.unsplash.com/photo-1580141807143-f515f69099ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1617184003170-4c9fc60cdb75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1616095530025-96ddb5c7d5f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1616095325915-17d508e0e4e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'];

images.forEach( img => {
    const imgTag = document.createElement('img');
    imgTag.src = img;

    imgContainer.appendChild(imgTag);
});


// BONUS: add a description for each image
const imageObjects = [
    {
        source: 'https://images.unsplash.com/photo-1619369537880-8206b88573d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',

        description: 'description #1'
    },
    {
        source: 'https://images.unsplash.com/photo-1615918884033-1b43ba5b1817?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',

        description: 'description #2'
    }
]

imageObjects.forEach( img => {
    const imgTag = document.createElement('img');
    const imgDescription = document.createElement('p');
    imgTag.src = img.source;
    imgDescription.textContent = img.description;

    imgContainer.appendChild(imgTag);
    imgContainer.appendChild(imgDescription);
});


