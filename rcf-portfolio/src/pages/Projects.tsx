import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface GalleryItem {
  original: string;
  thumbnail: string;
  description: string;
  link: string;
}

const images: GalleryItem[] = [
  {
    original: "/rcf-contact.jpg",
    thumbnail: "/rcf-contact.jpg",
    description: "TESTE 0",
    link: "https://www.exemplo1.com",
  },
  {
    original: "/rcf-skills.jpg",
    thumbnail: "/rcf-skills.jpg",
    description: "TESTE 1",
    link: "https://www.exemplo2.com",
  },
];

const Projects = () => {
  const handleImageClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <h1>Projetos</h1>
      <span className="text-primary">Veja os projetos em destaque</span>
      <Gallery
        items={images.map((image) => ({
          ...image,
          renderItem: (item: GalleryItem) => (
            <div
              onClick={() => handleImageClick(item.link)}
              style={{ cursor: "pointer", maxWidth: "500px", margin: "0 auto" }}
            >
              <img
                src={item.thumbnail}
                alt={item.description}
                style={{ width: "100%" }}
              />
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default Projects;
