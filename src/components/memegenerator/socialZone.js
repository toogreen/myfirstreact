import React from "react"
import ShareButton from 'react-social-share-buttons'

function socialZone(){
	render(
		<div className="socialzone">

			<div className="shareButton">
	            <ShareButton
	                compact
	                socialMedia={'facebook'}
	                media={this.rasteredImg}
	            />
	        </div>

	        <div className="shareButton">
	           	<ShareButton
	                compact
	                socialMedia={'twitter'}
	                media={this.rasteredImg}
	            />

	        </div>

	    </div>
		)
}

export default socialZone
