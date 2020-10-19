import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';

class App extends Component {

	state = {
        text: 'Hello World!'
    }

    handleTextChange = (event) => {
        this.setState({text: event.currentTarget.value});
	}
	
	render() {

		const { text } = this.state;

		return (
			<div className="customizer-app">
				<div className="canvas-container">
					<div className="preview__controls-item preview__controls-power">
						<button className="">ON</button> 
						<button className="">OFF</button>
					</div>
	
				<span className="glow main-text">{text}</span>
				</div>
	
				<Editor text={text} handleTextChange={this.handleTextChange} />
			</div>
		);
	}
}

export default App;
