import ImageGallery from 'react-image-gallery';


function GalleryPage() {
    const images = [
        {
          original: 'images/forest-stream-yellow-trees.jpg',
          thumbnail: 'images/forest-stream-yellow-trees.jpg',
          description: 'Nature photography in Shenandoah National Park, VA (2022)',
          originalHeight: '450px',
        },
        {
          original: 'images/ski-snow-person.jpg',
          thumbnail: 'images/ski-snow-person.jpg',
          description: 'Skiing trip in Virginia (2022)',
          originalHeight: '450px',
        },
        {
          original: 'images/person-ferns-forest-green.jpg',
          thumbnail: 'images/person-ferns-forest-green.jpg',
          description: 'Botanical gardens in Sintra, Portugal (2022)',
          originalHeight: '450px',
        },
        {
          original: 'images/soccer-field-ball-goal.jpg',
          thumbnail: 'images/soccer-field-ball-goal.jpg',
          description: 'I am an avid soccer player (2022)',
          originalHeight: '450px',
        },
        {
          original: 'images/trail-forest-green.jpg',
          thumbnail: 'images/trail-forest-green.jpg',
          description: 'I enjoy trail running in my free time (2022)',
          originalHeight: '450px',
        },
        {
          original: 'images/tile-museum-design.jpg',
          thumbnail: 'images/tile-museum-design.jpg',
          description: 'National Tile Museum, Lisbon, Portugal (2022)',
          originalHeight: '450px',
        },
        {
          original: 'images/mountain-ruins-sky.jpg',
          thumbnail: 'images/mountain-ruins-sky.jpg',
          description: 'A photo taken at Machu Picchu in Peru (2019)',
          originalHeight: '450px',
        },
        {
          original: 'images/flask-run-app.png',
          thumbnail: 'images/flask-run-app.png',
          description: 'I created an app to make running pace adjustments based on the local weather (2023)',
          originalHeight: '450px',
        },
        {
          original: 'images/painting-museum-black-white.jpg',
          thumbnail: 'images/painting-museum-black-white.jpg',
          description: 'I enjoy visiting art museums (2022)',
          originalHeight: '450px',
        },
        {
          original: 'images/screenshot-app-green-brown.jpg',
          thumbnail: 'images/screenshot-app-green-brown.jpg',
          description: 'A study timer app that I created (2023)',
          originalHeight: '450px',
        },
       
      ]
    return (
        <>

        


        <h2>Gallery</h2>
            <p>This is a photo gallery of my hobbies, interests, travels, and personal projects.</p>
                <article class="gallery">


                <ImageGallery items={images} />

                    

                </article>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>
    );

}
export default GalleryPage;