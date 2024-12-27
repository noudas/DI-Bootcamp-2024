import { useEffect, useState } from "react"
import FetchHelper from "../utils/FetchHelper"
import Loading from "../utils/Loading"

const ImageArea = ({ query }) =>{
    
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() =>{
        const fetchImages = async () => {
            setIsLoading(true);
            try {
                const photos = await FetchHelper(query)
                setImages(photos);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
            finally{
                setIsLoading(false);
            }
        }
        fetchImages();
    },[query])
    return (
        <div className="image-area">
            <h3>{query} Pictures</h3>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="image-grid">
                    {images.map((image) => (
                        <img key={image.id} src={image.src.medium} alt={image.photographer} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageArea;