import React, { Component } from 'react'

export class SupportSection extends Component {

    state = {
        selected_support: 'Hollow-out',
        support_data: [
            { title: 'Hollow-out', subtitle: 'Hang your sign directly on your wall.' },
            { title: 'Cut to shape', detail: 'Acrylic display that follows the shape of your sign.' },
            { title: 'Full board', detail: 'Acrylic display in shape of a square around your sign.' },
            { title: 'Stand', detail: 'Make your sign upright on the floor.' },
        ]
    }

    handleSizesClick = (selected_support) => {
        this.setState({selected_support});
    }

    render() {

        const { selected_support, support_data } = this.state;

        return (
            <div className="support-section">
                <p>Support</p>
                {
                    support_data.map( (sd) => {
                        return (
                            <div key={sd.title} className={`option ${selected_support === sd.title ? "is-active": ""}`} onClick={ () => this.handleSizesClick(sd.title) }> 
                                <span className="option-info">
                                    <p className="title">{sd.title}</p> 
                                    <p className="subtitle">{sd.detail}</p>  
                                </span>
                            </div>
                        )
                    }) 
                }
            </div>
        )
    }
}

export default SupportSection
