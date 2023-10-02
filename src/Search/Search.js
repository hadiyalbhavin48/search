

import React, { useState, useEffect } from 'react';

const Search = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');
    const [filterdata, setfilterData] = useState([]);

    const addData = (e) => {
        e.preventDefault();

        const trimData = name.trim();
        // if (trimData !== '') {
        //     // const newData = {
        //     //     name: name
        //     // };
        //     // setList([...list, newData]);

        //     setList([...list, trimData]);

        //     setName('');
        // }

        if (trimData !== '') {
            setList([...list, trimData]);
            setName('');
        }


    };

    const filtername = () => {
        // const filteredList = list.filter((itemdata) => {
        //     return itemdata.name.toLowerCase().includes(search.toLowerCase());
        // });
        // setList(filteredList);

        const filteredList = list.filter((itemdata) => {
            return itemdata.toLowerCase().includes(search.toLowerCase());
        });

        setfilterData(filteredList);
    };

    return (
        <div>
            <h1>Search</h1>
            <div>
                <form>
                    <div>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            className='searchTxt'
                            placeholder='Add Item'
                        />
                        <button
                            type='button'
                            onClick={addData}
                            // disabled={name === ''}    // name is emty disabled the button
                            className='ms-3 bg-primary text-white'>Add</button>
                    </div>

                    <div style={{ float: "right" }}>
                        <input
                            type='text'
                            // onChange={(e) => { setSearch(e.target.value) }}
                            onChange={(e) => { setSearch(e.target.value.trim()) }}
                            onKeyUp={filtername}
                            placeholder='Search text'
                        />
                    </div>
                </form>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {list.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                            </tr>
                        ))} */}

                        {


                            // It checks if the search variable is empty it returns list
                            //If search is not empty it returns filteredData, which contains the filtered list of items.
                            // (search === '' ? list : filterdata).map((items, index) => (
                            //     <tr key={index}>
                            //         <td>{items.name}</td>
                            //     </tr>
                            // ))

                            list && (search === '' ? list : filterdata).map((item, index) => (
                                <tr key={index}>
                                    <td>{item}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Search;


