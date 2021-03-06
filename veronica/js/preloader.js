
(function () {
	// window.addEventListener('DOMContentLoaded', function(){



		let bodyCheckInterval = setInterval(function(){
	        let element = document.querySelector("body");
	       
	        if(element != undefined){
	            clearInterval(bodyCheckInterval);
	            runPreload();            
	        }
	    }, 50);


		function runPreload(){
			let body = document.querySelector('body');
	        body.classList.add('loading');

	        // Create Markup
	        let percentNode = document.createElement('div'),
	        	progressNode = document.createElement('div'),
	        	percentWrapper = document.createElement('div'),
	        	progressWrapper = document.createElement('div'),
	        	preloadWrapper = document.createElement('div');

	        percentNode.classList.add('preload-percent');
	        percentNode.innerHTML = '00';
	        percentWrapper.classList.add('preload-percent-wrapper');
	        progressWrapper.classList.add('preload-progress-wrapper');
	        progressNode.classList.add('preload-progress');
	        preloadWrapper.classList.add('preload-wrapper');
	        preloadWrapper.classList.add('style-1');

	        percentWrapper.appendChild(percentNode);
	        progressWrapper.appendChild(progressNode);

	        preloadWrapper.appendChild(progressWrapper);
	        preloadWrapper.appendChild(percentWrapper);

	        body.prepend(preloadWrapper);

	        let pageStatus = null;
		    let progress = null;
		    let animationInterval = 40;
		    
		   
		    
		    updateProgress();
		   
		    function updateProgress(){
		        if(pageStatus == "complete"){
		            percentNode.innerHTML = 100;
		            progressNode.style.width = "100%";
		            
		            body.classList.remove('loading');
	                body.classList.add('loaded');
		        }
		        else{            
		            if(progress == null){
		                progress = 1;
		            }
		           
		            progress = progress + 1;
		            if(progress >= 0 && progress <= 30){
		                percentNode.innerHTML = progress;
		                progressNode.style.width = progress + "%";
		                animationInterval += 1;
		            }
		            else if(progress > 30 && progress <= 60){
		                percentNode.innerHTML = progress;
		                progressNode.style.width = progress + "%";
		                animationInterval += 2;
		            }
		            else if(progress > 60 && progress <= 80){
		                percentNode.innerHTML = progress;
		                progressNode.style.width = progress + "%";
		                animationInterval += 3;
		            }
		            else if(progress > 80 && progress <= 90){
		                percentNode.innerHTML = progress;
		                progressNode.style.width = progress + "%";
		                animationInterval += 4;
		            }
		            else if(progress > 90 && progress <= 95){
		                percentNode.innerHTML = progress;
		                progressNode.style.width = progress + "%";
		                animationInterval += 80;
		            }
		            else if(progress > 95 && progress <= 99){
		                percentNode.innerHTML = progress;
		                progressNode.style.width = progress + "%";
		                animationInterval += 150;
		            }
		            else if(progress >= 100){
		                percentNode.innerHTML = 99;
		                progressNode.style.width = "99%";
		            }
		            setTimeout(updateProgress, animationInterval);
		        }
		        console.log(progress);
		    }
		   

		    window.document.addEventListener("readystatechange", function(){
		        if(document.readyState == "complete"){
		            pageStatus = "complete";
		        }
		    }, false);
		}
        
	// });
})();