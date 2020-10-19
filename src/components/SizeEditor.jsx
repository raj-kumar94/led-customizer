import React, { Component } from 'react'

export class SizeEditor extends Component {

    state = {
        selected_size: 'small',
        size_data: [
            { title: 'small', detail: '47cm x 12cm', extra: '18.50i x 4.72i' },
            { title: 'medium', detail: '47cm x 12cm', extra: '18.50i x 4.72i' },
            { title: 'large', detail: '47cm x 12cm', extra: '18.50i x 4.72i' },
            { title: 'custom', detail: '47cm x 12cm', extra: '18.50i x 4.72i' },
        ]
    }

    handleSizesClick = (selected_size) => {
        this.setState({selected_size});
    }

    render() {

        const { selected_size, size_data } = this.state;

        return (
            <div className="size-section">
                <p>Size</p>
                <span className="label--small">The sizing slider will show the smallest size available for your design.</span>
                <div className="card-container">

                    { size_data.map(sd => {
                        return (
                            <div key={sd.title} className={`option ${sd.title === selected_size ? "is-active": ""}`} onClick={ () => this.handleSizesClick(sd.title) }> 
                                <span className="option-info">
                                    <p className="title">{sd.title}</p>  
                                    <span className="detail">{sd.detail}</span> 
                                    <span className="extra">{sd.extra}</span>
                                </span>
                            </div>
                        )
                    } ) }

                </div>
            </div>
        )
    }
}

export default SizeEditor
