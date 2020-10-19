import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';

class App extends Component {

	state = {
		text: 'Hello World!',
		fonts: [
			{ font_family: 'Pacifico', font_size: '16px' },
			{ font_family: 'Caveat', font_size: '16px' },
			{ font_family: 'Roboto', font_size: '16px' },
            { font_family: 'Times New Roman', font_size: '16px' },
            { font_family: 'serif', font_size: '16px' },
        ],
        selected_font: 'Pacifico',
        is_font_modal_open: false
    }

    handleTextChange = (event) => {
        this.setState({text: event.currentTarget.value});
	}

	handleFontSelection = (selected_font) => {
        this.setState({selected_font});
        this.handleFontModalOpenClose();
    }

    handleFontModalOpenClose = () => {
        this.setState({is_font_modal_open: !this.state.is_font_modal_open});
    }
	
	render() {

		const { text, fonts, selected_font, is_font_modal_open } = this.state;

		return (
			<div className="customizer-app">
				<div className="canvas-container">
					<div className="preview__controls-item preview__controls-power">
						<button className="">ON</button> 
						<button className="">OFF</button>
					</div>
	
				<span className="glow main-text" style={{fontFamily:selected_font}}>{text}</span>
				</div>
	
				<Editor text={text} handleTextChange={this.handleTextChange} fonts={fonts} selected_font={selected_font} is_font_modal_open={is_font_modal_open} handleFontModalOpenClose={this.handleFontModalOpenClose} handleFontSelection={this.handleFontSelection} />
			</div>
		);
	}
}

export default App;
