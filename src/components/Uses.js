import React, { Component } from 'react'

export class Uses extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        uses:[
          {
            login: "Blumentals HTMLPad ",
            id: 1,
            avatar_url: "https://igetintopc.com/wp-content/uploads/2022/04/Blumentals-HTMLPad-2022-Free-Download-1.jpg",
            html_url: "https://igetintopc.com/blumentals-htmlpad-2022-free-download/",
          },
          {
            login: "Adobe InDesign ",
            id: 2,
            avatar_url: "https://igetintopc.com/wp-content/uploads/2022/06/Adobe-InDesign-2022-Free-Download-macOS-1.jpg",
            html_url: "https://igetintopc.com/adobe-indesign-2022-free-download-macos/",
          },
          {
            login: "ARCHICAD 26",
            id: 3,
            avatar_url: "https://igetintopc.com/wp-content/uploads/2022/07/ARCHICAD-26-Free-Download-1-768x768.jpg",
            html_url: "https://igetintopc.com/archicad-26-free-download/",
          },
          {
            login: "AdwCleaner ",
            id: 4,
            avatar_url: "https://igetintopc.com/wp-content/uploads/2019/09/AdwCleaner-Free-Download-1-768x768.jpg",
            html_url: "https://igetintopc.com/adwcleaner-free-download/",
          },
          {
            login: "Adobe Photoshop ",
            id: 5,
            avatar_url: "https://igetintopc.com/wp-content/uploads/2022/05/Adobe-Photoshop-2022-Free-Download-macOS-1.jpg",
            html_url: "https://igetintopc.com/adobe-photoshop-2022-free-download-macos/",
          },
          {
            login: "Adobe Animate ",
            id: 6,
            avatar_url: "https://igetintopc.com/wp-content/uploads/2020/11/Adobe-Animate-2021-Free-Download-macOS-1-768x768.jpg",
            html_url: "https://igetintopc.com/adobe-animate-2021-free-download-macos/",
          },

        ]
         
      }
    }
  render() {
    return (
      <div>
        
       <div className="row my-3">
        {this.state.uses.map(Uses=> ( 
          <div className="col-md-4">
          <div class="card">
            <img class="card-img-top" src={Uses.avatar_url} alt=""/>
            <div class="card-body">
              <h4 class="card-title">{Uses.login}</h4>
              <p class="card-text">
                <a href={Uses.html_url} className="btn btn ">Download</a>
              </p>
            </div>
           </div>
          </div>
        ) )}
      </div>
      </div>
    )
  }
}

export default Uses