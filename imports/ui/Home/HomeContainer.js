import React, { Component } from 'react';
import Table from "../Home/table";

const HomeContainer = (user) => (
    <section>
        <Table user={user}/>
    </section>
);

export default HomeContainer;
