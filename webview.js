module.exports = (Franz) => {
	const getMessages = function getMessages() {		
		const $NumberInDocTitle = document.title.match(/\(([^)]+)\)/);
		msgCount = 0;
		if ( $NumberInDocTitle!=null && $NumberInDocTitle.length > 0 ) {
			msgCount = parseInt($NumberInDocTitle[1]);
			if(msgCount == null || isNaN(msgCount)) msgCount = 0;
			
		} 
		Franz.setBadge( msgCount );
	};
  
	// Check for new messages every second and update Franz badge.
	Franz.loop( getMessages );
  };
