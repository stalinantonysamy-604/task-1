import React, { useEffect, useState } from 'react';
import { Table, Input } from 'antd';
import axios from 'axios';

const TablePage = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const formattedData = response.data.map((item) => ({
                    key: item.id,
                    title: item.title,
                    body: item.body,
                }));
                setData(formattedData);

            } catch (error) {
                console.error('Error fetching data:', error);

            }
        };
        fetchData();
    }, []);

    
    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    
    const columns = [
        { title: 'ID', dataIndex: 'key', key: 'id' },
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { title: 'Body', dataIndex: 'body', key: 'body' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Input
                placeholder="Search by title"
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginBottom: 16 }}
            />

            <Table dataSource={filteredData} columns={columns} />

        </div>
    );
};

export default TablePage;
