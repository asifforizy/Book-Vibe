import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks } from '../../Utilities/addToDB';
import Read from './Read';

const ReadList = () => {
    const data = useLoaderData() || [];

    const [readList, setReadList] = React.useState([]);
    const [sort, setSort] = useState('')

    useEffect(() => {
        const storedBookData = getStoredBooks();
        const convertedData = storedBookData.map(id => parseInt(id));
        const readBooks = data.filter(book => convertedData.includes(book.bookId));
        setReadList(readBooks);
    }, [])

     const handleSort= (type)=> {

            setSort(type);
            if(type === 'pages'){
                const sortByPages = [...readList].sort((a,b)=> a.totalPages - b.totalPages);
                setReadList(sortByPages);
            }
            if(type === 'ratings'){
                const sortByRatings = [...readList].sort((a,b)=> a.rating - b.rating);
                setReadList(sortByRatings);

            }


        }

    return (
        <div>
            <div className='flex justify-between items-center mx-5'>
                <h1 className='text-3xl font-bold  my-10'>Books</h1>
                <div className="dropdown  ">
                    <div tabIndex={0} role="button" className="btn m-1">sort by : {sort ? sort : ''}</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={()=>handleSort('pages')}>pages</a></li>
                        <li><a onClick={()=>handleSort('ratings')}>ratings</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.map(book => <Read key={book.bookId} book={book}></Read>)
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