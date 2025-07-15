import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import contactImg from '/rcf-contact.jpg';
import skillsImg from '/rcf-skills.jpg';

interface GalleryItem {
  original: string;
  thumbnail: string;
  description: string;
  link: string;
}

const images: GalleryItem[] = [
  {
    original: contactImg,
    thumbnail: contactImg,
    description: "TESTE 0",
    link: "https://www.exemplo1.com",
  },
  {
    original: skillsImg,
    thumbnail: skillsImg,
    description: "TESTE 1",
    link: "https://www.exemplo2.com",
  },
];

const Projects = () => {
  const handleImageClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-20 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-2">projetos</h1>
      <span className="text-primary mt-2 block text-center md:text-left mb-6">
        Veja os projetos em destaque
      </span>
      <div className="mt-4">
        <Gallery
          items={images.map((image) => ({
            ...image,
            renderItem: (item: GalleryItem) => (
              <div
                onClick={() => handleImageClick(item.link)}
                className="cursor-pointer max-w-sm sm:max-w-md md:max-w-lg mx-auto p-2"
              >
                <img
                  src={item.thumbnail}
                  alt={item.description}
                  className="w-full rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                />
                <p className="text-center mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ),
          }))}
          showThumbnails={true}
          showPlayButton={false}
          showFullscreenButton={false}
        />
      </div>
    </div>
  );
};

export default Projects;
