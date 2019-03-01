import React from 'react'
import { link } from  'react-router'

class Home extends React.Component{
    render() {
        return(
        <div>
            <head>
                <h1>Welcome</h1>
            </head>
            <main>
                <link to = "user/add">添加用户</link>
            </main>
        </div>
        )
    }
}


export default Home;
