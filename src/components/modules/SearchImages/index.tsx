import React, {FC, useEffect, useState} from "react";

// Libs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from "@fortawesome/free-solid-svg-icons";

// Services
import { api, API_DEFAULT_PARAMS } from '../../../services/unsplash-service';

// components > UI
import Input from "../../UI/Input";
import Spinner from "../../UI/Spinner";
import Carousel from "../../UI/Carousel";

// hooks
import useDebounce from "../../../hooks/debounce";

// CSS
import styles from './Search.module.scss';

const SearchImages: FC = () => {
    const [data, setData] = useState<Array<object>>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [showCarousel, setShowCarousel] = useState<boolean>(false);
    // @ts-ignore
    const debouncedValue = useDebounce<string>(searchValue, 1000);

    useEffect(() => {
        setShowCarousel(false);
        if (!searchValue) {
            getPhotosHandler();
        }
        if (debouncedValue) {
            const searchPhotosHandler = async () => {
                try {
                    const data: any = await api.get('search/photos', {
                        params: {
                            ...API_DEFAULT_PARAMS,
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
                    setData(images);
                } catch (err) {
                    console.error(err);
                }
            }
            searchPhotosHandler();
        }
    }, [debouncedValue, searchValue])

    const getPhotosHandler = async () => {
        try {
            const data: any = await api.get('photos', {
                params: {
                    ...API_DEFAULT_PARAMS
                }
            })
            setShowCarousel(true);
            const images: object[] = data.data.map((image: any) => {
                return {
                    id: image.id,
                    alt: image.alt_description,
                    src_regular: image.urls.regular,
                    src_small: image.urls.small
                }
            });
            setData(images);
        } catch (err) {
            console.error(err);
        }
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const cleanSearchInput = () => {
        setSearchValue('');
    }

    let carousel = <Spinner />;

    if (showCarousel) {
        carousel = <Carousel images={data} />;
    }

    return (
        <div className={styles.content}>
            <header className={styles.header}>
                <Input value={searchValue} onChange={inputHandler} placeholder="Search an image" type="text" />
                {searchValue && (
                    <div onClick={cleanSearchInput}
                         className={styles.cleanButton}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                )}
            </header>
            <section className={styles.section}>
                {carousel}
            </section>
        </div>
    );
}

export default SearchImages;
