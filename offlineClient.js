"use strict";

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(reg => {
        console.log("One UI 8.5 Simulation: Offline mode ready.");
    }).catch(err => {
        console.error("Offline registration failed: ", err);
    });
}

function OnAppCacheReady() {
    // يمكن إضافة تنبيه للمستخدم هنا بأن النظام جاهز للعمل أوفلاين
    console.log("All UI Icons and Sprites cached successfully.");
}
oadcastChannel)
				this._broadcastChannel.onmessage = (e => this._OnBroadcastChannelMessage(e));
		}
		
		_OnBroadcastChannelMessage(e)
		{
			// Have a message callback set: just forward the call.
			if (this._onMessageCallback)
			{
				this._onMessageCallback(e);
				return;
			}
			
			// Otherwise the app hasn't loaded far enough to set a message callback.
			// Buffer the incoming messages to replay when the app sets a callback.
			this._queuedMessages.push(e);
		}
		
		SetMessageCallback(f)
		{
			this._onMessageCallback = f;
			
			// Replay any queued messages through the handler, then clear the queue.
			for (let e of this._queuedMessages)
				this._onMessageCallback(e);
			
			this._queuedMessages.length = 0;
		}
	};
	
	// Create the offline client ASAP so we receive and start queueing any messages the SW broadcasts.
	window.OfflineClientInfo = new OfflineClient();
	
}());

