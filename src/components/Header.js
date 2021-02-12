import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header class="site-header">

                <div class="brand">
                    <h2>React Conference Schedule</h2>
                </div>

                <nav class="nav">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Subscribe</a>
                </nav>

                
            </header>
        )
    }
}

export default Header

