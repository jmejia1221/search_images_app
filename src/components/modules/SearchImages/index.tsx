import React, {FC, useEffect, useState} from "react";

// Services
import { getPhotos, searchPhotos } from '../../../services/unsplash-service';

// components > UI
import Input from "../../UI/Input";
import Carousel from "../../UI/Carousel";

// hooks
import useDebounce from "../../../hooks/debounce";

// CSS
import styles from './Search.module.scss';
import Spinner from "../../UI/Spinner";

const SearchImages: FC = () => {
    const [data, setData] = useState<Array<object>>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [showCarousel, setShowCarousel] = useState<boolean>(false);
    // @ts-ignore
    const debouncedValue = useDebounce<string>(searchValue, 1000);

    useEffect(() => {
        setShowCarousel(false);
        if (!debouncedValue) getPhotosHandler();
        if (debouncedValue) searchPhotosHandler();
    }, [debouncedValue])

    const getPhotosHandler = async () => {
        try {
            const data: any = await getPhotos.get('')
            setShowCarousel(true);
            console.log(data);
            const images: object[] = data.data.map((image: any) => {
                return {
                    id: image.id,
                    alt: image.alt_description,
                    description: image.description,
                    src_regular: image.urls.regular,
                    src_small: image.urls.small
                }
            });
            setData(images)
        } catch (err) {
            console.error(err);
        }
    }

    const searchPhotosHandler = async () => {
        try {
            const data: any = await searchPhotos.get('', {
                params: {
                    query: searchValue
                }
            });
            setShowCarousel(true);
            const images: object[] = data.data.results.map((image: any) => {
                return {
                    id: image.id,
                    alt: image.alt_description,
                    description: image.description,
                    src_regular: image.urls.regular,
                    src_small: image.urls.small
                }
            });
            setData(images)
        } catch (err) {
            console.error(err);
        }
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setSearchValue(e.target.value)
    }

    let carousel = <Spinner />

    if (showCarousel) {
        carousel = <Carousel images={data} />
    }

    return (
        <div className={styles.content}>
            <header className={styles.header}>
                <Input onChange={inputHandler} type="text" />
            </header>
            <section className={styles.section}>
                {carousel}
            </section>
        </div>
    );
}

export default SearchImages;
