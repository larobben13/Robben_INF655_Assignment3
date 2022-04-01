import React from 'react';
import Card from "../shared/Card";

export default function SearchTask(search, setSearch) {
    return (
    <Card>
    <h2>Search a Task from the Task List</h2>
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
    <label htmlFor="search">Search</label>
    <input 
    id="search"
    type="text"
    role="searchbox"
    placeholder="Seach Tasks"
    onChange={(e) => setSearch(e.target.value)}/>
    </form>
    <button className="btn">Search Task</button>
    </Card>
    );
}