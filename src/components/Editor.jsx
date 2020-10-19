import React, { Component } from 'react'
import AppPicker from './AppPicker'
import PricingBox from './PricingBox'
import SizeEditor from './SizeEditor'
import SupportSection from './SupportSection'

export class Editor extends Component {

    

    render() {

        const { text, handleTextChange } = this.props;

        return (
            <div className="customizer-editor-wrapper">
				<div className="customizer-editor">
					<h1 className="">Create a unique LED neon made</h1>

					<AppPicker />

					<div className="write-text">
						<p>Write Your Text</p>
						<textarea onChange={handleTextChange} value={text}></textarea>
					</div>

					<SizeEditor />

                    <SupportSection />
				</div>

				<PricingBox />
			
			</div>
        )
    }
}

export default Editor
