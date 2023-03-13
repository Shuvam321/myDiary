// $(function() {
// 	$("#sortableImgThumbnailPreview").sortable({
// 	 connectWith: ".RearangeBox",
	
		
// 	  start: function( event, ui ) { 
// 		   $(ui.item).addClass("dragElemThumbnail");
// 		   ui.placeholder.height(ui.item.height());
   
// 	   },
// 		stop:function( event, ui ) { 
// 		   $(ui.item).removeClass("dragElemThumbnail");
// 	   }
// 	});
// 	$("#sortableImgThumbnailPreview").disableSelection();
// });




// document.getElementById('files').addEventListener('change', handleFileSelect, false);

// function handleFileSelect(evt) {

// var files = evt.target.files; 
// var output = document.getElementById("sortableImgThumbnailPreview");

// // Loop through the FileList and render image files as thumbnails.
// for (var i = 0, f; f = files[i]; i++) {

// // Only process image files.
// if (!f.type.match('image.*')) {
// continue;
// }

// var reader = new FileReader();

// // Closure to capture the file information.
// reader.onload = (function(theFile) {
// return function(e) {
//   // Render thumbnail.
//    var imgThumbnailElem = "<div class='RearangeBox imgThumbContainer'><i class='material-icons imgRemoveBtn' onclick='removeThumbnailIMG(this)'>cancel</i><div class='IMGthumbnail' ><img  src='" + e.target.result + "'" + "title='"+ theFile.name + "'/></div><div class='imgName'>"+ theFile.name +"</div></div>";
			
// 			output.innerHTML = output.innerHTML + imgThumbnailElem; 
  
// };
// })(f);

// // Read in the image file as a data URL.
// reader.readAsDataURL(f);
// }
// }

// function removeThumbnailIMG(elm){
// elm.parentNode.outerHTML='';
// }



var btnUpload = $("#upload_file"),
		btnOuter = $(".button_outer");
	btnUpload.on("change", function(e){
		var ext = btnUpload.val().split('.').pop().toLowerCase();
		if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
			$(".error_msg").text("Not an Image...");
		} else {
			$(".error_msg").text("");
			btnOuter.addClass("file_uploading");
			setTimeout(function(){
				btnOuter.addClass("file_uploaded");
			},3000);
			var uploadedFile = URL.createObjectURL(e.target.files[0]);
			setTimeout(function(){
				$("#uploaded_view").append('<img src="'+uploadedFile+'" />').addClass("show");
			},3500);
		}
	});
	$(".file_remove").on("click", function(e){
		$("#uploaded_view").removeClass("show");
		$("#uploaded_view").find("img").remove();
		btnOuter.removeClass("file_uploading");
		btnOuter.removeClass("file_uploaded");
	});