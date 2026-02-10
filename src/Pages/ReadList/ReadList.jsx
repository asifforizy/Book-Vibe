import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks } from '../../Utilities/addToDB';
import Read from './Read';

const ReadList = () => {
    const data = useLoaderData() || [];

    const [readList , setReadList] = React.useState([]);

    useEffect(()=> {
        const storedBookData = getStoredBooks();
        const convertedData = storedBookData.map(id => parseInt(id));
        const readBooks = data.filter(book => convertedData.includes(book.bookId));
        setReadList(readBooks);


    },[])

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-10'>Books</h1>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.map(book=> <Read key={book.bookId} book={book}></Read>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Book i want to read</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;