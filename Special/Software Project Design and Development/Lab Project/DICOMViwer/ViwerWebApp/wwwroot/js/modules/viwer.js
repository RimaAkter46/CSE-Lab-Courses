var imagesSources = [];
var activeTool = null;
var currentIndex = 0;
const API_URL = `${window.location.origin}/Dicom/information`;
var commentId = 0;
var passault = 0;


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


const viwerSubmitCallBack = (data) => {
    if (data.status == "success") {
        window.location.href = window.location.origin;
    } else {
        ShowNotifyMessage(DEFAULT_ERROR_MESSAGE, ERROR_TYPE);
    }
}

const getQueryStringParameter = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

let fetchUrl = (actionName == "completed" ? `${API_URL}/${patientId}?pageName=completed` : `${API_URL}/${patientId}`);

fetch(fetchUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log("Data =>", data);
        $("#loader").hide();
        if (data.files) {
            imagesSources = data.files;
        }

        if (imagesSources.length > 0) {
            loadImageInViwer(`${window.location.origin}/${imagesSources[0]}`);
            $.each(imagesSources, function (index, url) {
                var imgElement = $('<img>', {
                    src: `${window.location.origin}/${url}`,
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
        }
        else if (targetValue == "ZoomMouseWheel") {
            csTools.addTool(cornerstoneTools.ZoomMouseWheelTool)
            csTools.setToolActive('ZoomMouseWheel', { mouseButtonMask: 1 })
            activeTool = 'ZoomMouseWheel';
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
        else if (targetValue == "FreehandMouse") {
            csTools.addTool(cornerstoneTools.FreehandMouseTool)
            csTools.setToolActive('FreehandMouse', { mouseButtonMask: 1 })
            activeTool = 'FreehandMouse';
        }
        else if (targetValue == "Length") {
            csTools.addTool(cornerstoneTools.LengthTool)
            csTools.setToolActive('Length', { mouseButtonMask: 1 })
            activeTool = 'Length';
        }
        else if (targetValue == "Probe") {
            csTools.addTool(cornerstoneTools.ProbeTool)
            csTools.setToolActive('Probe', { mouseButtonMask: 1 })
            activeTool = 'Probe';
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

    $("#spnPatientBack").click(() => {
        window.location.href = window.location.origin;
    })

});