module.exports = (Franz) => {
	const getMessages = function getMessages() {	
		
		var msgCount = 0;
		var privateMsgCount = 0;

		// Total 
		const $NumberInDocTitle = document.title.match(/\(([^)]+)\)/);
		if ( $NumberInDocTitle!=null && $NumberInDocTitle.length > 0 ) {
			msgCount = parseInt($NumberInDocTitle[1]);
			if(msgCount == null || isNaN(msgCount)) msgCount = 0;			
		} 
		
		// just private messages
		var linkPriv = [].filter.call(document.getElementsByTagName('a'), el => el.href.indexOf('Messages') >= 0);
		if(linkPriv.length >= 1){
			linkPriv = linkPriv[0].getElementsByClassName('q-badge');
			if(linkPriv.length >= 1){
				linkPriv = linkPriv[0].innerHTML;
				
				if ( linkPriv!=null && linkPriv.length > 0 ) {
					privateMsgCount = parseInt(linkPriv);
					if(privateMsgCount == null || isNaN(privateMsgCount)) privateMsgCount = 0;					
				} 
			}			
		}
		
		msgCount = msgCount - privateMsgCount;
		Franz.setBadge(privateMsgCount, msgCount);
	};
  
	// Check for new messages every second and update Franz badge.
	Franz.loop( getMessages );
  };
