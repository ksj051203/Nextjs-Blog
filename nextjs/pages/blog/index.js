import image from 'next/image';
import axios from 'axios';
import {useEffect, useState} from 'react';
import styles from './index.module.css'
export default function Home(){
    const [blogList, setBlogList] = useState([]);

    const fetchData = async () => {
        const result = await axios.get('api/blog');
        setBlogList(result.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return <div>블로그 목록입니다. blog 
        {blogList.map((blog) => {
            return (
                <div className = {styles.blog} key = {blog.id}>
                    <div>{blog.title}</div>
                </div>
            )
        })}
    </div>
}