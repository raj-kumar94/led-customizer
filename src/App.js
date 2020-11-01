import React, { Component } from 'react';
import './App.scss';
import Editor from './components/Editor';

class App extends Component {

	state = {
		text: 'Hello World!',
		text_font_size: 100,
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

    handleTextChange = async (event) => {
		const textVal = event.currentTarget.value;
		this.setState({text: textVal});

		const texts = textVal.split('\n');
		let textWithMostCharacters = texts[0];
		for(let t of texts) {
			console.log({t})
			if(t.length > textWithMostCharacters.length) {
				textWithMostCharacters = t;
			}
		}
		await this.getTextWidth(textWithMostCharacters, this.state.selected_font);
	}

	handleFontSelection = (selected_font) => {
        this.setState({selected_font});
        this.handleFontModalOpenClose();
    }

    handleFontModalOpenClose = () => {
        this.setState({is_font_modal_open: !this.state.is_font_modal_open});
	}


	changeMainTextFontSize = async (text_font_size) => {
		this.setState({text_font_size});
	}
	
	getTextWidth = async (text, font) => {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		const fontTemp = font || getComputedStyle(document.body).font;
		const text_font_size = this.state.text_font_size;
	  
		context.font = `${text_font_size}px ${fontTemp}`; 
		context.fontSize = 100;

		const canvasWidth = document.getElementById('canvas-container').clientWidth;
		const text_width = context.measureText(text).width;

		if(text_width/canvasWidth >= 0.9) {
			await this.changeMainTextFontSize(Math.ceil(text_font_size*0.9));
		}

		// console.log({canvasWidth, text_width});
	  }
	  
	
	render() {

		const { text, text_font_size, fonts, selected_font, is_font_modal_open } = this.state;
		const texts = text.split('\n');

		return (
			<div className="customizer-app">
				<div className="canvas-container" id="canvas-container">
					{/* <div className="preview__controls-item preview__controls-power">
						<button className="">ON</button> 
						<button className="">OFF</button>
					</div> */}
	
					<div className="preview__text main-text">
					{
						texts.map((t, index) => {
							return (
								<span key={`main-text-${index}`} className="glow" style={{fontFamily:selected_font, fontSize: text_font_size}}>{t}</span>
							)
						})
					}
					</div>
				</div>
	
				<Editor text={text} handleTextChange={this.handleTextChange} fonts={fonts} selected_font={selected_font} is_font_modal_open={is_font_modal_open} handleFontModalOpenClose={this.handleFontModalOpenClose} handleFontSelection={this.handleFontSelection} />
			</div>
		);
	}
}

export default App;
