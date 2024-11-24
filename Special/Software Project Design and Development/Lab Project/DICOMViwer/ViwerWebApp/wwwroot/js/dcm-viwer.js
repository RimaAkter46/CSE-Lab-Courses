var imagesSources = [];
var activeTool = null;
var currentIndex = 0;
const API_URL = `${window.location.origin}/Dicom/ReadDicom`;

cornerstoneWebImageLoader.external.cornerstone = window.cornerstone;
cornerstone.registerImageLoader('http', cornerstoneWebImageLoader.loadImage);
cornerstone.registerImageLoader('https', cornerstoneWebImageLoader.loadImage);

// Initialize cornerstone tools, and create an "enabled element"
// RE: An element that contains our canvas/viewport
const csTools = cornerstoneTools.init();
const element = document.querySelector('.cornerstone-element');
cornerstone.enable(element);
csTools.addEnabledElement(element);

const loadImageInViwer = (image) => {
    cornerstone.loadImage(image).then(function (image) {
        cornerstone.displayImage(element, image);
    });
}




fetch(API_URL)
    .then(response => {
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();  // Parse the JSON data from the response
    })
    .then(data => {
        console.log("Data =>", data);

        imagesSources = data.imageSources;
        if (imagesSources.length > 0) {
            loadImageInViwer(`${window.location.origin}/${imagesSources[0]}`);
            $.each(imagesSources, function (index, url) {
                var imgElement = $('<img>', {
                    src: url,
                    alt: 'Image ' + (index + 1),
                    class: 'dcm-image-thumb one-half',
                    click: function () {
                        currentIndex = index;
                        loadImageInViwer(`${window.location.origin}/${url}`);
                    }

                });

                $('#dcmThumbs').append(imgElement);
            });
        }

        if (data.information) {
            let info = `<h3 class="org-name"> ${data.information.institutionName} </h3><h5 class="org-address"> ${data.information.institutionAddress}</h5>` +
                `<h6 class="p-info-row"> <span class="p-label">Patient ID:</span> <span class="p-info">${data.information.patientId}</span></h6>` +
                `<h6 class="p-info-row"> <span class="p-label">Patient Name:</span> <span class="p-info">${data.information.patientName}</span></h6>` +
                `<h6 class="p-info-row"> <span class="p-label">Patient Age:</span> <span class="p-info">${data.information.patientAge}</span></h6>` +
                `<h6 class="p-info-row"> <span class="p-label">Patient Sex:</span> <span class="p-info">${data.information.patientSex}</span></h6>`;

            $("#divPatientInfoModal").html(info);
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('An error occurred while fetching data.');
    });





$(document).ready(() => {


    $(".toolbars .control").click(function () {
        
        var targetValue = $(this).attr('data-target');
        if (activeTool) {
            csTools.setToolDisabled(activeTool);
        }
        if (targetValue == "magnifying") {
            csTools.addTool(cornerstoneTools.MagnifyTool)
            csTools.setToolActive('Magnify', { mouseButtonMask: 1 })
            activeTool = 'Magnify';
        } else if (targetValue == "zoom") {
            csTools.addTool(cornerstoneTools.ZoomTool)
            csTools.setToolActive('Zoom', { mouseButtonMask: 1 })
            activeTool = 'Zoom';
        } else if (targetValue == "pane") {
            csTools.addTool(cornerstoneTools.PanTool)
            csTools.setToolActive('Pan', { mouseButtonMask: 1 })
            activeTool = 'Pan';
        } else if (targetValue == "rotate") {
            csTools.addTool(cornerstoneTools.RotateTool)
            csTools.setToolActive('Rotate', { mouseButtonMask: 1 })
            activeTool = 'Rotate';
        } else if (targetValue == "wwwc") {
            csTools.addTool(cornerstoneTools.WwwcRegionTool)
            csTools.setToolActive('WwwcRegion', { mouseButtonMask: 1 })
            activeTool = 'WwwcRegion';
        } else if (targetValue == "angle") {
            csTools.addTool(cornerstoneTools.AngleTool)
            csTools.setToolActive('Angle', { mouseButtonMask: 1 })
            activeTool = 'Angle';
        } else if (targetValue == "arrowannotate") {
            csTools.addTool(cornerstoneTools.ArrowAnnotateTool)
            csTools.setToolActive('ArrowAnnotate', { mouseButtonMask: 1 })
            activeTool = 'ArrowAnnotate';
        } else if (targetValue == "bidirectional") {
            csTools.addTool(cornerstoneTools.BidirectionalTool)
            csTools.setToolActive('Bidirectional', { mouseButtonMask: 1 })
            activeTool = 'Bidirectional';
        } else if (targetValue == "cobbangle") {
            csTools.addTool(cornerstoneTools.CobbAngleTool)
            csTools.setToolActive('CobbAngle', { mouseButtonMask: 1 })
            activeTool = 'CobbAngle';
        } else if (targetValue == "EllipticalRoi") {
            csTools.addTool(cornerstoneTools.EllipticalRoiTool)
            csTools.setToolActive('EllipticalRoi', { mouseButtonMask: 1 })
            activeTool = 'EllipticalRoi';
        }
        else if (targetValue == "FreehandRoi") {
            csTools.addTool(cornerstoneTools.FreehandRoiTool)
            csTools.setToolActive('FreehandRoi', { mouseButtonMask: 1 })
            activeTool = 'FreehandRoi';
        }
        else if (targetValue == "Length") {
            csTools.addTool(cornerstoneTools.LengthTool)
            csTools.setToolActive('Length', { mouseButtonMask: 1 })
            activeTool = 'Length';
        }
        else if (targetValue == "Probe") {
            csTools.addTool(cornerstoneTools.ProbeTool)
            csTools.setToolActive('Probe', { mouseButtonMask: 1 })
            activeTool = 'Length';
        }
        else if (targetValue == "RectangleRoi") {
            csTools.addTool(cornerstoneTools.RectangleRoiTool)
            csTools.setToolActive('RectangleRoi', { mouseButtonMask: 1 })
            activeTool = 'RectangleRoi';
        }
    });

    $("#divViwerWraper").on('wheel', function (event) {

        if (event.originalEvent.deltaY > 0) {
            // Scrolling down - show next image
            currentIndex++;
        } else {
            // Scrolling up - show previous image
            currentIndex--;
        }

        // Ensure the index stays within bounds of the array
        if (currentIndex < 0) {
            currentIndex = imagesSources.length - 1; // Loop to the last image
        } else if (currentIndex >= imagesSources.length) {
            currentIndex = 0; // Loop back to the first image
        }

        // Log the current image's path
        //console.log("Current Image: " + imagesSources[currentIndex]);
        loadImageInViwer(`${window.location.origin}/${imagesSources[currentIndex]}`);
    });

    $("#spnGridController").click(function () {
        if ($("#dcmThumbs .dcm-image-thumb:first-child").hasClass("one-half")) {
            $("#dcmThumbs .dcm-image-thumb").removeClass("one-half").addClass("one-third");
        } else if ($("#dcmThumbs .dcm-image-thumb:first-child").hasClass("one-third")) {
            $("#dcmThumbs .dcm-image-thumb").removeClass("one-third").addClass("one-fourth");
        } else {
            $("#dcmThumbs .dcm-image-thumb").removeClass("one-fourth").removeClass("one-third").addClass("one-half");
        }
    });

    $("#spnSaveIcon").click(() => {
        const canvas = element.querySelector("canvas");
        if (canvas) {
            const imageUrl = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = imageUrl;
            a.download = 'dicom-image.png';
            a.click();
        } else {
            alert('No image available to save.');
        }
    });

    $("#spnViewInformation").click(() => {
        $("#staticBackdrop").modal("show");
    })

})