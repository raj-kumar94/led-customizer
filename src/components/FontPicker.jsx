import React, { Component } from 'react'

export class FontPicker extends Component {

    render() {

        const { fonts, selected_font, is_font_modal_open, handleFontSelection, handleFontModalOpenClose } = this.props;

        return (
            <div className="fonts__picker">
                <label className="" onClick={handleFontModalOpenClose}>Choose a font</label> 
                <div className="font__input" onClick={handleFontModalOpenClose}>
                    <span className="font__name">{selected_font}</span> 
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.42188 8.58594C9.375 8.63281 9.375 8.67969 9.375 8.72656V11.375H1.125V3.125H6.77344C6.82031 3.125 6.86719 3.125 6.91406 3.07812L7.66406 2.32812C7.78125 2.21094 7.6875 2 7.52344 2H1.125C0.492188 2 0 2.51562 0 3.125V11.375C0 12.0078 0.492188 12.5 1.125 12.5H9.375C9.98438 12.5 10.5 12.0078 10.5 11.375V7.97656C10.5 7.8125 10.2891 7.71875 10.1719 7.83594L9.42188 8.58594ZM13.0781 3.875C13.6172 3.33594 13.6172 2.46875 13.0781 1.92969L12.0703 0.921875C11.5312 0.382812 10.6641 0.382812 10.125 0.921875L3.98438 7.0625L3.75 9.19531C3.67969 9.80469 4.19531 10.3203 4.80469 10.25L6.9375 10.0156L13.0781 3.875ZM10.7812 4.57812L6.42188 8.9375L4.875 9.125L5.0625 7.57812L9.42188 3.21875L10.7812 4.57812ZM12.2812 2.72656C12.3984 2.82031 12.3984 2.96094 12.3047 3.07812L11.5781 3.80469L10.2188 2.42188L10.9219 1.71875C11.0156 1.60156 11.1797 1.60156 11.2734 1.71875L12.2812 2.72656Z" fill="#4D4D4D"></path>
                    </svg>
                </div> 

                {
                    is_font_modal_open ? 
                    <div className="font__modal">
                        { fonts.map(f => {
                            return ( 
                                <button key={f.font_family} onClick={ () => handleFontSelection(f.font_family) } className={`${f.font_family === selected_font ? "is-active": ""}`} style={{fontFamily: f.font_family, fontSize: f.font_size}}>{f.font_family}</button>
                            )
                        }) }
                    </div>
                    : ''
                }

            </div>
        )
    }
}

export default FontPicker
